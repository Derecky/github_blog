import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { StyledContent,StyledArrow} from "./styles";

export function Content({ children, ...props }:HoverCardPrimitive.HoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </HoverCardPrimitive.Portal>
  );
}

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = Content;