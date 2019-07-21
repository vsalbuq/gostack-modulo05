import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body {
    background: rgba(0, 0, 0, 0) linear-gradient(90deg, #0d5cc9 0%, #0dd7f1 100%) repeat scroll 0% 0%; /*#7159c1;*/
    -webkit-font-smoothing: antialised !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
