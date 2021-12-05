import styles from "./icon.module.css";
const Icon = ({ link, imgSrc, description }) => (
	<a href={link} className={styles.a_element}>
		<img src={imgSrc} alt={`${description} icon`} />
		<br />
		{description}
	</a>
);

export default Icon;
