import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";
import { CssBaseline } from "@mui/material";

const root = process.cwd();
const distDir = path.join(root, "dist");
const siteUrl = process.env.google_site_verification || "https://kaving.vercel.app";
const today = new Date().toISOString().slice(0, 10);

const vite = await createServer({
  root,
  appType: "custom",
  logLevel: "silent",
  server: {
    middlewareMode: true,
  },
});

try {
  const [{ default: App }, { default: ThemeProviderWrapper }, metadataModule] =
    await Promise.all([
      vite.ssrLoadModule("/src/App.jsx"),
      vite.ssrLoadModule("/src/theme/ThemeProviderWrapper.jsx"),
      vite.ssrLoadModule("/src/seo/siteMetadata.js"),
    ]);

  const appHtml = renderToString(
    React.createElement(
      ThemeProviderWrapper,
      null,
      React.createElement(React.Fragment, null, React.createElement(CssBaseline), React.createElement(App))
    )
  );

  const indexPath = path.join(distDir, "index.html");
  const indexHtml = await fs.readFile(indexPath, "utf8");
  const absoluteSiteUrl = siteUrl.replace(/\/$/, "");
  const prerenderedHtml = indexHtml
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('href="/"', `href="${absoluteSiteUrl}/"`)
    .replace('content="/"', `content="${absoluteSiteUrl}/"`)
    .replaceAll('content="/images/port.jpg"', `content="${absoluteSiteUrl}/images/port.jpg"`);

  await fs.writeFile(indexPath, prerenderedHtml, "utf8");

  const sitemapUrl = `${absoluteSiteUrl}/sitemap.xml`;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>${absoluteSiteUrl}/</loc>\n` +
    `    <lastmod>${today}</lastmod>\n` +
    `    <changefreq>monthly</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`;

  await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

  const robotsPath = path.join(distDir, "robots.txt");
  const robotsBase = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;
  await fs.writeFile(robotsPath, robotsBase, "utf8");

  console.log(`Prerendered ${metadataModule.SITE_TITLE}`);
  console.log(`Wrote sitemap to ${path.join("dist", "sitemap.xml")}`);
} finally {
  await vite.close();
}
