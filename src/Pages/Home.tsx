import { Box, Card, CardMedia, Grid } from "@mui/material";
import { StyledComplianceButton, StyledHeader } from "./Home.styles";
import { FolderSimple, Star, WarningCircle } from "@phosphor-icons/react";
import { HomeCard } from "@/Components";
import { PreviewIcon } from "@/assets/PreviewIcon";
import { UnreadEye } from "@/assets/UnreadEye";

export const Home: React.FC = () => {
  return (
    <>
      <StyledHeader>
        <Card
          sx={{ border: "none", boxShadow: "none", background: "transparent" }}
        >
          <CardMedia
            sx={{ height: "35px", width: "147px" }}
            component="img"
            src="/rComply_Light.svg"
          />
        </Card>
        <Box sx={{ paddingLeft: "10px" }}>HOME</Box>
      </StyledHeader>
      <Box
        sx={{
          marginTop: "15px",
          padding: "0px 40px 30px 40px",
          borderBottom: "2px solid rgba(224, 224, 224, 0.3)",
        }}
      >
        <StyledComplianceButton startIcon={<WarningCircle size={28} />}>
          In Compliance
        </StyledComplianceButton>
      </Box>
      <Grid container columnSpacing={5} sx={{ padding: "20px 40px 40px 40px" }}>
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
      </Grid>
    </>
  );
};
