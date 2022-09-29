import styled from "styled-components";

export const PaymentCardContainer = styled.div`
    width: 40rem;
    height: 12.9375rem;
    border-radius: 6px;
    padding: 2.5rem;
    gap: 2rem;
    background-color: ${(props) => props.theme.baseCard};
    display: flex;
    flex-direction: column;
    align-items: left;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-style: regular;
    font-weight: 25rem;

    .PaymentCardHeader {
        display: flex;
        flex-direction: row;

    div{
        display: flex;
        width: fit-content;
        flex-direction: column;
        margin-left: 0.715rem;

    span{
        width: 100%;
    }}}
`

export const SpanContainer1 = styled.span`
    color: ${(props) => props.theme.baseSubtTitle};
    font-size: 1rem;
    line-height:1.3rem;
`

export const SpanContainer2 = styled.span`
    color: ${(props) => props.theme.baseText};
    font-size: 0.875rem;
    font-weight: 25rem;
    line-height:1.1375rem;
`

export const ButtonCardContainer = styled.div`
    display: flex;
    width: 35rem;
    height: 3.1875rem;
    gap: 0.75rem;

`

export const ButtonContainer = styled.button`
    width: 11.166875rem;
    height: 3.1875;
    border-radius: 6px;
    padding: 1rem;
    gap: 0.75rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    font-size: 0.75rem;
    line-height: 1.2rem;
    color: ${(props) => props.theme.baseText};
    background-color: ${(props) => props.theme.baseButton};
    align-items: center;
    justify-content: left;

    &:hover {
        color: ${(props) => props.theme.baseSubtTitle};
        background-color: ${(props) => props.theme.baseHover};
    }

    &:active {
        color: ${(props) => props.theme.baseText};
        background-color: ${(props) => props.theme.purpleLight};
        border-color: ${(props) => props.theme.purple};
    }

    span{
        display: flex;
        block-size: fit-content;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 1.1875rem;
        width: fit-content;
        align-items: left;
        justify-content: left;
     


        border: 1px solid red;
    }
`