//gatsby-config.js
require('dotenv').config();

module.exports = {
  siteMetadata: {
      title: 'PEKO',
  },
  plugins: [
        {
            resolve: `gatsby-source-contentful`,
                options: {
                    spaceId: process.env.SPACE_ID,
                    accessToken: process.env.ACCESS_TOKEN,
                },
        },
        {
            resolve: `gatsby-plugin-sharp`,
                options: {
                useMozJpeg: false,
                stripMetadata: true,
                },
        },        
        {
            resolve: `gatsby-transformer-remark`,
                options: {
                    plugins: [
                    {
                        resolve: `gatsby-remark-images-contentful`,
                        options: {
                        // It's important to specify the maxWidth (in pixels) of
                        // the content container as this plugin uses this as the
                        // base for generating different widths of each image.
                        maxWidth: 590,
                        },
                    },
                    ],
                },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-lodash`
  ],
};