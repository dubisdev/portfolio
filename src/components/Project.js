import styles from "./project.module.css";

const Project = ({ name, url, imgSrc, tech }) => {
	return (
		<>
			<a
				href={url}
				className={`${styles.project} a_background`}
				style={{ backgroundImage: `url("${imgSrc}")` }}>
				<div className={styles.project_hover}>
					<span style={{ fontSize: "x-large" }}>{name}</span>
					<div className="tech">
						{tech.map((t) => {
							return <span key={t}>{t}</span>;
						})}
					</div>
				</div>
			</a>
			<style jsx="true">{`
				.a_background {
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
