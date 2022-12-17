import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./screens/About";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Artandart from "./screens/Projects/Artandart";
import Babycare from "./screens/Projects/Babycare";
import Firely from "./screens/Projects/Firely";
import Vertal from "./screens/Projects/Vertal";
import Winetique from "./screens/Projects/Winetique";
import Wishtree from "./screens/Projects/Wishtree";
import Wizkid from "./screens/Projects/Wizkid";
import Resume from "./screens/Resume";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/projects" element={<Projects />}></Route>
			<Route path="/resume" element={<Resume />}></Route>
			<Route path="/wizkid" element={<Wizkid />}></Route>
			<Route path="/winetique" element={<Winetique />}></Route>
			<Route path="/artandart" element={<Artandart />}></Route>
			<Route path="/babycare" element={<Babycare />}></Route>
			<Route path="/wishtree" element={<Wishtree />}></Route>
			<Route path="/firely" element={<Firely />}></Route>
			<Route path="/vertal" element={<Vertal />}></Route>
		</Routes>
	);
}

export default App;
