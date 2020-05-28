import React from 'react'
import styled from 'styled-components'
import { getPx, BaseSize } from '../../../style'
import { gridGutter } from '@humancollective/human-grid-web'

const StyledHoverToLoad = styled.div`
  max-width: 100%;

  .hover-to-load {
    &__image {
      width: 100%;
    }
    &__message-wrapper {
      background: #f5f5f5;
      padding-top: 75%;
      position: relative;
    }
    &__message {
      padding: ${getPx(BaseSize.Baseline, 3.5)} ${gridGutter()};
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

interface HoverToLoadProps {
  mediaUrl: string
  className?: string
}

export const HoverToLoad: React.FunctionComponent<HoverToLoadProps> = ({
  mediaUrl,
  className,
}) => {
  const [shouldLoad, setShouldLoad] = React.useState(false)

  const onHover = () => {
    if (!shouldLoad) {
      setShouldLoad(true)
    }
  }

  return (
    <StyledHoverToLoad className={className} onMouseEnter={onHover}>
      {shouldLoad ? (
        <img className="hover-to-load__image" src={mediaUrl} />
      ) : (
        <div className="hover-to-load__message-wrapper">
          <div className="hover-to-load__message">hover to load</div>
        </div>
      )}
    </StyledHoverToLoad>
  )
}
