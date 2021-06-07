import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`
export const SearchBarStyled = styled.input`
  margin-top:5px;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const ThemeButton = styled.button`
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: ${(props) => props.theme.mainColor};
color: ${(props) => props.theme.backgroundColor};
`;


export const DeleteButton = styled.button`
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: ${(props) => props.theme.mainColor};
color: ${(props) => props.theme.red};
`;

export const Flxii = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:10px;

`;
export const ImageSize = styled.img `
    width: 50%;
    height : 50%;
    `

    export const Head = styled.head
`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;

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