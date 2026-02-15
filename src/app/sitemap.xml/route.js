import projectList from "../../../projects.js";

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-");
}

export async function GET() {
  const baseUrl = "https://makeupcoders.com";

  const staticPages = ["/", "/about", "/services", "/contact"];

  const services = ["web-development", "app-development", "ui-ux-design"];

  const projectUrls = projectList.map((p) => `/projects/${slugify(p.title)}`);

  const urls = [
    ...staticPages,
    ...services.map((s) => `/services/${s}`),
    ...projectUrls,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (path) =>
        `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
