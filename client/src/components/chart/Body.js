import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "./Footer";

const StyledBody = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection:"column",
    height: "100%"
}));

const StyledBodyTop = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(32, 148, 243, 0.67)",
    padding:"10px"
}));

const StyledButton = styled(Button)(({ theme }) =>({

}))

const Body = () => {
	return (
        <StyledBody>
            <Box>
                <StyledBodyTop>
                    <Typography vartiant="body1" color="#fff">
                        Some txt here
                    </Typography>
                    <StyledButton variant="contained" color='primary'>
                        Leave chat
                    </StyledButton>
                </StyledBodyTop>
                <div>Body</div>
            </Box>

            <Footer/>
        </StyledBody>
	)
}

export default Body