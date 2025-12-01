import { ABOUT_ROUTE, BASE_DEPLOYED_URL, BLOG_ROUTE, BLOGS_ROUTE, PROJECTS_ROUTE } from "~/constants/routes";
import { getAllBlogPosts } from "~/mdx/server";

export async function loader() {
  const baseUrl = BASE_DEPLOYED_URL;
  const currentDate = new Date().toISOString().split("T")[0];

  // Get all blog posts
  const blogPosts = getAllBlogPosts();

  // Static routes
  const staticRoutes = [
    { url: "", priority: "1.0", changefreq: "monthly" },
    { url: ABOUT_ROUTE, priority: "0.8", changefreq: "monthly" },
    { url: BLOGS_ROUTE, priority: "0.8", changefreq: "weekly" },
    { url: PROJECTS_ROUTE, priority: "0.8", changefreq: "weekly" },
  ];

  // Generate blog post routes
  const blogRoutes = blogPosts
    .map((post) => ({
      url: `${BLOG_ROUTE}/${post.slug}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: post.date
        ? new Date(post.date).toISOString().split("T")[0]
        : currentDate,
    }));

  // Combine all routes
  const allRoutes = [...staticRoutes, ...blogRoutes];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
