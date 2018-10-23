const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulPortfolio (limit: 100) {
             edges {
               node {
                 id
                 slug
                 title
               }
             }
           }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulPortfolio.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}
