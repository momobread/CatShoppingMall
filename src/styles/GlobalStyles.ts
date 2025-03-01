import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    /* accecnt color */
  --color-accent_pink: rgb(252, 171, 166);
  --color-accent_yellow: rgb(255, 215, 130);
  --color-accent_purple: rgb(174, 154, 247);
  --color-accent_green: rgb(146, 248, 214);
  --color-accent_blue: #98E4FF;
  --color-accent_blue2 : #DFF5FF;
  --color-accent_blue3 : #0F1035;
  --color-accent_blue4 : #80B3FF;
  --color-accent_blue5 : #365486;
  --color-accent_blue6 : #D9EAFD;
  --color-accent_blue7: #b1f0f7;
  
  /* main_blue */
    



  /* grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;


  --box-shadow_1 : 
      rgba(0, 0, 0, 0.12) 0px 1px 3px,
      rgba(0, 0, 0, 0.24) 0px 1px 2px;


  --border_basic_1: rgb(214, 214, 214);
  --border_basic_2: rgb(153, 147, 147);
  --border-basic_3 : #365486;
  
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
    font-size: 1.8rem; 
    //기본폰트는 다시 16px로
   
    @media screen and (max-width: 600px) {
        font-size: 1rem;
     }
   
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
