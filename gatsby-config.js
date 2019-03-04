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
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
              id: "GTM-WCXRFX7",
        
              // Include GTM in development.
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: false,
        
              // Specify optional GTM environment details.
              gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
              gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
            },
        },                     
        {
            resolve: `gatsby-transformer-remark`,
                options: {
                    plugins: [
                        {
                        resolve: `gatsby-remark-images-contentful`,
                            options: {
                                maxWidth: 1000,
                                showCaptions: false,
                                linkImagesToOriginal: true,
                            },
                        },
                    ],
                },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-lodash`
  ],
};