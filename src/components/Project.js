import styles from "./project.module.css";

const Project = ({ name, url, imgSrc, tech }) => {
	return (
		<>
			<a href={url} className={`${styles.project} a_background`}>
				<div className={styles.project_hover}>
					<span style={{ "font-size": "x-large" }}>{name}</span>
					<div className="tech">
						{tech.map((t) => {
							return <span>{t}</span>;
						})}
					</div>
				</div>
			</a>
			<style jsx>{`
				.a_background {
					background-image: url("${imgSrc}");
					background-size: cover;
					padding: 120px;
				}

				.tech {
					height: 40%;
					width: 100%;
					display: none;
				}

				@media (max-width: 750px) {
					.tech {
						display: flex;
					}
				}
			`}</style>
		</>
	);
};

export default Project;
