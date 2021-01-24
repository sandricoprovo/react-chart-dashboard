import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const DashboardChart = ({ data, chartID }) => {
	// Use ref to hold reference to chart and its configuration
	const chart = useRef(null);

	useEffect(() => {
		// Adding theme & css class usage to am4core
		am4core.useTheme(am4themes_animated);
		am4core.options.autoSetClassName = true;

		// Create a new chart and save it as the current chart reference.
		chart.current = am4core.create(`chartdiv_${chartID}`, am4charts.XYChart);

		// CONFIGURE CHART TITLE & DATA
		// Creating chart title
		let chartTitle = chart.current.titles.create();
		chartTitle.text = "Revenue & Gross Margin";
		chartTitle.align = "left";
		// Assigning array of data objects as chart reference data
		chart.current.data = data;

		// CONFIGURING CHART AXES
		// Month X axis Config
		chart.current.dataDateFormat = "MM yyyy";
		let dateAxis = chart.current.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.grid.template.location = 0;
		dateAxis.renderer.grid.template.stroke = "#F5F5F5";
		dateAxis.dateFormats.setKey("month", "MMM yyyy")
		// Revenue Y axis Config
		let revenueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
		revenueAxis.numberFormatter = new am4core.NumberFormatter();
		revenueAxis.renderer.grid.template.stroke = "#FFFFF";
		revenueAxis.numberFormatter.numberFormat = "$#a";
		revenueAxis.tooltip.disabled = true;
		revenueAxis.renderer.minWidth = 35;

		// CONFIGURING COLUMN BARS
		let columnSeries = chart.current.series.push(new am4charts.ColumnSeries());
		columnSeries.dataFields.valueY = "revenue";
		columnSeries.dataFields.dateX = "month";
		columnSeries.name = "Revenue";
		columnSeries.fill = "#B0B6B8";
		let columnTemplate = columnSeries.columns.template;
		columnTemplate.strokeWidth = 0;
		columnTemplate.strokeOpacity = 1;
		chart.current.cursor = new am4charts.XYCursor();
		// Tooltip Config
		columnSeries.tooltipText = "Revenue\n{dateX.formatDate('MMM yyyy')}\n[bold]{valueY.formatNumber('$#.0a')}[/]";
		columnSeries.columns.template.fillOpacity = 0.9;
		columnSeries.columns.template.tooltipY = 0;
		columnSeries.tooltip.autoTextColor = false;
		columnSeries.tooltip.label.fill = am4core.color("#FFFFFF");
		columnSeries.tooltip.label.fontSize = 16;

		// CONFIGURING CIRCLE BULLETS
		let lineSeries = chart.current.series.push(new am4charts.LineSeries());
		lineSeries.dataFields.valueY = "gross margin";
		lineSeries.dataFields.dateX = "month";
		lineSeries.name = "Gross Margin";
		lineSeries.strokeWidth = 3;
		lineSeries.fill = am4core.color("#10AC84");
		lineSeries.stroke = am4core.color("#10AC84");
		let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
		circleBullet.circle.radius = 6;
		lineSeries.tensionX = 0.77;
		// Tooltip Config
		lineSeries.tooltipText = "Gross Margin\n{dateX.formatDate('MMM yyyy')}\n[bold]{valueY.formatNumber('$#.0a')}[/]";

		// CONFIGURE CHART LEGEND
		chart.current.legend = new am4charts.Legend();
		chart.current.legend.position = "top";
		chart.current.legend.contentAlign = "right";

		// Cleanup Function
		return () => {
			chart.current.dispose();
		};
	}, [data, chartID]);

	return (
		<div
			id={`chartdiv_${chartID}`}
			style={{
				width: "97%",
				height: "400px",
				backgroundColor: "#FFFFFF",
				margin: "0 0 16px 0",
				borderRadius: "5px",
				boxShadow: "0 8px 14px rgba(0, 0, 0, 0.12)"
			}}
		></div>
	);
};

// Props Validation
DashboardChart.propTypes = {
	data: PropTypes.array,
	chartID: PropTypes.number
}

export default DashboardChart;
