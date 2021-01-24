import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

// Imported Components
import MuiCustomTheme from "./Theme";
import Drawer from "./Drawer";

const App = () => {
  return (
	<ThemeProvider theme={MuiCustomTheme}>
		<CssBaseline />
		<Drawer />
	</ThemeProvider>
  );
}

export default App;
