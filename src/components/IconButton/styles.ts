import styled from "styled-components"

interface IconButtonContainerProps {
    backgroundColorDark: string;
    backgroundColorLight: string;
    color: string;
}

export const IconButtonContainer = styled.div<IconButtonContainerProps> `
    background-color: ${(props) => props.backgroundColorDark};
    color: ${(props) => props.color};
    height: 38px;
    width: 38px;
    display:flex;
    border-radius:6px;
    padding:8px;
    justify-content:center;
    align-items:center;
    transition: 1s; 

    &:hover {
        background-color: ${(props) => props.backgroundColorLight};
        cursor:pointer;
    }
`

