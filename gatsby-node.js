const filter = require('lodash/filter')
const chunk = require('lodash/chunk')
const path = require('path')

const feedPageTemplate = path.resolve('src/templates/FeedPage.tsx')

const NODES_PER_PAGE = 10

const ServiceType = {
  Medium: 'MEDIUM',
  Instagram: 'INSTAGRAM',
  Dribbble: 'DRIBBBLE',
}

exports.createPages = async ({ actions, graphql }) => {
  try {
    const { createPage } = actions

    const feedQuery = await graphql(`
      query {
        allFeedMedium {
          nodes {
            id
            pubDate
          }
        }
        allInstaNode {
          nodes {
            id
            timestamp
          }
        }
        allDribbbleShot {
          nodes {
            id
            published
          }
        }
      }
    `)

    const { allFeedMedium, allInstaNode, allDribbbleShot } = feedQuery.data

    const processNodes = (nodes, { type, dateProp }) =>
      nodes.map(({ id, ...props }) => ({
        id,
        type,
        date: new Date(props[dateProp]),
      }))

    const allNodes = [
      ...processNodes(allFeedMedium.nodes, {
        type: ServiceType.Medium,
        dateProp: 'pubDate',
      }),
      ...processNodes(allInstaNode.nodes, {
        type: ServiceType.Instagram,
        dateProp: 'timestamp',
      }),
      ...processNodes(allDribbbleShot.nodes, {
        type: ServiceType.Dribbble,
        dateProp: 'published',
      }),
    ]

    const getNodesForService = (type, nodes) =>
      filter(nodes, { type }).map(({ id }) => id)

    const sortedNodes = allNodes.sort((a, b) => (a.date > b.date ? -1 : 1))
    const pagedNodes = chunk(sortedNodes, NODES_PER_PAGE)
    const totalPages = pagedNodes.length

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const pagedPath = pageNumber > 1 ? `/page/${pageNumber}/` : '/'
      const nodesForPage = pagedNodes[pageNumber - 1]
      await createPage({
        path: pagedPath,
        component: feedPageTemplate,
        context: {
          // query
          mediumNodes: getNodesForService(ServiceType.Medium, nodesForPage),
          dribbbleNodes: getNodesForService(ServiceType.Dribbble, nodesForPage),
          instagramNodes: getNodesForService(
            ServiceType.Instagram,
            nodesForPage,
          ),
          // pagination
          pageNumber,
          totalPages,
        },
      })
    }
  } catch (error) {
    console.error(error)
  }
}
