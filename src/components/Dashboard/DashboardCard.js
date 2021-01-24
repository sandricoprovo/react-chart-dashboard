import React from "react";
import { Card, CardContent, Chip } from "@material-ui/core";
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
				<p>{mainTitle}</p>
				<p>{`${mainValue}`}</p>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<p>{currentMonth}</p>
					{
						isChangeNegative
						? (
							<Chip
								style={{ backgroundColor: "#E66767" }}
								label={`${monthOverMonth}%`}
								icon={<ArrowDownwardIcon />}
								/>
								) : (
							<Chip
								style={{ backgroundColor: "#B0B6B8" }}
								label={`${monthOverMonth}%`}
								icon={<ArrowUpwardIcon />}
							/>
						)
					}
				</div>
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
