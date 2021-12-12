const Icon = ({ link, imgSrc, description }) => (
	<a
		href={link}
		className="p-2 rounded-[5px] hover:bg-[#38363f] flex flex-col items-center text-sm">
		<img
			src={imgSrc}
			alt={`${description} icon`}
			className="mb-2 justify-center w-9"
		/>
		{description}
	</a>
);

export default Icon;
