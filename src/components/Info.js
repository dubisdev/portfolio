import Icon from "./Icon";
export default () => {
	const links = [
		{
			description: "GH Profile",
			link: "https://github.com/dubisdev",
			imgSrc: "/icons/gh.svg",
		},
		{
			description: "dev.to Profile",
			link: "https://dev.to/dubisdev",
			imgSrc: "/icons/devto.svg",
		},
		{
			description: "Contact me",
			link: "email:dubisdev@gmail.com",
			imgSrc: "/icons/email.svg",
		},
	];
	return (
		<section aria-label="my-info" className="my-info">
			<img src="/profile.jpg" className="profile-img" />
			<h1 style={{ "font-size": "xx-large" }}>dubisdev</h1>
			<p style={{ "text-align": "center", "margin-top": "10px" }}>
				Soy David Jiménez, estudiante universitario y amante de las tecnologías.
				Hago un poco de todo, el único requisito es que sea útil para el resto
				de personas o para mí :)
			</p>
			<br />
			{links.map((l) => {
				return <Icon {...l} />;
			})}

			<button>Descargar CV</button>
		</section>
	);
};
