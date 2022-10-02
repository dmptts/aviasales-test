import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import OpenSansRegularWoff from './fonts/opensans-regular.woff';
import OpenSansRegularWoff2 from './fonts/opensans-regular.woff2';
import OpenSansSemiboldWoff from './fonts/opensans-semibold.woff'
import OpenSansSemiboldWoff2 from './fonts/opensans-semibold.woff2'


export default createGlobalStyle`
  ${normalize}

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Open Sans";
    font-display: swap;
    src:
      url(${OpenSansRegularWoff2}) format("woff2"),
      url(${OpenSansRegularWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 600;
    font-family: "Open Sans";
    font-display: swap;
    src:
      url(${OpenSansSemiboldWoff2}) format("woff2"),
      url(${OpenSansSemiboldWoff}) format("woff");
  }

  :root {
    --default-white: #FFFFFF;
    --charcoal: #4A4A4A;
    --heather: #9ABBCE;
    --dodger-blue: #2196F3;
    --alex-blue: #F3F7FA;
    --gull-grey: #A0B0B9;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Open Sans", Arial, sans-serif;
    color: var(--charcoal);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    width: 100%;
    height: 100%;

    background-color: var(--alex-blue);
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1000px $color-default-white;

    -webkit-text-fill-color: $color-default-black;
  }

  // firefox placeholder \ invalid fix + ios bdrs
  input,
  textarea {
    border-radius: 0;

    &::placeholder {
      opacity: 1;
    }

    &:invalid {
      box-shadow: none;
    }
  }

  select {
    border-radius: 0;
  }

  // chrome search X removal
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    appearance: none;
  }

  // input[number] arrows removal
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  // ios button \ inputs reset
  select,
  textarea,
  input:matches([type="email"],
    [type="number"],
    [type="password"],
    [type="search"],
    [type="tel"],
    [type="text"],
    [type="url"]) {
    appearance: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: none;
  }
`

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
`