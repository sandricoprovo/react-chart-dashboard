import React from "react";
import MuiThemeOverrides from "./Theme";
import "../styles/main.css";

// Imported Components
import { ThemeProvider } from "@material-ui/core";
import Drawer from "./Drawer";

const App = () => {
  return (
	<ThemeProvider theme={MuiThemeOverrides}>
		<Drawer />
	</ThemeProvider>
  );
}

export default App;
