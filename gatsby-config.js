module.exports = {
  siteMetadata: {
    title: `dev journal`,
    description: `my internship documentation`,
    author: `@ciszekmarcell`,
    titleTemplate: "%s · Marcell",
    url: "https://www.marcellable.com", // No trailing slash allowed!
    image: "/images/plane.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@CiszekMarcell",
    sitePaths: [
      {
        name: "categories",
        path: "/tags",
      },
      {
        name: "posts",
        path: "/posts",
      },
      {
        name: "contact",
        path: "/contact",
      },
    ],
    socialList: [
      {
        name: "twitter",
        account: "https://twitter.com/CiszekMarcell",
      },
      {
        name: "github",
        account: "https://github.com/masiuciszek",
      },
      {
        name: "instagram",
        account: "https://instagram.com/masiuciszek",
      },
    ],
    aboutData: {
      short: "I am a developer from Gothenburg Sweden",
      desc: "This is my journal about my first school internship",
      desc2:
        "Tank you for visiting this site and hope you can find something useful for you as well 🐻λ🤓",
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-mdx`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-story`,
        short_name: `story`,
        start_url: `/`,
        background_color: `#323232`,
        theme_color: `#323233`,
        display: `minimal-ui`,
        icon: `src/images/plane.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
