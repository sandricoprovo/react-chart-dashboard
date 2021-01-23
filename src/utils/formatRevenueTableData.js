const formatRevenueTableData = (dataArray) => {
	// Filter out any empty objects
	let formattedArray = dataArray.filter(dataObj => {
		// Check if object has the month property
		if (dataObj.hasOwnProperty("month")) {
			return dataObj;
		}
		return null;
	}).map((dataObj, index) => {
		// Take object data and apply correct formatting
		const formattedObj = {
			invoiceNum: index + 1,
			customerID: index + 1,
			customer: `Customer ${index + 1}`,
			invoiceDate: dataObj.month,
			revenue: dataObj.revenue,
			costOfGoods: dataObj.revenue - dataObj["gross margin"],
			grossMargin: dataObj["gross margin"]
		};
		// return formatted object
		return formattedObj;
	});
	// Send formatted object back to component
	return formattedArray;
};

export default formatRevenueTableData;