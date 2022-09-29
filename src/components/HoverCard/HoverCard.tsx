import * as RadixHoverCard from "@radix-ui/react-hover-card";
import styled from "styled-components";

export const HoverCard = (props:RadixHoverCard.HoverCardProps) => {
  const { children } = props;
  return <RadixHoverCard.Root>{children}</RadixHoverCard.Root>;
};

export const HoverCardTrigger = (props:RadixHoverCard.HoverCardTriggerProps) => {
  const { children } = props;
  return <RadixHoverCard.Trigger>{children}</RadixHoverCard.Trigger>;
};

const HoverCardArrow = styled(RadixHoverCard.Arrow)`
  fill: greenyellow;
`;

const LocalHoverCardContent = (props: RadixHoverCard.HoverCardContentProps) => {
  const { children, ...rest } = props;
  return (
    <RadixHoverCard.Content {...rest}>
      {children}
      <HoverCardArrow />
    </RadixHoverCard.Content>
  );
};

export const HoverCardContent = styled(LocalHoverCardContent)`
  background-color: greenyellow;
  color:blue;
  padding: 16px;
  position:absolute;
  transform: rotateX(20);
  border:1px solid greenyellow;
`;
