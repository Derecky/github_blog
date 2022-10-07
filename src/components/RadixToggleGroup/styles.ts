import styled from "styled-components";
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

export const StyledToggleGroup = styled(ToggleGroupPrimitive.Root)`
gap: 0.75rem;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
`;

export const StyledToggleGroupItem = styled(ToggleGroupPrimitive.Item)`
    
    border-radius: 6px;
    cursor:pointer;
    padding: 0.95rem 0.95rem 0.8rem 0.95rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.baseText};
    background-color: ${(props) => props['data-state' as keyof ToggleGroupPrimitive.ToggleGroupItemProps] === 'on'?props.theme.purpleLight:props.theme.baseButton};
    display:grid;
    grid-template-columns: 1fr 8fr;
    border:${(props)=>(props['data-state' as keyof ToggleGroupPrimitive.ToggleGroupItemProps] === 'on'?"1px solid "+props.theme.purple:"none")};
    text-align: left;
    text-transform: uppercase;

    &:hover {
        color: ${(props) => props.theme.baseSubtTitle};
        background-color: ${(props) => props.theme.baseHover};
    }

    &:focus {
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
`;
