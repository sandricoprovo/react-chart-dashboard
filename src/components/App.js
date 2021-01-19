import React from "react";
import MuiThemeOverrides from "./Theme";

// Imported Components
import { Grid, ThemeProvider } from "@material-ui/core";
import Drawer from "./Drawer/Drawer";
import IconHeader from "./IconHeader"

const App = () => {
  return (
	<ThemeProvider theme={MuiThemeOverrides}>
		<Grid container justify="center" wrap="wrap">
			<Drawer />
			<IconHeader />
		</Grid>
	</ThemeProvider>
  );
}

export default App;
