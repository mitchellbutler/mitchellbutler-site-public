import { Color } from './config'
import { NORMALIZE_CSS } from './lib/normalize'
import { typography, fontStack } from './typography'

export const GLOBAL_STYLE_CSS = `
  ${NORMALIZE_CSS};

  * {
    box-sizing: border-box;
  }

  body {
    ${fontStack.SansSerif};
    height: 100%;
    font-weight: 400;
    color: ${Color.OffBlack};
  }

  a {
    color: ${Color.DeepPurple};
    text-underline-position: under;
  }

  p, h1, h2, h3, h4, h5, h6, h7 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  hr {
    height: 1px;
    border: none;
    background: #eaeaea;
  }

  .H1 { ${typography.h1}; }
  .H2 { ${typography.h2}; }
  .H3 { ${typography.h3}; }
  .H4 { ${typography.h4}; }
  .H5 { ${typography.h5}; }
  .H6 { ${typography.h6}; }
  .H7 { ${typography.h7}; }

  .P { ${typography.p} }
  .P-Large { ${typography.pLarge} }

  strong {
    font-weight: 600;
  }
`

export enum ClassNames {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  H7 = 'H7',
  P = 'P',
  PLarge = 'P-Large',
}
