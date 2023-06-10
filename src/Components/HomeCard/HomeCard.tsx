import { Typography } from "@mui/material";
import { StyledCard, StyledContent } from "./HomeCard.styles";

type Props = {
  icon: React.ReactNode;
  title: string;
};

export const HomeCard: React.FC<Props> = ({ icon, title }: Props) => {
  return (
    <StyledCard>
      <StyledContent>
        {icon}
        <Typography variant="body2" sx={{ paddingTop: "20px" }}>
          {title}
        </Typography>
      </StyledContent>
    </StyledCard>
  );
};
