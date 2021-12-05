import "./App.css";
import Icon from "./components/icons";

function App() {
	return (
		<div className="App">
			<div className="black-bg">
				<div className="purple-line">
					<main>
						<section aria-label="my-info" class="my-info">
							<img src="/profile.jpg" class="profile-img" />
							<h1 style={{ "font-size": "xx-large" }}>dubisdev</h1>
							<p style={{ "text-align": "center", "margin-top": "10px" }}>
								Soy David Jiménez, estudiante universitario y amante de las
								tecnologías. Hago un poco de todo, el único requisito es que sea
								útil para el resto de personas o para mí :)
							</p>
							<br />
							<Icon
								description="GH Profile"
								link="https://github.com/dubisdev"
								imgSrc="/icons/gh.svg"
							/>

							<Icon
								description="dev.to Profile"
								link="https://dev.to/dubisdev"
								imgSrc="/icons/devto.svg"
							/>

							<Icon
								description="Contact me"
								link="email:dubisdev@gmail.com"
								imgSrc="/icons/email.svg"
							/>

							<button>Descargar CV</button>
						</section>
						<section aria-label="my-projects" className="my-projects">
							<h2 style={{ "font-size": "x-large", "text-align": "center" }}>
								Mis Proyectos y Contribuciones
							</h2>
							<br />
							<div className="article-grid">
								<article className="project-article">
									Todoist Rest Client
								</article>
								<article className="project-article">Cerebro-Todoist</article>
								<article className="project-article">Linkin</article>
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
