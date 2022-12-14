import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
        * {
        box-sizing: border-box;
    }
    
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

`;

export default GlobalStyles;
