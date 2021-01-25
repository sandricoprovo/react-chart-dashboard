// Imported util functions
import formatCurrency from "./formatCurrency";

const formatDashboardCardData = (cardTitle, currMonthStats, prevMonthStats) => {
	// Object to hold values for reference
	const detailsObj = {};

	// Setting date options and formatting date.
	const dateOptions = {
		month: "short",
		year: "numeric"
	};
	const formattedMonth = new Intl.DateTimeFormat("en-US", dateOptions).format(currMonthStats.month);

	// Setting the non-calculated values
	detailsObj.title = cardTitle;
	detailsObj.currentMonth = formattedMonth;

	// Set the reference objects values based on which card is being shown
	if (cardTitle === "Revenue") {
		// Main value
		detailsObj.mainValue = formatCurrency(currMonthStats.revenue);

		// Current & Previous month values
		detailsObj.currMonthVal = currMonthStats.revenue;
		detailsObj.prevMonthVal = prevMonthStats.revenue;
	} else if (cardTitle === "Cost Of Goods") {
		// Main value
		detailsObj.mainValue = formatCurrency(currMonthStats.revenue - currMonthStats["gross margin"]);

		// Current & Previous month values
		detailsObj.currMonthVal = currMonthStats.revenue - currMonthStats["gross margin"];
		detailsObj.prevMonthVal = prevMonthStats.revenue - prevMonthStats["gross margin"];
	} else if (cardTitle === "Gross Margin") {
		// Main value
		detailsObj.mainValue = formatCurrency(currMonthStats["gross margin"]);

		// Current & Previous month values
		detailsObj.currMonthVal = currMonthStats["gross margin"];
		detailsObj.prevMonthVal = prevMonthStats["gross margin"];
	} else if (cardTitle === "Gross Margin %") {
		// Main value
		detailsObj.mainValue =`
		${((currMonthStats.revenue - (currMonthStats.revenue - currMonthStats["gross margin"])) / currMonthStats.revenue * 100).toFixed(0)}%`;
		// Current & Previous month values
		detailsObj.currMonthVal = ((currMonthStats.revenue - (currMonthStats.revenue - currMonthStats["gross margin"])) / currMonthStats.revenue * 100);
		detailsObj.prevMonthVal = ((prevMonthStats.revenue - (prevMonthStats.revenue - prevMonthStats["gross margin"])) / prevMonthStats.revenue * 100);
	};

	// Check if month-over-month is negative
	const isMoMNegative = detailsObj.currMonthVal - detailsObj.prevMonthVal < 0
		? true
		: false
	// Calculate revenue month-over-month percentage change
	const monthOverMonth = (detailsObj.currMonthVal - detailsObj.prevMonthVal) * (100 / detailsObj.prevMonthVal);


	// return data as object to component
	return {
		mainTitle: cardTitle,
		mainValue: detailsObj.mainValue,
		currentMonth: formattedMonth,
		isChangeNegative: isMoMNegative,
		monthOverMonth: parseFloat(monthOverMonth.toFixed(1))
	};
};

export default formatDashboardCardData;