const path = require(`path`)
//const fs = require("fs-extra")
const { slash } = require(`gatsby-core-utils`)
const createPaginatedPages = require('gatsby-paginate')
const queryAll = require(`./src/queries/queryAll.js`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(queryAll)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage, allWordpressPost } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const pages = allWordpressPage.edges

  pages.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const posts = allWordpressPost.edges

  createPaginatedPages({
    edges: posts,
    createPage: createPage,
    pageTemplate: "src/templates/posts.js",
    pageLength: 15,
    pathPrefix: "aktualnosci"
  })

  posts.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}

// exports.onPostBuild = () => {
//     fs.copySync(path.join(__dirname, "public"), path.join(__dirname, "../public-gatsby-test"),{ overwrite: true })
// }