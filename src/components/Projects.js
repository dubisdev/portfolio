import Project from "./Project";

const projects = [
	{
		name: "Todoist Rest Client",
		imgSrc: "/tdr.png",
		url: "https://www.npmjs.com/package/todoist-rest-client",
		tech: ["Typescript"],
	},
	{
		name: "Linkin",
		imgSrc: "/linkin.png",
		url: "https://github.com/RizkyRajitha/linkin",
		tech: ["React", "Javascript", "PrismaSQL"],
	},
	{
		name: "Cerebro-Todoist",
		imgSrc: "/cerebro-todoist.png",
		url: "https://github.com/dubisdev/cerebro-todoist",
		tech: ["Typescript", "ElectronJS", "React"],
	},
];

const ProjectSection = () => (
	<section
		aria-label="my-projects"
		className="max-h-fit sm:flex-[60%] sm:h-[92vh] p-2"
	>
		<h2 className="text-center text-3xl">Mis Proyectos y Contribuciones</h2>
		<br />
		<div className="max-h-[75vh] flex flex-wrap justify-around overflow-y-scroll items-stretch ">
			{projects.map((p, index) => {
				return <Project key={index} {...p} />;
			})}
		</div>
	</section>
);

export default ProjectSection;
