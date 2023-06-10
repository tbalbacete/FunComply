import { StyledCard, StyledContent, StyledTitle } from "./HomeCard.styles";

type Props = {
  icon: React.ReactNode;
  title: string;
};

export const HomeCard: React.FC<Props> = ({ icon, title }: Props) => {
  return (
    <StyledCard>
      <StyledContent>
        {icon}
        <StyledTitle variant="body2">{title}</StyledTitle>
      </StyledContent>
    </StyledCard>
  );
};
