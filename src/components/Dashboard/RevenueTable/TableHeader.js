import React from "react";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
import PropTypes from "prop-types";

const TableHeader = ({ orderDirection, orderBy, handleSort }) => {
	// Creating the header cell objects for reference in the table header loop
	const headerCells = [
		{ id: "invoiceNum", numeric: true, disablePadding: true, label: "Invoice #" },
		{ id: "customer", numeric: false, disablePadding: true, label: "Customer #" },
		{ id: "invoiceDate", numeric: false, disablePadding: true, label: "Invoice Date" },
		{ id: "revenue", numeric: true, disablePadding: true, label: "Revenue" },
		{ id: "costOfGoods", numeric: true, disablePadding: true, label: "Cost Of Goods" },
		{ id: "grossMargin", numeric: true, disablePadding: true, label: "Gross Margin" },
	];

	// Creating the table header JSX element
	const headerJSXElements = headerCells.map((header, index) => {
		return (
			<TableCell key={`${header.id}_${index}`}>
				<TableSortLabel
					active={orderBy === header.id ? true : false}
					direction={orderBy === header.id ? orderDirection : "asc"}
					onClick={() => handleSort(header.id)}
				>
					{header.label}
				</TableSortLabel>
			</TableCell>
		);
	});

	return (
		<TableHead>
			<TableRow>
				{headerJSXElements}
			</TableRow>
		</TableHead>
	);
};

// Props validation
TableHeader.propTypes = {
	orderBy: PropTypes.string,
	orderDirection: PropTypes.string,
	handleSort: PropTypes.func
};

export default TableHeader;

// OLD CODE
			// {/* <TableCell>
			// 		<TableSortLabel>
			// 			Invoice #
			// 		</TableSortLabel>
			// 	</TableCell>
			// 	<TableCell>
			// 		<TableSortLabel>
			// 			Customer #
			// 		</TableSortLabel>
			// 	</TableCell>
			// 	<TableCell>
			// 		<TableSortLabel>
			// 			Invoice Date
			// 		</TableSortLabel>
			// 	</TableCell>
			// 	<TableCell>
			// 		<TableSortLabel>
			// 			Revenue
			// 		</TableSortLabel>
			// 	</TableCell>
			// 	<TableCell>
			// 		<TableSortLabel>
			// 			Cost of Goods
			// 		</TableSortLabel>
			// 	</TableCell>
			// 	<TableCell>
			// 		<TableSortLabel>
			// 			Gross Margin
			// 		</TableSortLabel>
			// 	</TableCell> */}
