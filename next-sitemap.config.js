/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.dindrenering.no",
  // Static export: the site is built into out/, so write the sitemap there.
  outDir: "out",
  generateRobotsTxt: true,
  exclude: [
    "/cities",
    "/kontrollpanel",
    "/tilbud/takk",
    "/bli-partner/takk",
    "/icon.png",
    "/apple-icon.png",
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/kontrollpanel"] }],
  },
};
