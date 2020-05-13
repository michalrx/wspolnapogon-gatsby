module.exports = {
  siteMetadata: {
    title: `WspólnaPogoń.pl`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@michalrx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "wspolnapogon.pl",
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: false,
        //acfOptionPageIds: [],
        cookies: {},
        verboseOutput: false,
        //perPage: 100,
        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          "**/tags",
          //"**/taxonomies",
          //"**/users",
          //"/sportspress/**",
        ],
        excludedRoutes: [
          "/yoast/**"
        ],
      },
    },
    `gatsby-background-image`,
    `gatsby-plugin-netlify-cache`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
