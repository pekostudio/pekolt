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
            resolve: `gatsby-plugin-google-analytics`,
                options: {
                    trackingId: "UA-82836730-1",
                    head: true,
                },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
                options: {
                    id: 69395,
                    sv: 5,
                },
        },                       
        {
            resolve: `gatsby-transformer-remark`,
                options: {
                    plugins: [
                        {
                        resolve: `gatsby-remark-images-contentful`,
                            options: {
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