import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --accent_pink: rgb(252, 171, 166);
  --border_basic_1: rgb(214, 214, 214);
  --border_basic_2: rgb(153, 147, 147);
  --accent_yellow: rgb(255, 215, 130);
  --accent_purple: rgb(174, 154, 247);
  --accent_green: rgb(146, 248, 214);
  --accent_blue: rgb(72, 111, 238);
}

*,*::before,*::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 62.5%; 
    /* 1rem 16px -> 10px */
}
body{
    font-family: "IBM Plex Sans", sans-serif;
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem; 
    //기본폰트는 다시 16px로
}
input,
button,
textarea,
select {
    font: inherit;
    color: inherit;
}
button {
    cursor: pointer;
}
*:disabled {
    cursor: not-allowed;
}
select:disabled,
input:disabled {
    background-color: gray;
    color: gray;
}
input:focus,
button:focus,
textarea:focus,
select:focus {
     outline: 2px solid var(--color-brand-600);
     outline-offset: -1px;
}
button:has(svg) {
      line-height: 0;
}
a {
    color: inherit;
    text-decoration: none;
}
ul {
    list-style: none;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
    hyphens: auto;
}
img{
    max-width: 100%;
}

`;
export default GlobalStyles;
