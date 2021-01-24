import React from "react";
import { Drawer } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Home as HomeIcon } from "@material-ui/icons";
import { Dashboard as DashboardIcon } from "@material-ui/icons";

// Exported Component
const DrawerComponent = () => {
	return (
		<Drawer anchor="left" variant="temporary" open={true}>
			<h1>Overlay Analytics</h1>
			<Tabs
				orientation="vertical"
				value={1}
			>
				<Tab
					label="Home"
					icon={<HomeIcon />}
					aria-label="home"
				/>
				<Tab
					label="My Dashboard"
					value={1}
					icon={<DashboardIcon />}
					aria-label="dashboard"
				/>
			</Tabs>
		</Drawer>
	)
}

export default DrawerComponent
