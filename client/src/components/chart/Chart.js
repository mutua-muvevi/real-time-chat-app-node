import styled from "@emotion/styled"
import { Box, Card, Container, Typography, TextField } from "@mui/material"
import Body from "./Body";
import Left from "./Left";

const StyledChartApp = styled(Container)(({ theme }) => ({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const StyledChartCard = styled(Card)(({ theme }) => ({
	width: "100%",
	height: "80vh",
	display: "flex"
}));

const StyledLeft = styled(Box)(({ theme }) => ({
	flex: 3,
	borderRight: "1px solid grey",
}));

const StyledBody = styled(Box)(({ theme }) => ({
	flex: 9,
}));

const ChartApp = () => {
	return (
		<StyledChartApp maxWidth="xl">
			<StyledChartCard>
				<StyledLeft>
					<Left/>
				</StyledLeft>

				<StyledBody>
					<Body/>
				</StyledBody>
			</StyledChartCard>
		</StyledChartApp>
	)
}

export default ChartApp