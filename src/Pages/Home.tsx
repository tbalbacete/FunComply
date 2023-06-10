import { Box, Card, CardMedia } from "@mui/material";
import { StyledHeader } from "./Home.styles";

export const Home: React.FC = () => {
    return (
        <>
            <StyledHeader>
                <Card sx={{ border: "none", boxShadow: "none", background: "transparent" }}>
                    <CardMedia sx={{ height: "35px", width: "147px" }} component="img" src="/rComply_Light.svg" />
                </Card>
                <Box sx={{ paddingLeft: "10px" }}>
                    HOME
                </Box>
            </StyledHeader>
        </>
    );
};
