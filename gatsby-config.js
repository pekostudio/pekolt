//gatsby-config.js
require('dotenv').config();

module.exports = {
  siteMetadata: {
      title: 'PEKO'
  },
  plugins: [
      {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: process.env.SPACE_ID,
            accessToken: process.env.ACCESS_TOKEN,
          },
      },
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-offline',
      'gatsby-transformer-remark',
      'gatsby-image'
  ],
};
