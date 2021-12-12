import Icon from "./Icon";

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
			link: "mailto:dubisdev@gmail.com",
			imgSrc: "/icons/email.svg",
		},
	];
	return (
		<section
			aria-label="my-info"
			className="border-[#4c00cf] border-b-4 p-[20px] flex flex-col items-center mb-[60px] sm:flex-[40%] sm:min-h-[80vh] sm:border-b-0  sm:border-r-4 sm:mb-[20px]">
			<img
				src="/profile.jpg"
				className="w-[270px] h-[270px] object-cover rounded-full mb-[15px]"
				alt="Profile"
			/>
			<h1 className="text-3xl">dubisdev</h1>
			<p className="font-normal text-center mt-5 mb-6">
				Soy David Jiménez, estudiante universitario y amante de la tecnología.
				Hago un poco de todo, siempre que sea útil para el resto de personas o
				para mí :)
			</p>
			<div
				className="flex items-center justify-items-center flex-wrap justify-evenly mb-6" /*className={styles.icons_wrapper}*/
			>
				{links.map((l, index) => {
					return <Icon key={index} {...l} />;
				})}
			</div>

			{/* <button className="bg-[#4c00cf] border-[5px] border-transparent rounded-[10px] p-[10px] w-[300px] hover:opacity-95 hover:border-white">
				Descargar CV
			</button> */}
		</section>
	);
};

export default MyInfo;
