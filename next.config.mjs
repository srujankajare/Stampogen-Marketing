import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML/CSS/JS for nginx (same pattern as Invogen-Marketing)
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  outputFileTracingRoot: path.join(__dirname, "./"),
};

export default nextConfig;
