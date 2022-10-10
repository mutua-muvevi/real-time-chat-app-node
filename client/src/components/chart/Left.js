import { Box, Button, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { activeUsers } from "./info";

const StyledLeftSide = styled(Box)(({ theme }) => ({
	padding: "10px",
	backgroundColor: "#2196f3",
	height: "100%"
}));

const styledHeaders = {
	fontWeight: "bold",
	marginBottom: "30px"
}

const StyledBody = {
	fontWeight: "bold",
	textTransform: "capitalize"
}

const StyledList = styled(List)(({ theme })=> ({
	padding:"0px"
}));

const StyledUsers = styled(ListItem)(({ theme })=> ({

}));

const StyledButton = styled(ListItemButton)(({ theme })=> ({
	width: "100%",
	display:"flex"
}));

const styledUsersList = {
	marginLeft: "0px"

}

const Left = () => {

	return (
		<StyledLeftSide>
			<Typography variant="h4" color="#fff" sx={styledHeaders}>
				Open chats
			</Typography>
			<Typography variant="h5" color="#fff" sx={StyledBody}>
				Active users
			</Typography>
			<StyledList disablePadding>

				{
					activeUsers.map(users => (
						<StyledUsers key={users.name}>
							<StyledButton>
								<Typography varaint="body1" color="#fff" sx={styledUsersList}>
									{users.name}
								</Typography>
							</StyledButton>
						</StyledUsers>
					))
				}
			</StyledList>
		</StyledLeftSide>
	)
}

export default Left