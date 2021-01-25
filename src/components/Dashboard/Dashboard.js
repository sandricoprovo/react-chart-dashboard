import React, { useRef } from "react";
import { Grid, Box, Typography } from "@material-ui/core";

// Imported Components
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";
import RevenueTable from "./RevenueTable/RevenueTable";

// Imported Data Files
import JSONData from "../../data/data";

const Dashboard = () => {
	// useRef reference for holding dashboard data
	const dashboardData = useRef([]);
	dashboardData.current.fullDataSet = JSONData;
	dashboardData.current.currentMonth = JSONData[JSONData.length - 1];
	dashboardData.current.previousMonth = JSONData[JSONData.length - 2];

	return (
		<Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
			<Typography variant="h4" color="primary">My Dashboard</Typography>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				overflow="scroll"
				width="100%"
				padding="20px 0"
			>
				<DashboardCard
					title="Revenue"
					currMonth={dashboardData.current.currentMonth}
					prevMonth={dashboardData.current.previousMonth}
				/>
				<DashboardCard
					title="Cost Of Goods"
					currMonth={dashboardData.current.currentMonth}
					prevMonth={dashboardData.current.previousMonth}
				/>
				<DashboardCard
					title="Gross Margin"
					currMonth={dashboardData.current.currentMonth}
					prevMonth={dashboardData.current.previousMonth}
				/>
				<DashboardCard
					title="Gross Margin %"
					currMonth={dashboardData.current.currentMonth}
					prevMonth={dashboardData.current.previousMonth}
				/>
			</Box>
			<Box
				display="flex"
				flexDirection="row"
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="flex-start"
				width="100%"
				height="100%"
			>
				{/* Charts */}
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<Box display="flex" flexDirection="column">
						{/* Chart 1 */}
						<DashboardChart data={dashboardData.current.fullDataSet} chartID={1} />
						{/* Chart 2*/}
						<DashboardChart data={dashboardData.current.fullDataSet} chartID={2} />
					</Box>
				</Grid>
				{/* Revenue Details */}
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<RevenueTable data={dashboardData.current.fullDataSet} />
				</Grid>
			</Box>
		</Box>
	)
}

export default Dashboard
