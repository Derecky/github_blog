import styled from "styled-components"
import * as SelectPrimitive from "@radix-ui/react-select";

export const StyledTrigger = styled(SelectPrimitive.SelectTrigger) `
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 0px 15px;
    font-size: 13px;
    line-height: 1rem;
    height: 100%;
    gap: 5px;
    background-color: ${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.purpleDark};

    &:hover{
        background-color:${(props) => props.theme.purpleLight};
        color:${(props) => props.theme.purpleDark};
        transition: 2s;
    }
    &:focus{
    }
    &[data-placeholder] {
        background-color:${(props) => props.theme.purpleLight};
        color:${(props) => props.theme.purpleDark};
    }
  `;
  
export const StyledIcon = styled(SelectPrimitive.SelectIcon)`
    color: ${(props) => props.theme.purpleDark};
`;
  
export const StyledContent = styled(SelectPrimitive.Content) `
    overflow: hidden;
    background-color: ${(props) => props.theme.purpleLight};
    border-radius: 6px;
`;
    

export const StyledViewport = styled(SelectPrimitive.Viewport) `
    padding:5px;
`;
  
    
export const StyledItem = styled(SelectPrimitive.Item)`
    all:unset;
    font-size: 13px;
    line-height: 1rem;
    color: ${(props) => props.theme.purpleDark};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding:0px 35px 0px 25px;
    position: relative;
    user-select: none;
    cursor:pointer;
    &[data-disabled] {
        color: ${(props) => props.theme.purpleDark};
        pointer-events: none;
    }
    &[data-highlighted] {
        background:${(props) => props.theme.purple};
        color:${(props) => props.theme.purpleLight};
    }
`;
    
  
export const StyledLabel = styled(SelectPrimitive.Label) `
    padding: 0 25px;
    font-size: 14px;
    line-height: 25px;
    font-weight: 900;
    color:${(props) => props.theme.purpleDark};
    background-image: linear-gradient(${(props) => props.theme.purple}, ${(props) => props.theme.purpleLight});
    border-radius:3px;
    font-family: 'Roboto', sans-serif;
`;
  
export const StyledSeparator = styled(SelectPrimitive.Separator)`
    height:1px;
    background-color:${(props) => props.theme.purpleDark};
    margin:5px;
`;
  
export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator) `
    position: absolute;
    left:0px;
    width:25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
    display:flex;
    align-items: center;
    justify-content: center;
    height:25px;
    background-color:${(props) => props.theme.purpleLight};
    color:${(props) => props.theme.purpleDark};
    cursor:default;
`;
export const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
    display:flex;
    align-items: center;
    justify-content: center;
    height:25px;
    background-color:${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.purpleDark};
    cursor:default;
`;

  