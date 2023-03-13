import { DonutChart } from "@ui5/webcomponents-react-charts";

function PieChart({ data, filter, selectedMonth, label }) {
	const result = [];

	// console.log(filter, data, selectedMonth);
	const monthData = data.find((obj) => obj.Month === selectedMonth);
	const month = data.indexOf(monthData);

	// loop through data
	for (const key in data[month]) {
		// if item includes in filter
		if (filter.includes(key)) {
			result.push({
				group1: key + " (in Kg)",
				val: data[month][key],
			});
		}
	}

	return (
		<DonutChart
			centerLabel={label}
			dataset={result}
			dimension={{
				accessor: "group1",
			}}
			measure={{
				accessor: "val",
				DataLabel: "kg",
			}}
		/>
	);
}

export default PieChart;
