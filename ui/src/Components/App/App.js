import "../Design/sass/main.scss";
import { Route, Routes } from "react-router-dom";
import { Overview } from "./Screens/Overview";
import { Comparison } from "./Screens/Comparison";
import { Home } from "./Screens/Home";
import { Insights } from "./Screens/Insights";
import { AppLayout } from "./AppLayout";

function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path="/" element={<Overview />} />
				<Route path="/comparison" element={<Comparison />} />
				<Route path="/home" element={<Home />} />
				<Route path="/insights" element={<Insights />} />
			</Route>
		</Routes>
	);
}

export default App;
