import { BarChart } from "@ui5/webcomponents-react-charts";

function BarGraph({ months, filter }) {
	let result = [];

	for (const [key, month] of Object.entries(months)) {
		const includesInMonthsArrayFilter = filter.includes(month.Month)
		
		if (filter.includes(month.Month)) {
			result.push({
				month: month["Month"],
				ecoactionTotal: month["Compost"],
				wasteTotal: month["Garbage"],
				coffeeTotal: month["Coffee Grounds"],
			});
		}
	}

	return (
		<BarChart
			style={{ height: "325px" }}
			dataset={result}
			dimensions={[
				{
					accessor: "name",
				},
			]}
			measures={[
				{
					accessor: "coffeeTotal",
					label: "Coffee Grounds",
					color: "#e6873a",
				},
				{
					accessor: "wasteTotal",
					label: "Landfill",
					color: "grey",
				},
				{
					accessor: "ecoactionTotal",
					label: "Compost",
				},
			]}
		/>
	);
}

export default BarGraph;
