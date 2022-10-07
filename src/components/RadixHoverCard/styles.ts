import styled from "styled-components"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

export const StyledArrow = styled(HoverCardPrimitive.Arrow)`
  fill:${(props) => props.theme.baseCard};
`;

export const StyledContent = styled(HoverCardPrimitive.Content)`
  border-radius: 6;
  opacity:0.9;
  transition: 0.2s;
  width:fit-content;

  *{
        transition: 0.2s; 
    }
  
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 0.2s;
    animation-timing-function: 'cubic-bezier(0.16, 1, 0.3, 1)';
    will-change:'transform, opacity';    
  };
`;

