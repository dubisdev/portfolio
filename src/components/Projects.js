import Project from "./Project";
import styles from "./projects.module.css";

const projects = [
	{
		name: "Todoist Rest Client",
		imgSrc: "tdr.png",
		url: "https://www.npmjs.com/package/todoist-rest-client",
		tech: ["Typescript"],
	},
	{
		name: "Linkin",
		imgSrc: "linkin.png",
		url: "https://github.com/RizkyRajitha/linkin",
		tech: ["React", "Javascript", "PostrgreSQL", "PrismaSQL"],
	},
	{
		name: "Cerebro-Todoist",
		imgSrc: "cerebro-todoist.png",
		url: "https://github.com/dubisdev/cerebro-todoist",
		tech: ["Typescript", "ElectronJS", "React"],
	},
];

const ProjectSection = () => (
	<section aria-label="my-projects" className="my-projects">
		<h2 style={{ fontSize: "xx-large", textAlign: "center" }}>
			Mis Proyectos y Contribuciones
		</h2>
		<br />
		<div className={styles.article_grid}>
			{projects.map((p) => {
				return <Project key={p.url} {...p} />;
			})}
		</div>
	</section>
);

export default ProjectSection;
