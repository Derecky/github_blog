import styled from "styled-components";

export interface InputContainerProps{
    width: string;
};

export const FormCardContainer = styled.div`
    width: 40rem;
    height: 23.25rem;
    border-radius: 6px;
    padding: 2.5rem;
    gap: 2rem;
    background-color: ${(props) => props.theme.baseCard};
    display: flex;
    flex-direction: column;
    align-items: left;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 25rem;

    .formCardHeader {
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
    font-weight: 25rem;
    line-height:1.3rem;
`

export const SpanContainer2 = styled.span`
    color: ${(props) => props.theme.baseText};
    font-size: 0.875rem;
    line-height:1.1375rem;
`

export const FormContainer = styled.form`
    width: 35rem;
    height: 13.5rem;
    gap: 0.75rem; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    box-sizing: content-box;
    position: relative;

    div{position: relative;}

    .complementLabel {
        position: absolute;
        right: 0.8125rem;
        top: 0.8125rem;
        line-height: 0.975rem;
        font-size:0.75rem;
        font-style: italic;
        color: ${(props) => props.theme.baseLabel};
    }
`

export const InputContainer = styled.input<InputContainerProps>`
    width: ${(props) => props.width};
    height: 2.625rem;
    border-radius: 4px;
    padding: 0.75rem;
    gap: 0.25rem;
    background-color: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseButton};
    color: ${(props) => props.theme.baseLabel};
    font-size: 0.875rem;
    line-height: 1.1375rem;

    &:active, &:focus-visible, &:focus, &:focus-within,&:focus-visible,&:target,&:visited{
        border:1px solid ${(props) => props.theme.yellowDark};
        outline: 0cm;
    }
    &:valid{
        color: ${(props) => props.theme.baseText};
    }
`

