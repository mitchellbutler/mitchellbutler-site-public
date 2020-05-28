import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Grid, gridColumn, gridGutter } from '@humancollective/human-grid-web'
import Img, { FluidObject } from 'gatsby-image'
import { useIsScrolling } from 'react-use-is-scrolling'

import { sortAndCombineFeed } from '../utils/sortAndCombineFeed'
import { FeedDribbbleShot } from '../components/Feed/DribbbleShot'
import { FeedInstagramPhoto } from '../components/Feed/InstagramPhoto'
import { FeedMediumPost } from '../components/Feed/MediumPost'
import { ClassNames, getPx, BaseSize } from '../style'
import {
  FeedItemType,
  FeedMediumSourceNode,
  InstagramSourceNode,
  DribbbleSourceNode,
  FeedItem,
} from '../types'
import { Pagination } from '../components/Pagination'

const StyledFeedPage = styled.div`
  .home-page {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
    }
    &__photo {
      max-width: ${gridColumn(3)};
      margin-top: ${getPx(BaseSize.Baseline)};
      margin-bottom: ${getPx(BaseSize.Baseline, 1 / 2)};
    }
    &__external-profile {
      display: block;
    }
    &__sidebar-scroll-wrapper {
      flex-shrink: 0;
      max-width: ${gridColumn(4)};
      margin-right: ${gridGutter()};
    }
    &__sidebar {
      position: -webkit-sticky;
      position: sticky;
      top: 10vh;
      max-width: ${gridColumn(3)};
      transition: opacity 500ms ease;
      p {
        margin-top: ${getPx(BaseSize.Baseline, 1)};
      }
      &.is--faded {
        opacity: 0.3;
      }
    }
    &__feed {
      max-width: ${gridColumn(8)};
      padding-top: 20vh;
    }

    @media (max-width: 765px) {
      &__wrapper {
        align-items: center;
      }
      &__sidebar-scroll-wrapper {
        max-width: none;
        margin-right: 0;
        width: 100%;
      }
    }
  }
`

interface FeedPageProps {
  pageContext: {
    pageNumber: number
    totalPages: number
  }
  data: {
    me: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    allFeedMedium: {
      nodes: FeedMediumSourceNode[]
    }
    allInstaNode: {
      nodes: InstagramSourceNode[]
    }
    allDribbbleShot: {
      nodes: DribbbleSourceNode[]
    }
  }
}

const PROFILE_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mitchellbutler/' },
  { label: 'Instagram', href: 'https://www.instagram.com/mitchellbutler/' },
  { label: 'Dribbble', href: 'https://dribbble.com/mitchellbutler' },
  { label: 'Twitter', href: 'https://twitter.com/mitchellbutler' },
  { label: 'Medium', href: 'https://medium.com/@mitchellbutler' },
]

const renderFeedItem = (item: FeedItem) => {
  switch (item.type) {
    case FeedItemType.Medium:
      return <FeedMediumPost key={item.id} {...item} />
    case FeedItemType.Instagram:
      return <FeedInstagramPhoto key={item.id} {...item} />
    case FeedItemType.Dribbble:
      return <FeedDribbbleShot key={item.id} {...item} />
    default:
      return null
  }
}

const FeedPage: React.FunctionComponent<FeedPageProps> = ({
  data,
  pageContext,
}) => {
  const { isScrolling } = useIsScrolling()
  const feed = sortAndCombineFeed({
    allMediumNodes: data.allFeedMedium.nodes,
    allInstagramNodes: data.allInstaNode.nodes,
    allDribbbleNodes: data.allDribbbleShot.nodes,
  })
  return (
    <StyledFeedPage>
      <Grid.Container>
        <Grid.Inner withMargins className="home-page__wrapper">
          <div className="home-page__sidebar-scroll-wrapper">
            <Img
              className="home-page__photo"
              fluid={data.me.childImageSharp.fluid}
            />
            <div
              className={`home-page__sidebar ${isScrolling ? 'is--faded' : ''}`}
            >
              <p className={ClassNames.PLarge}>👋 Hey, I'm Mitch Butler.</p>
              <p className={ClassNames.P}>
                I'm a product designer and developer from Halifax, currently
                based in Toronto.
              </p>
              <p className={ClassNames.P}>
                In 2018, I founded{' '}
                <a href="https://humancollective.co" target="_blank">
                  Human Collective
                </a>
                <br />
                In 2010, I co-founded{' '}
                <a href="https://mappedin.com" target="_blank">
                  Mappedin
                </a>
              </p>
              <p className={ClassNames.P}></p>
              <p className={ClassNames.P}>
                {PROFILE_LINKS.map(({ label, href }) => (
                  <a
                    className="home-page__external-profile"
                    href={href}
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    {label}
                  </a>
                ))}
              </p>
            </div>
          </div>
          <div className="home-page__feed">{feed.map(renderFeedItem)}</div>
        </Grid.Inner>
        <Pagination
          currentPage={pageContext.pageNumber}
          totalPages={pageContext.totalPages}
        />
      </Grid.Container>
    </StyledFeedPage>
  )
}

export default FeedPage

export const query = graphql`
  query FeedPageQuery(
    $mediumNodes: [String]
    $instagramNodes: [String]
    $dribbbleNodes: [String]
  ) {
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 288) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFeedMedium(filter: { id: { in: $mediumNodes } }) {
      nodes {
        id
        link
        content {
          encoded
        }
        pubDate
        title
      }
    }
    allInstaNode(filter: { id: { in: $instagramNodes } }) {
      nodes {
        id
        caption
        timestamp
        localFile {
          childImageSharp {
            fluid(maxWidth: 396) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allDribbbleShot(filter: { id: { in: $dribbbleNodes } }) {
      nodes {
        id
        url
        title
        description
        cover
        published
        localCover {
          childImageSharp {
            fluid(maxWidth: 396) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
