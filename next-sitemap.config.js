/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.dindrenering.no",
  generateRobotsTxt: true,
  exclude: [
    "/cities",
    "/kontrollpanel",
    "/tilbud/takk",
    "/bli-partner/takk",
    "/icon.png",
    "/apple-icon.png",
    "/om-oss/visjon",
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/kontrollpanel"] }],
  },
};
