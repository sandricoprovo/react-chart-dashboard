import { createMuiTheme } from "@material-ui/core";

// Material UI Style Overrides
const MuiThemeOverrides = createMuiTheme({
	overrides: {
		// Dashboard Grid
		MuiGrid: {
			container: {
				paddingTop: "8px"
				// height: "100%"
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
				height: "50px",
				// maxWidth: "100%",
				"& > span": {
					left: 0,
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
				// marginRight: "16px"
			}
		},
		// Dashboard Cards
		MuiCard: {
			root: {
				maxWidth: "260px",
				minWidth: "190px"
			}
		}
	},
});

export default MuiThemeOverrides;