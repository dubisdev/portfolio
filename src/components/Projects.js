import Project from "./Project";
import styles from "./projects.module.css";

const projects = [
	{
		name: "Todoist Rest Client",
		imgSrc: "profile.jpg",
		url: "google.es",
		tech: ["Typescript", "ESBuild"],
	},
	{
		name: "Linkin",
		imgSrc: "profile.jpg",
		url: "google.es",
		tech: ["React", "Javascript", "PostrgreSQL", "PrismaSQL"],
	},
	{
		name: "Cerebro-Todoist",
		imgSrc: "profile.jpg",
		url: "google.es",
		tech: [],
	},
];

const ProjectSection = () => (
	<section aria-label="my-projects" className="my-projects">
		<h2 style={{ "font-size": "xx-large", "text-align": "center" }}>
			Mis Proyectos y Contribuciones
		</h2>
		<br />
		<div className={styles.article_grid}>
			{projects.map((p) => {
				return <Project {...p} />;
			})}
		</div>
	</section>
);

export default ProjectSection;
