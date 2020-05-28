import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { gridSettingsFromColumnsAndUnits } from '@humancollective/human-grid-web'

import { GLOBAL_STYLE_CSS } from '../style'

const GlobalStyle = createGlobalStyle`${GLOBAL_STYLE_CSS}`

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .layout {
    &__content {
      flex: 1;
    }
  }
`
const TemplateWrapper: React.FunctionComponent = ({ children }) => (
  <ThemeProvider
    theme={{
      grid: gridSettingsFromColumnsAndUnits({ columns: 12 }),
    }}
  >
    <GlobalStyle />
    <Helmet key="layout-helmet">
      <title>Mitchell Butler</title>
      <link
        rel="stylesheet"
        type="text/css"
        href={process.env.GATSBY_HOEFLER_URL}
      />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
    </Helmet>
    <StyledLayout>
      <div className="layout__content">{children}</div>
    </StyledLayout>
  </ThemeProvider>
)

export default TemplateWrapper
