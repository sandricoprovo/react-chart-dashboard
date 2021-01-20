import React, { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const DashboardChart = ({ data }) => {
	// Use refs
	const chart = useRef(null);

	useLayoutEffect(() => {
		// Adding theme to am4core
		am4core.useTheme(am4themes_animated);

		// Create a new chart and save it as the current chart reference.
		chart.current = am4core.create("chartdiv", am4charts.XYChart);

		// Assigning array of data objects as chart reference data
		chart.current.data = data;

		// CONFIGURING CHART AXES
		// Month X axis Config
		chart.current.dataDateFormat = "MM yyyy";
		let dateAxis = chart.current.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.grid.template.location = 0;
		dateAxis.dateFormats.setKey("month", "MMM yyyy")
		// Revenue Y axis Config
		let revenueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
		revenueAxis.numberFormatter = new am4core.NumberFormatter();
		revenueAxis.numberFormatter.numberFormat = "$#a";
		revenueAxis.tooltip.disabled = true;
		revenueAxis.renderer.minWidth = 35;

		// CONFIGURING COLUMN BARS
		let columnSeries = chart.current.series.push(new am4charts.ColumnSeries());
		columnSeries.dataFields.valueY = "revenue";
		columnSeries.dataFields.dateX = "month";
		columnSeries.name = "Revenue Growth";
		columnSeries.columns.template.tooltipText = "Revenue\n{dateX.formatDate('MMM yyyy')}\n[bold]{valueY.formatNumber('$#.0a')}[/]";
		columnSeries.columns.template.fillOpacity = 0.8;
		columnSeries.columns.template.tooltipY = 0;
		let columnTemplate = columnSeries.columns.template;
		columnTemplate.strokeWidth = 2;
		columnTemplate.strokeOpacity = 1;
		chart.current.cursor = new am4charts.XYCursor();

		// CONFIGURING CIRCLE BULLETS
		let lineSeries = chart.current.series.push(new am4charts.LineSeries());
		lineSeries.dataFields.valueY = "gross margin";
		lineSeries.dataFields.dateX = "month";
		lineSeries.name = "Comparison";
		lineSeries.strokeWidth = 3;
		let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
		circleBullet.circle.radius = 6;
		lineSeries.tooltipText = "Gross Margin\n{dateX.formatDate('MMM yyyy')}\n[bold]{valueY.formatNumber('$#.0a')}[/]";

		// Creating Scroll Bars
		// chart.current.scrollbarX = new am4charts.XYChartScrollbar();
		// chart.current.scrollbarY = new am4charts.XYChartScrollbar();

		// Cleanup Function
		return () => {
			chart.current.dispose();
		}
	}, [data])

	return (
		<div id="chartdiv" style={{ width: "100%", height: "400px" }}></div>
	)
};

// Props Validation
DashboardChart.propTypes = {
	data: PropTypes.array
}

export default DashboardChart;
