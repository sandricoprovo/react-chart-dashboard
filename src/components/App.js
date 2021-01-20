import React from "react";
import MuiThemeOverrides from "./Theme";

// Imported Components
import { Grid, ThemeProvider, Box } from "@material-ui/core";
import Drawer from "./Drawer";
import IconHeader from "./IconHeader"
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  return (
	<ThemeProvider theme={MuiThemeOverrides}>
		<Grid container justify="flex-start" wrap="wrap">
		{/* Drawer */}
			<Grid item lg={2} md={2} sm={12} xs={12}>
				<Drawer />
			</Grid>
		{/* Main Content */}
			<Grid item lg={10} md={10} sm={12} xs={12} >
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="flex-start"
					padding="0 20px"
				>
					<IconHeader />
					<Dashboard />
				</Box>
			</Grid>
		</Grid>
	</ThemeProvider>
  );
}

export default App;
