import { Box, Button, Card, Grid, styled } from "@mui/material";

export const StyledHeader = styled(Box)({
  display: "flex",
  backgroundColor: "#0b1015",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  top: "0",
  height: "77px",
  fontFamily: "Source Sans Pro, sans-serif",
});

export const StyledHeaderLogo = styled(Card)({
  border: "none",
  boxShadow: "none",
  background: "transparent",
});

export const StyledComplianceContainer = styled(Box)({
  marginTop: "15px",
  padding: "0px 40px 30px 40px",
  borderBottom: "2px solid rgba(224, 224, 224, 0.3)",
});

export const StyledComplianceButton = styled(Button)({
  width: "100%",
  height: "110px",
  padding: "0px 40px 0px 40px",
  fontWeight: 600,
  fontSize: "20px",
  backgroundColor: "#2ce269",
  color: "white",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#2ce269",
  },
});

export const StyledGrid = styled(Grid)({
  padding: "20px 40px 40px 40px",
  borderBottom: "2px solid rgba(224, 224, 224, 0.3)",
});
