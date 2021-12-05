export default ({ link, imgSrc, description }) => (
	<a href={link} style={{ "text-decoration": "none", "text-align": "center" }}>
		<img src={imgSrc} />
		{description}
	</a>
);
