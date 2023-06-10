import { Box, styled } from "@mui/material";

export const StyledCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "240px",
  color: "white",
  backgroundColor: "#283345",
  boxShadow: "0 1px 12px 0 rgba(0, 0, 0, 0.25)",
  borderRadius: "3px",
  "&:hover": {
    cursor: "pointer",
  },
});

export const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
});
