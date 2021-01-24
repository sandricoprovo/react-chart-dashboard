import React, { useState } from "react";
import {
	Drawer,
	Hidden,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Tab,
	Tabs
} from "@material-ui/core";
import { Home as HomeIcon } from "@material-ui/icons";
import { Dashboard as DashboardIcon } from "@material-ui/icons";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

// Imported Components
import IconHeader from "./IconHeader";
import Dashboard from "./Dashboard/Dashboard";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		backgroundColor: "#F3F3F3",
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		minHeight: "100vh",
		backgroundColor: "#10AC84",
		border: "none"
	},
	content: {
		width: "100vw",
		padding: "0px 2%",
		backgroundColor: "#F3F3F3",
		overflowY: "scroll",
		maxHeight: "100vh"
	},
}));

// Exported Component
const DrawerComponent = (props) => {
	const { window } = props;
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<>
			<Typography variant="h6" color="textSecondary">Overlay Analytics</Typography>
			<Tabs
				orientation="vertical"
				value={1}
				classes={{ indicator: classes.indicator }}
			>
				<Tab label="Home" icon={<HomeIcon />} wrapped={true} />
				<Tab label="My Dashboard" icon={<DashboardIcon />} wrapped={true} />
			</Tabs>
		</>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<AppBar position="fixed" elevation={0} className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="default"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<IconHeader />
				</Toolbar>
			</AppBar>
			<Hidden smUp implementation="css">
				<Drawer
					container={container}
					variant="temporary"
					anchor="left"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{drawer}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant="permanent"
					open
				>
					{drawer}
				</Drawer>
			</Hidden>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Dashboard />
			</main>
		</div>
	);
};

export default DrawerComponent;
