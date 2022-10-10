import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ChartApp from "./components/Chart";

const StyledApp = styled(Box)(({ theme }) => ({
	backgroundColor: "aliceblue",
}));

const App = () => {
	return (
		<StyledApp>
			<ChartApp/>
		</StyledApp>
	);
}

export default App;
