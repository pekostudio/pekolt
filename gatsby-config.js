module.exports = {
  siteMetadata: {
    title: 'PEKO',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'peko',
        short_name: 'peko',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/peko-logo-header-top.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
