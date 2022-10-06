import styled from "styled-components"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

export const StyledArrow = styled(HoverCardPrimitive.Arrow)`
  fill:${(props) => props.theme.baseCard};
`;

export const StyledContent = styled(HoverCardPrimitive.Content)`
  border-radius: 6;
  opacity:0.9;
  transition: 500ms;
  width:fit-content;

  *{
        transition: 500ms; 
    }
  
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 500ms;
    animation-timing-function: 'cubic-bezier(0.16, 1, 0.3, 1)';
    will-change:'transform, opacity';    
  };
`;

