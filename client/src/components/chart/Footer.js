import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledFooter = styled(Box)(({ theme }) => ({
    display: "flex",
    backgroundColor: "rgba(32, 148, 243, 0.67)",
    justifyContent: "space-between",
    alignItems: "center",
    padding:"10px",
    color:"#fff"
}));

const Footer = () => {
    return (
        <StyledFooter>

            <TextField
                name="message"
                label="message"
                placeholder="Write nessage"
                fullWidth
                size="small"
                shrink="true"
            />
            <Button variant="contained" sx={{backgroundColor:"#fff",color:"rgba(32, 148, 243)"}}>
                Send
            </Button>
        </StyledFooter>
    )
}

export default Footer