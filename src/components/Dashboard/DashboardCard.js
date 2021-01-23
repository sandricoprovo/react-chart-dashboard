import React, { useRef } from "react";
import { Card, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";

// Imported Functions
import formatDashboardCardData from "../../utils/formatDashboardCardData";

const DashboardCard = ({ title, currMonth, prevMonth }) => {
	const cardDetails = useRef();

	// Get card details from formatting function
	const formattedData = formatDashboardCardData(title, currMonth, prevMonth);
	console.log(formattedData)

	return (
		<Card>
			<CardContent>
				<h1>Hello Card</h1>
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

export default DashboardCard
