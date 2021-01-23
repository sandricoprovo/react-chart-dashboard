const formatDashboardCardData = (cardTitle, currMonthStats, prevMonthStats) => {
	// Setting date options and formatting date.
	const dateOptions = {
		month: "short",
		year: "numeric"
	}
	const formattedMonth = new Intl.DateTimeFormat("en-US", dateOptions).format(currMonthStats.month);

	// REVENUE CARD
	if (cardTitle === "Revenue") {
		return {
			title: cardTitle,
			currentMonth: formattedMonth
		}
	}
};

export default formatDashboardCardData;