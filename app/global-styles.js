import { createGlobalStyle } from 'styled-components';

export function bpMedium() {
  // 1200px
  return '75em';
}

export function bpVeryBig() {
  // 1845px
  return '115.31em';
}

export function bpVeryLarge() {
  // 1595px
  return '99.68em';
}

export function bpLarge() {
  // 1515px
  return '94.68em';
}

export function bpVeryMedium() {
  // 1005px
  return '62.81em';
}

export function bpSmall() {
  // 850px
  return '53.12em';
}

const GlobalStyle = createGlobalStyle`

html,
body {
  font-size: 62.5%;
}
:root {
    /* COLORS */
    --color-primary: #eb2f64;
    --color-primary-light: #FF3366;
    --color-primary-dark: #BA265D;
    
    --color-grey-light-1: #faf9f9;
    --color-grey-light-2: #f4f2f2;
    --color-grey-light-3: #f0eeee;
    --color-grey-light-4: #ccc;
    
    --color-grey-dark-1: #333;
    --color-grey-dark-2: #777;
    --color-grey-dark-3: #999;

    /* SHADOWS */
    --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
    --shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);

    /* BORDERS */
    --line: 1px solid var(--color-grey-light-2);
  }
  
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.6rem;
    box-sizing: border-box;
    color: var(--color-grey-dark-2);
    min-height: 100vh;
    background-image: linear-gradient(
    to right bottom,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
    background-size: cover;
    background-repeat: no-repeat;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
  }
`;

export default GlobalStyle;
