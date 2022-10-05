import styled from "styled-components";

export const PaymentCardContainer = styled.div`
    width: 40rem;
    border-radius: 6px;
    padding: 2.5rem;
    gap: 2rem;
    background-color: ${(props) => props.theme.baseCard};
    display: flex;
    flex-direction: column;
    align-items: left;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
    .PaymentCardHeader {
        display: flex;
        flex-direction: row;

    div{
        display: flex;
        width: fit-content;
        flex-direction: column;
        margin-left: 0.715rem;
    }}
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
    gap: 0.75rem;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
`

export const ButtonContainer = styled.button`
    border-radius: 6px;
    padding: 0.95rem 0.95rem 0.8rem 0.95rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.baseText};
    background-color: ${(props) => props.theme.baseButton};
    display:grid;
    grid-template-columns: 1fr 8fr;
    border:none;
    text-align: left;
    text-transform: uppercase;

    &:hover {
        color: ${(props) => props.theme.baseSubtTitle};
        background-color: ${(props) => props.theme.baseHover};
        cursor:pointer;
    }

    &:focus {
        color: ${(props) => props.theme.baseText};
        background-color: ${(props) => props.theme.purpleLight};
        border:1px solid ${(props) => props.theme.purple};
    }

    span{
        margin:0rem 0rem 0rem 0.81rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 0.75rem;
        line-height: 1.2rem;
    }
`