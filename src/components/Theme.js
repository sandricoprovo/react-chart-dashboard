import { createMuiTheme } from "@material-ui/core";

// Material UI Style Overrides
const MuiThemeOverrides = createMuiTheme({
	overrides: {
		// Dashboard Grid
		MuiGrid: {
			container: {
				height: "100%"
			}
		},
		// Drawer Tabs
		MuiDrawer: {
			paper: {
				position: "static",
			}
		},
		MuiTabs: {
			indicator: {
				width: "8px",
				left: "0px"
			}
		},
		// Single Tab
		MuiTab: {
			root: {
				height: "50",
				maxWidth: "100%",
				"& > span": {
					left: 0
				}
			},
			wrapper: {
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center",
			},
		},
		// SVG Icons
		MuiSvgIcon: {
			root: {
				marginRight: "16px"
			}
		}
	},
});

export default MuiThemeOverrides;