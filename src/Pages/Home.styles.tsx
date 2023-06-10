import { Box, Button, styled } from "@mui/material";

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
