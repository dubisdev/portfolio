import Icon from "./Icon";
import styles from "./info.module.css";

const MyInfo = () => {
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
			<img src="/profile.jpg" className="profile-img" alt="Profile" />
			<h1 style={{ "font-size": "xx-large" }}>dubisdev</h1>
			<p className={styles.description}>
				Soy David Jiménez, estudiante universitario y amante de las tecnologías.
				Hago un poco de todo, el único requisito es que sea útil para el resto
				de personas o para mí :)
			</p>
			<div className={styles.icons_wrapper}>
				{links.map((l, index) => {
					return <Icon key={index} {...l} />;
				})}
			</div>

			<button className={styles.cv_button}>Descargar CV</button>
		</section>
	);
};

export default MyInfo;
