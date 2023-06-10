import { Box, CardMedia, Grid } from "@mui/material";
import {
  StyledComplianceButton,
  StyledComplianceContainer,
  StyledGrid,
  StyledHeader,
  StyledHeaderLogo,
} from "./Home.styles";
import { FolderSimple, Star, WarningCircle } from "@phosphor-icons/react";
import { HomeCard } from "@/Components";
import { PreviewIcon } from "@/assets/PreviewIcon";
import { UnreadEye } from "@/assets/UnreadEye";

export const Home: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderLogo>
          <CardMedia
            sx={{ height: "35px", width: "147px" }}
            component="img"
            src="/rComply_Light.svg"
          />
        </StyledHeaderLogo>
        <Box sx={{ paddingLeft: "10px" }}>HOME</Box>
      </StyledHeader>
      <StyledComplianceContainer>
        <StyledComplianceButton startIcon={<WarningCircle size={28} />}>
          In Compliance
        </StyledComplianceButton>
      </StyledComplianceContainer>
      <StyledGrid container columnSpacing={5}>
        <Grid item xs={3}>
          <HomeCard
            icon={<Star size={70} weight="fill" color="#9399a2" />}
            title="Favorites"
          />
        </Grid>
        <Grid item xs={3}>
          <HomeCard
            icon={<FolderSimple size={70} weight="fill" color="#9399a2" />}
            title="All Publications"
          />
        </Grid>
        <Grid item xs={3}>
          <HomeCard icon={<UnreadEye />} title="Unread" />
        </Grid>
        <Grid item xs={3}>
          <HomeCard icon={<PreviewIcon />} title="Preview" />
        </Grid>
      </StyledGrid>
    </>
  );
};
