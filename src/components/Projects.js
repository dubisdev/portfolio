import Project from "./Project";

const projects = [
	{
		name: "AddToDoist",
		imgSrc: "https://repository-images.githubusercontent.com/489759171/70196b4b-f2fa-4c97-9e26-59142744d472",
		url: "https://github.com/AddToDoist",
		tech: ["Twitter Bot", "TypeScript", "NodeJS"],
	},
	{
		name: "Linkin",
		imgSrc: "/linkin.png",
		url: "https://github.com/RizkyRajitha/linkin",
		tech: ["React", "JavaScript", "PrismaSQL"],
	},
	{
		name: "Todoist Rest Client",
		imgSrc: "/tdr.png",
		url: "https://www.npmjs.com/package/todoist-rest-client",
		tech: ["TypeScript"],
	},
	{
		name: "Cerebro-Todoist",
		imgSrc: "/cerebro-todoist.png",
		url: "https://github.com/dubisdev/cerebro-todoist",
		tech: ["TypeScript", "ElectronJS", "React"],
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
