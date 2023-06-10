import { Box, Card, CardMedia } from "@mui/material";
import { StyledComplianceButton, StyledHeader } from "./Home.styles";
import { WarningCircle } from "@phosphor-icons/react";

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
    </>
  );
};
