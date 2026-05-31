import path from "node:path";
import type { NextConfig } from "next";

// `basePath` để trống khi chạy local (npm run dev / build thường).
// Trên GitHub Pages, CI sẽ set PAGES_BASE_PATH = "/portfolio" (tên repo).
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Xuất ra HTML/CSS/JS tĩnh trong thư mục `out/` để host trên GitHub Pages.
  output: "export",
  basePath,
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
