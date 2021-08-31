module.exports = {
  siteMetadata: {
    siteUrl: "https://mygatsbyblog34579.gatsbyjs.io/",
    title: "My Dev Gatsby Blog",
    description: "A blog about front-end web development",
    keywords: [`gatsby`, `react`, `blog`],
    author: "Hugonin",
    twitterUsername: "@JhDoumbe"
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 500,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#E9FBF8`,
        theme_color: `#00856C`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
  ],
};
