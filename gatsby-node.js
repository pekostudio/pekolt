const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const portfolioTemplate = path.resolve('src/templates/blog-post.js')
  const newsTemplate = path.resolve('src/templates/news-post.js')

  return graphql(`
        {
          portfolio: allContentfulPortfolio(
            sort: {fields: createdAt, order:ASC}
          ) {
             edges {
               node {
                 slug
              }
            }
          }
          news: allContentfulBlog(
            sort: {fields: createdAt, order:DESC}
          ) {
             edges {
               node {
                 slug
              }
            }
          }          
        }
      `
      ).then((result) => {
        if (result.errors) {
          Promise.reject(result.errors);
        }
        // Create Portfolio pages
        result.data.portfolio.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: portfolioTemplate,
            context: {
              slug: edge.node.slug,      
            }
          })
        })
        // Create News pages
        result.data.news.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: newsTemplate,
            context: {
              slug: edge.node.slug,      
            }                     
          })
        })        
      })
  return Promise.all([portfolio, news]);
}
