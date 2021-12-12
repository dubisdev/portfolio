import "./index.css";
import MyInfo from "./components/Info";
import MyProjects from "./components/Projects";
function App() {
	return (
		<div className="bg-[#181818] min-h-screen p-4">
			<div className="border-4 border-[#4c00cf] rounded-[15px] p-2 min-h-fit ">
				<main className="block sm:flex sm:flex-row">
					<MyInfo />
					<MyProjects />
				</main>
			</div>
		</div>
	);
}

export default App;
