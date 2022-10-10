import styled from "@emotion/styled"
import { Box, Card, Container, Typography, TextField } from "@mui/material"

const StyledChartApp = styled(Container)(({ theme }) => ({
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const StyledChartCard = styled(Card)(({ theme }) => ({
	width: "100%",
	height: "80vh"
}));

const StyledHeader = styled(Box)(({ theme }) => ({
	padding: "5px",
	borderBottom: "1px solid grey"
}));

const StyledBody = styled(Box)(({ theme }) => ({
	padding: "5px",
}));

const StyledInputSection = styled(Box)(({ theme }) => ({
	padding: "5px",
}));

const ChartApp = () => {
	return (
		<StyledChartApp>
			<StyledChartCard>
				<StyledHeader>
					<Typography variant="h5" color="primary" sx={{fontWeight: "bold"}}>
						Chart
					</Typography>
				</StyledHeader>

				<StyledBody>
					<div>ChartApp</div>
				</StyledBody>

				<StyledInputSection>
					
				</StyledInputSection>
			</StyledChartCard>
		</StyledChartApp>
	)
}

export default ChartApp