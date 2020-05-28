import React from 'react'
import styled from 'styled-components'
import { getPx, BaseSize } from '../../../style'

const StyledFeedCard = styled.div`
  margin-bottom: ${getPx(BaseSize.Baseline, 6)};
`

export const FeedCard: React.FunctionComponent = ({ children, ...rest }) => (
  <StyledFeedCard {...rest}>{children}</StyledFeedCard>
)
