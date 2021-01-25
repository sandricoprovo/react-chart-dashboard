import React from "react";
import { Card, CardContent, Chip, Typography, Box } from "@material-ui/core";
import {
	ArrowUpward as ArrowUpwardIcon,
	ArrowDownward as ArrowDownwardIcon
} from "@material-ui/icons";
import PropTypes from "prop-types";

// Imported Functions
import formatDashboardCardData from "../../utils/formatDashboardCardData";

const DashboardCard = ({ title, currMonth, prevMonth }) => {
	// Get card details from formatting function
	const {
		mainTitle,
		mainValue,
		currentMonth,
		isChangeNegative,
		monthOverMonth,
	} = formatDashboardCardData(title, currMonth, prevMonth);

	return (
		<Card>
			<CardContent>
				<Typography>{mainTitle}</Typography>
				<Typography
					style={{
						fontWeight: "bold",
						fontSize: "34px",
						margin: "0px"
					}}
				>
					{`${mainValue}`}
				</Typography>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						style={{
							fontSize: "14px",
						}}
					>
						{currentMonth}
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						alignItems="center"
					>
						{
							isChangeNegative
							? (
								<Chip
									style={{ backgroundColor: "#E66767" }}
									label={`${monthOverMonth}%`}
									icon={<ArrowDownwardIcon color="primary" />}
								/>
									) : (
								<Chip
									style={{ backgroundColor: "#B0B6B8" }}
									label={`${monthOverMonth}%`}
									icon={<ArrowUpwardIcon color="primary" />}
								/>
							)
						}
						<Typography style={{ fontSize: "12px", }}>MoM</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

// Props Validation
DashboardCard.propTypes = {
	title: PropTypes.string,
	currMonth: PropTypes.object,
	prevMonth: PropTypes.object,
}

export default DashboardCard;
