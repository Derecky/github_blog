import styled from "styled-components"

interface IconButtonContainerProps {
    background: string;
    backgroundHover: string;
    color: string;
    colorHover:string;
    colorIconHover : string
}

export const IconButtonContainer = styled.div<IconButtonContainerProps> `
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    width:max-content;
    display:flex;
    border-radius:6px;
    padding:8px;
    justify-content:center;
    align-items:center;
    transition: 1s; 
    font-size: 12px;

    &:hover {
        cursor:pointer;
        background-color: ${(props) => props.backgroundHover};
        color: ${(props) => props.colorHover};
        svg *{stroke:${(props) => props.colorIconHover};}
    }

    span {
        display:inline-block; 
        margin:0px 7px; 
    }
`

