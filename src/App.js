import "./index.css";
import MyInfo from "./components/Info";
import MyProjects from "./components/Projects";
import { Route, Switch, Link } from "wouter";

function App() {
	return (
		<Switch>
			<Route path="/">
				<div className="bg-[#181818] min-h-screen p-4">
					<div className="border-4 border-[#4c00cf] rounded-[15px] p-2 min-h-fit ">
						<main className="block sm:flex sm:flex-row">
							<MyInfo />
							<MyProjects />
						</main>
					</div>
				</div>
			</Route>
			<Route>
				<div className="bg-[#181818] min-h-screen p-4 flex items-center justify-center flex-col">
					<p>404 Not found :(</p>
					<Link to="/" className="text-[#385bc1] underline">Go to home page</Link>
				</div>
			</Route>
		</Switch>
	);
}

export default App;
