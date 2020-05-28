import { BaseSize } from './config'
import { getPx } from './utils'

export const fontStack = {
  SansSerif: `font-family: "Ideal Sans SSm A", "Ideal Sans SSm B", lato, arial, Helvetica, sans-serif;`,
  Serif: `font-family: "Mercury Display A", "Mercury Display B", georgia, serif;`,
}

export const typography = {
  h1: `
    font-weight: 600;
    font-size: 36px;
    color: #242424;
    line-height: 46px;
    ${fontStack.Serif};
  `,
  h2: `
    font-weight: 600;
    font-size: 23px;
    color: #242424;
    line-height: 36px;
    ${fontStack.Serif};
  `,
  h3: `
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    ${fontStack.Serif};
  `,
  h4: `
    font-weight: 600;
    font-size: 12px;
    color: #242424;
    line-height: 18px;
    ${fontStack.Serif};
  `,
  h4Lower: `
    font-weight: 600;
    text-transform: none;
    ${fontStack.Serif};
  `,
  h5: `
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    ${fontStack.Serif};
  `,
  h6: `
    font-weight: 600;
    font-size: 12px;
    color: #242424;
    line-height: 18px;
    margin-bottom: ${getPx(BaseSize.Baseline)};
    ${fontStack.Serif};
  `,
  h7: `
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    ${fontStack.Serif};
  `,
  ButtonLabel: `
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
  `,
  ButtonLabelSmall: `
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
  `,
  Detail: `
    font-size: 10px;
    line-height: 13.5px;
  `,
  NavigationLabel: `
    font-size: 14px;
    line-height: 20px;
  `,
  NavigationLink: `
    font-size: 14px;
    line-height: 20px;
  `,
  pLarge: `
    font-size: 18px;
    line-height: 27px;
  `,
  p: `
    font-size: 14px;
    line-height: 27px;
  `,
  pSmall: `
    font-size: 12px;
    line-height: 18px;
  `,
  blockquote: `
    font-style: italic;
    font-size: 28px;
    line-height: 45px;
  `,
}
