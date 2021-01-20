import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@material-ui/core";


const RevenueTable = () => {
	return (
		<TableContainer>
			<Table>
				{/* Table Header */}
				<TableHead>
					<TableRow>
						<TableCell>Invoice #</TableCell>
						<TableCell>Customer #</TableCell>
						<TableCell>Invoice Date</TableCell>
						<TableCell>Revenue #</TableCell>
						<TableCell>Cost of Goods</TableCell>
						<TableCell>Gross Margin</TableCell>
					</TableRow>
				</TableHead>
				{/* Table Body */}
				<TableBody>

				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default RevenueTable;
