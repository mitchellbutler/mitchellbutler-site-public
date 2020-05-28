import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns/esm'
import { gridColumn } from '@humancollective/human-grid-web'
import ReactHtmlParser from 'react-html-parser'

import { MediumFeedItem } from '../../../types'
import { FeedCard } from '../shared/FeedCard'
import { ClassNames, getPx, BaseSize, typography } from '../../../style'

const StyledFeedMediumPost = styled(FeedCard)`
  .feed-medium-post {
    &__meta {
      margin-top: ${getPx(BaseSize.Baseline, 1 / 2)};
      margin-bottom: ${getPx(BaseSize.Baseline, 2)};
    }
    &__date {
      color: #848484;
    }
    &__link {
      color: #00ab6c;
    }
    &__content {
      max-width: ${gridColumn(6)};
      margin-top: ${getPx(BaseSize.Baseline)};
      p,
      li {
        ${typography.pLarge};
        margin-top: ${getPx(BaseSize.Baseline)};
      }
      h3 {
        font-size: 26px;
        line-height: 1.5;
      }
      blockquote {
        font-style: italic;
        font-size: 18px;
        line-height: 24px;
        color: #868686;
      }
      img,
      iframe {
        max-width: 100%;
        max-height: 450px;
      }
    }
  }
`

export const FeedMediumPost: React.FunctionComponent<MediumFeedItem> = ({
  title,
  date,
  url,
  encodedContent,
}) => (
  <StyledFeedMediumPost>
    <h1 className={ClassNames.H1}>{title}</h1>
    <div className="feed-medium-post__meta">
      <span className="feed-medium-post__date">
        {format(date, 'MMMM do yyyy')}
      </span>
      &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
      <a className="feed-medium-post__link" href={url} target="_blank">
        Read on Medium
      </a>
    </div>
    <div className="feed-medium-post__content">
      {ReactHtmlParser(encodedContent)}
    </div>
  </StyledFeedMediumPost>
)
