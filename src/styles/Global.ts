import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body{
        background-color: #FFFFFF;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 16px;
        
    }
    
    @media only screen and (max-width: 920px) {
    font-size: 14px;
  }
`;
