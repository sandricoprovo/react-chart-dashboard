import { createMuiTheme } from "@material-ui/core";

// Material UI Style Overrides
const MuiCustomTheme = createMuiTheme({
	palette: {
		primary: { main: "#10AC84" },
		textPrimary: { main: "#636E72" }
	},
	overrides: {
		MuiTableContainer: {
			root: {
				backgroundColor: "#FFFFFF",
				maxWidth: "100%",
				borderRadius: "5px",
				boxShadow: "0 8px 14px rgba(0, 0, 0, 0.12)"
			}
		},
		MuiTabs: {
			indicator: {
				left: "0px",
				backgroundColor: "white",
				width: "10px"
			}
		},
		MuiTab: {
			root: {
				"&$selected": {
					backgroundColor: "#0E8E6D",
				},
			},
			wrapper: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "flex-start",
				alignItems: "center",
				color: "#FFFFFF",
				paddingLeft: "27px",
				width: "100%",
				"& > svg": {
					marginRight: "20px"
				}
			},
		},
		MuiTypography: {
			colorPrimary: {
				color: "#10AC84"
			},
			colorTextPrimary: {
				color: "#636E72"
			},
			colorTextSecondary: {
				color: "white"
			},
			h6: {
				padding: "20px",
				marginLeft: "20px"
			}
		},
		MuiTableCell: {
			root: {
				borderBottom: "none"
			}
		},
		// Drawer Tabs
		MuiDrawer: {
			paper: {
				position: "static",
			},
		},
		MuiToolbar: {
			root: {
				justifyContent: "space-between",
			}
		},
		// Dashboard Cards
		MuiCard: {
			root: {
				width: "286px",
				minWidth: "190px",
				marginRight: "16px",
				padding: "0px 16px",
				borderRadius: "8px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-start",
				alignItems: "center",
				boxShadow: "0 8px 14px rgba(0, 0, 0, 0.12)"
			},
		},
		MuiCardContent: {
			root: {
				minWidth: "250px",
				padding: "16px 20px",
			}
		},
		MuiChip: {
			root: {
				color: "#FFFFFF",
				padding: "0px 8px",
				fontSize: "18px"
			},
			icon: {
				fill: "#FFFFFF",
				right: "0px"
			}
		}
	},
});

export default MuiCustomTheme;