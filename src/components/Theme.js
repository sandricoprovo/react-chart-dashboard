import { createMuiTheme } from "@material-ui/core";

// Material UI Style Overrides
const MuiThemeOverrides = createMuiTheme({
	palette: {
		primary: { main: "#10AC84" },
		textPrimary: { main: "#636E72" }
	},
	overrides: {
		// Dashboard Grid
		MuiGrid: {
			container: {
				paddingTop: "8px"
				// height: "100%"
			}
		},
		MuiTypography: {
			colorPrimary: {
				color: "#636E72"
			},
			colorTextPrimary: {
				color: "#636E72"
			},
			colorTextSecondary: {
				color: "white"
			},
			h6: {
				padding: "20px"
			}
		},
		// Drawer Tabs
		MuiDrawer: {
			paper: {
				position: "static",
			}
		},
		MuiToolbar: {
			root: {
				justifyContent: "space-between",
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
		},
		MuiTableContainer: {
			root: {
				// width: "50%",
				// maxWidth: "500px",
				minWidth: "320px"
			}
		}
	},
});

export default MuiThemeOverrides;