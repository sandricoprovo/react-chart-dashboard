import React from "react";
import { Grid } from "@material-ui/core";

const IconHeader = () => {
	return (
		<Grid item lg={9} md={9} sm={12} xs={12}>
			<div style={{ border: "2px solid black", width: "100%" }}>
				<h1>Hello World</h1>
			</div>
		</Grid>
	)
}

export default IconHeader
