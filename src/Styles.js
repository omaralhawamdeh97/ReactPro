import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`


  
export const Flxii = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:5px;

`;
export const ImageSize = styled.img `
    width: 50%;
    height : 50%;
    `

    export const Head = styled.head
`

    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    `

export const PhonePic= styled.img
`
width: 300px;
height: 200px;

`

export const Row = styled.div `
display: flex;
text-align: center;

`