import React from "react";
import { Grid, Box } from "@material-ui/core";

// Imported Components
import DashboardCard from "./DashboardCard";
import RevenueTable from "./RevenueTable";

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
			<Box
				display="flex"
				flexDirection="row"
				flexWrap="wrap"
				justifyContent="space-between"
				padding="20px 0"
				width="100%"
			>
				{/* Charts */}
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<Box display="flex" flexDirection="column">
						<div style={{ border: "2px solid black" }}>
							<h1>Graph 1</h1>
						</div>
						<div style={{ border: "2px solid black" }}>
							<h1>Graph 2</h1>
						</div>
					</Box>
				</Grid>
				{/* Revenue Details */}
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<RevenueTable />
				</Grid>
			</Box>
		</Grid>
	)
}

export default Dashboard
