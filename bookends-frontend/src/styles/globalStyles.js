import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body, html {
    width: 100vw;
    height: 100vh;
  }

  body, html {
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 0; 
    margin: 0;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Lato|Playfair+Display&display=swap');
    font-family: 'Lato', sans-serif;
    position: absolute;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

`