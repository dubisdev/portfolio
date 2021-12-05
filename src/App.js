import "./App.css";
import MyInfo from "./components/Info";
import MyProjects from "./components/Projects";
function App() {
	return (
		<div className="App">
			<div className="black-bg">
				<div className="purple-line">
					<main>
						<MyInfo />
						<MyProjects />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
