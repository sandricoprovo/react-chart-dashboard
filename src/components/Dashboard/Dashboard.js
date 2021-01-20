import React from "react";
import { Grid, Box } from "@material-ui/core";

// Imported Components
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
	return (
		<Grid item lg={12} md={12} sm={12} xs={12}>
			<h1>My Dashboard</h1>
			<Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
				<DashboardCard />
				<DashboardCard />
				<DashboardCard />
				<DashboardCard />
			</Box>
			<Box display="flex" flexDirection="" padding="20px 0" width="100%">
				<Box display="flex" flexDirection="column" width="50%">
					<div style={{ border: "2px solid black" }}>
						<h1>Graph 1</h1>
					</div>
					<div style={{ border: "2px solid black" }}>
						<h1>Graph 2</h1>
					</div>
				</Box>
				<div style={{ border: "2px solid black", width: "50%" }}>
					<h1>Revenue Details</h1>
				</div>
			</Box>
		</Grid>
	)
}

export default Dashboard
