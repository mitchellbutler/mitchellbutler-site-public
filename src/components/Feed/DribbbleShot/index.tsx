import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'
import { format } from 'date-fns'
import { gridGutter, gridColumn } from '@humancollective/human-grid-web'
import Img from 'gatsby-image'

import { DribbbleFeedItem } from '../../../types'
import { FeedCard } from '../shared/FeedCard'
import { getPx, BaseSize, typography, ClassNames } from '../../../style'
import { HoverToLoad } from './HoverToLoad'

const StyledFeedDribbbleShot = styled(FeedCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .feed-dribbble-shot {
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
      p {
        margin-top: ${getPx(BaseSize.Baseline)};
        ${typography.pLarge};
      }
    }
    &__link {
      display: block;
      margin-top: ${getPx(BaseSize.Baseline)};
      color: #ec4a8a;
    }
  }
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 477px) {
    .feed-dribbble-shot {
      &__image-container,
      &__contents {
        width: 100%;
      }
    }
  }
`

export const FeedDribbbleShot: React.FunctionComponent<DribbbleFeedItem> = ({
  localImage,
  remoteMedia,
  title,
  url,
  date,
  caption,
}) => (
  <StyledFeedDribbbleShot>
    <a
      href={url}
      className="feed-dribbble-shot__image-container"
      target="_blank"
    >
      {!!localImage ? (
        <Img className="feed-dribbble-shot__image" fluid={localImage} />
      ) : (
        <HoverToLoad
          className="feed-dribbble-shot__image"
          mediaUrl={remoteMedia}
        />
      )}
    </a>
    <div className="feed-dribbble-shot__contents">
      <div className="feed-dribbble-shot__date">
        {format(date, 'MMMM do yyyy')}
      </div>
      <div className="feed-dribbble-shot__caption">
        <h2 className={ClassNames.H2}>{title}</h2>
        {ReactHtmlParser(caption)}
      </div>
      <a className="feed-dribbble-shot__link" href={url} target="_blank">
        View on Dribbble
      </a>
    </div>
  </StyledFeedDribbbleShot>
)
