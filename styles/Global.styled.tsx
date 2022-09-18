import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: "Source Sans Pro", sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
    }
    
    html, body, #__next {
        height: 100%;
    }

    #__next {
        display: flex;
        flex-direction: column;
        justify-content:center;
    }
    
`
export default GlobalStyles
