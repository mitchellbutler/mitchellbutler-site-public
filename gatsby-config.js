require('dotenv').config({ path: '.env' })

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'https://medium.com/feed/@mitchellbutler',
        name: 'Medium',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'mitchellbutler',
      },
    },
    {
      resolve: 'gatsby-source-dribbble',
      options: {
        access_token: process.env.DRIBBBLE_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'localImages',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
