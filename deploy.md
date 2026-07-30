# Deploy Stampogen Marketing (VPS + Docker + GitHub Actions)

Static Next.js site served by nginx in Docker. Same pattern as Invogen-Marketing.
Container listens on **127.0.0.1:3082** (host nginx proxies your domain here).

| Port | App |
|------|-----|
| 3080 | Invogen marketing |
| 3081 | Stampogen product |
| **3082** | **Stampogen marketing (this site)** |

---

## Prerequisites

- VPS with Docker + Docker Compose installed
- Domain DNS **A record** pointing to your VPS IP (e.g. `stampogen.com`, `www.stampogen.com`)
- Host nginx (or Caddy) already reverse-proxying your other sites
- SSH access to the VPS
- This repo on GitHub: `https://github.com/srujankajare/Stampogen-Marketing.git`

---

## Step 1 — Commit and push deploy files

Ensure these are on `main`:

- `Dockerfile`
- `docker-compose.yml`
- `nginx.conf`
- `.dockerignore`
- `next.config.mjs` (`output: "export"`)
- `.github/workflows/deploy.yml`
- `deploy.md` (this guide)

```bash
git add Dockerfile docker-compose.yml nginx.conf .dockerignore next.config.mjs .github deploy.md .gitignore
git commit -m "Add Docker and GitHub Actions deploy for marketing site"
git push origin main
```

---

## Step 2 — Clone on the VPS (one-time)

SSH into the VPS, then:

```bash
# Pick a path (example)
sudo mkdir -p /var/www
sudo chown $USER:$USER /var/www
cd /var/www

git clone https://github.com/srujankajare/Stampogen-Marketing.git
cd Stampogen-Marketing
```

Note this path — it becomes `VPS_DEPLOY_PATH` (e.g. `/var/www/Stampogen-Marketing`).

---

## Step 3 — First Docker build on the VPS

```bash
cd /var/www/Stampogen-Marketing
docker compose up -d --build
```

Check:

```bash
docker ps | grep stampogen-marketing
curl -I http://127.0.0.1:3082/
```

You should get `HTTP/1.1 200`.

---

## Step 4 — Host nginx reverse proxy

Create a site config (path may be `/etc/nginx/sites-available/stampogen-marketing`):

```nginx
server {
    listen 80;
    server_name stampogen.com www.stampogen.com;

    location / {
        proxy_pass http://127.0.0.1:3082;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/stampogen-marketing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 5 — SSL with Certbot

```bash
sudo certbot --nginx -d stampogen.com -d www.stampogen.com
```

Visit `https://stampogen.com` and confirm the marketing site loads.

---

## Step 6 — GitHub Actions secrets

In GitHub → **Stampogen-Marketing** → **Settings** → **Secrets and variables** → **Actions**, add:

| Secret | Example / meaning |
|--------|-------------------|
| `VPS_HOST` | VPS IP or hostname |
| `VPS_USER` | SSH username (e.g. `root` or `ubuntu`) |
| `VPS_SSH_KEY` | Private SSH key (full PEM contents) |
| `VPS_DEPLOY_PATH` | `/var/www/Stampogen-Marketing` |

### SSH key tip

On your machine (or VPS), if you need a deploy key:

```bash
ssh-keygen -t ed25519 -C "github-stampogen-marketing" -f ~/.ssh/stampogen_marketing_deploy -N ""
```

- Put the **public** key in VPS `~/.ssh/authorized_keys`
- Put the **private** key contents into GitHub secret `VPS_SSH_KEY`

---

## Step 7 — Test auto-deploy

1. Make a small change (or empty commit) and push to `main`
2. Open **Actions** tab → workflow **Deploy marketing site**
3. Confirm it succeeds
4. Refresh the live site

Manual run: Actions → **Deploy marketing site** → **Run workflow**.

---

## Day-to-day

After setup, you only:

```bash
git push origin main
```

The workflow will SSH in, `git reset --hard origin/main`, and run `docker compose up -d --build`.

---

## Useful commands (on VPS)

```bash
cd /var/www/Stampogen-Marketing

# Logs
docker compose logs -f web

# Rebuild manually
docker compose up -d --build

# Stop
docker compose down

# Status
docker ps | grep stampogen-marketing
curl -I http://127.0.0.1:3082/
```

---

## Troubleshooting

| Problem | Check |
|---------|--------|
| Actions fail on SSH | `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, firewall allows SSH |
| Actions fail on `cd` | `VPS_DEPLOY_PATH` matches the clone path |
| Build fails on VPS | `docker compose logs`; ensure Docker has disk space |
| Domain 502 | Container up? `curl 127.0.0.1:3082`; nginx `proxy_pass` port **3082** |
| Wrong site loads | DNS / `server_name` pointing at another vhost |
| Port conflict | Confirm nothing else binds `3082` (`ss -tlnp \| grep 3082`) |

---

## Architecture

```
GitHub push → main
    → Actions SSH → VPS
        → git pull (reset to main)
        → docker compose up -d --build
            → Next.js static export → nginx:80 inside container
                → host 127.0.0.1:3082
                    → host nginx + SSL → public domain
```
