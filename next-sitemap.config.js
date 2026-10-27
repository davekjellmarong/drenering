/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dindrenering.no",
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
