import React, { useState, useEffect } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";

// Imported Components
import TableHeader from "./TableHeader";

// Custom Functions
import formatRevenueTableData from "../../../utils/formatRevenueTableData";

const RevenueTable = ({ data }) => {
	const [tableData, setTableData] = useState([]);
	const [orderDirection, setOrderDirection] = useState("asc");
	const [orderBy, setOrderBy] = useState("invoiceNum");

	useEffect(() => {
		// Create all formatted fields from data object array using function
		const formattedRevenueData = formatRevenueTableData(data);
		// Get full array and set it to state.
		setTableData(formattedRevenueData);
	}, [data]);

	// Function that takes in two of the data points, and the orderBy value to compare and sort the two
	const descendingComparator = (a, b, orderBy) => {
		// Since customer is a string, and the number in customer is built from invoiceNum, than order by invoiceNum when orderBy is customer
		if (orderBy === "customer") {
			if (b["invoiceNum"] < a["invoiceNum"]) {
				return -1;
			};
			if (b["invoiceNum"] > a["invoiceNum"]) {
				return 1;
			};
		};

		// Return -1 if value of b[orderBy] is less than a[orderBy]
		if (b[orderBy] < a[orderBy]) {
			return -1;
		};
		// Return 1 if value of b[orderBy] is greater than a[orderBy]
		if (b[orderBy] > a[orderBy]) {
			return 1;
		};
		return 0;
	};

	// Function to act as a toggle for the sorting order
	const getComparator = (order, orderBy) => {
		return order === "desc"
		  ? (a, b) => descendingComparator(a, b, orderBy)
		  : (a, b) => -descendingComparator(a, b, orderBy);
	};

	// Sorting our array of data based on the selected column and direction
	const sortedArrayData = (rowData, comparator) => {
		// Creates an array of arrays that contain a single row data object and its unsorted position
		const stabilizeArray = rowData.map((row, index) => [row, index]);
		// Performing the array sort
		stabilizeArray.sort((a, b) => {
			// Sends two objects to the comparing functions
			const order = comparator(a[0], b[0]);
			// Gets and returns a +1 or -1 based on the order being asc or desc
			if (order !== 0) return order;
			// Returns the order unchanged if the comparison returns a 0
			return a[1] - b[1];
		});
		// Returns each row object minus its unsorted array position index
		return stabilizeArray.map((el) => el[0]);
	};

	// Get the selection based sorted table data, and then create the table JSX rows
	const tableRows = sortedArrayData(tableData, getComparator(orderDirection, orderBy)).map(row => {
		return (
			<TableRow key={`${row.invoiceNum}_${row.customer}`}>
				<TableCell>{row.invoiceNum}</TableCell>
				<TableCell>{row.customer}</TableCell>
				<TableCell>{row.invoiceDate.toLocaleDateString("en-US")}</TableCell>
				<TableCell>{row.revenue}</TableCell>
				<TableCell>{row.costOfGoods}</TableCell>
				<TableCell>{row.grossMargin}</TableCell>
			</TableRow>
		);
	});

	const handleSortRequest = (selectedOrderColumn) => {
		// Determines if the selected column is ascending or descending
		const isAscending = (orderBy === selectedOrderColumn && orderDirection === "asc");
		// Set the column to order by and the order direction to state
		setOrderBy(selectedOrderColumn);
		setOrderDirection(isAscending ? "desc" : "asc");
	};

	return (
		<TableContainer>
			<Table>
				<TableHeader
					orderDirection={orderDirection}
					orderBy={orderBy}
					handleSort={handleSortRequest}
				/>
				{/* Table Body */}
				<TableBody>
					{tableRows}
				</TableBody>
			</Table>
		</TableContainer>
	)
};

// Props Validation
RevenueTable.propTypes = {
	data: PropTypes.array
};

export default RevenueTable;
