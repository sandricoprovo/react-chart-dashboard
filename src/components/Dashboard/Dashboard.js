import React, { useRef } from "react";
import { Grid, Box } from "@material-ui/core";

// Imported Components
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";
import RevenueTable from "./RevenueTable/RevenueTable";

// Imported Data Files
import JSONData from "../../data/data";

const Dashboard = () => {
	const dashboardData = useRef([]);
	dashboardData.current.fullDataSet = JSONData;
	dashboardData.current.currentMonth = JSONData[JSONData.length - 1];
	dashboardData.current.previousMonth = JSONData[JSONData.length - 2];

	return (
		<Grid item lg={12} md={12} sm={12} xs={12}>
			<h1>My Dashboard</h1>
			<Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
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
				padding="20px 0"
				width="100%"
			>
				{/* Charts */}
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<Box display="flex" flexDirection="column">
						<div style={{ border: "2px solid black" }}>
							{/* Chart 1 */}
							<DashboardChart data={dashboardData.current.fullDataSet} chartID={1} />
						</div>
						<div style={{ border: "2px solid black" }}>
							{/* Chart 2*/}
							<DashboardChart data={dashboardData.current.fullDataSet} chartID={2} />
						</div>
					</Box>
				</Grid>
				{/* Revenue Details */}
				<Grid item lg={6} md={6} sm={12} xs={12}>
					<RevenueTable data={dashboardData.current.fullDataSet} />
				</Grid>
			</Box>
		</Grid>
	)
}

export default Dashboard
