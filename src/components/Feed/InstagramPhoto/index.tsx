import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { gridGutter, gridColumn } from '@humancollective/human-grid-web'
import Img from 'gatsby-image'

import { InstagramFeedItem } from '../../../types'
import { FeedCard } from '../shared/FeedCard'
import { getPx, BaseSize, typography } from '../../../style'

const StyledFeedInstagramPhoto = styled(FeedCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .feed-instagram-photo {
    &__date {
      color: #848484;
    }
    &__image-container {
      width: ${gridColumn(4)};
      flex: 1;
      flex-shrink: 0;
    }
    &__contents {
      width: ${gridColumn(4)};
      padding: ${getPx(BaseSize.Baseline)} ${gridGutter(1 / 2)};
      flex: 1;
      flex-shrink: 0;
    }
    &__caption {
      margin-top: ${getPx(BaseSize.Baseline)};
      ${typography.pLarge};
    }
    &__link {
      display: block;
      margin-top: ${getPx(BaseSize.Baseline)};
      color: #8a3ab9;
    }
  }
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 477px) {
    .feed-instagram-photo {
      &__image-container,
      &__contents {
        width: 100%;
      }
    }
  }
`

export const FeedInstagramPhoto: React.FunctionComponent<InstagramFeedItem> = ({
  id,
  image,
  date,
  caption,
}) => (
  <StyledFeedInstagramPhoto>
    <a
      href={`https://www.instagram.com/p/${id}`}
      className="feed-instagram-photo__image-container"
      target="_blank"
    >
      <Img className="feed-instagram-photo__image" fluid={image} />
    </a>

    <div className="feed-instagram-photo__contents">
      <div className="feed-instagram-photo__date">
        {format(date, 'MMMM do yyyy')}
      </div>
      <p className="feed-instagram-photo__caption">{caption}</p>
      <a
        className="feed-instagram-photo__link"
        href={`https://www.instagram.com/p/${id}`}
        target="_blank"
      >
        View on Instagram
      </a>
    </div>
  </StyledFeedInstagramPhoto>
)
