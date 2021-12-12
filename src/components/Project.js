import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

const Project = ({ name, url, imgSrc, tech }) => {
	const [isHover, setIsHover] = useState(false);
	const isMobile = useMediaQuery("(max-width: 640px)");

	if (isMobile)
		return (
			<>
				<a
					href={url}
					className={`relative basis-[450px] rounded-[5px] h-52 m-[0.5%] bg-cover`}
					style={{ backgroundImage: `url("${imgSrc}")` }}
					onMouseOver={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}>
					<div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 items-center justify-center opacity-100 p-4 backdrop-brightness-50">
						<span className="text-xl">{name}</span>

						<div className="h-[40%] w-[100%] flex flex-wrap justify-around items-center p-1">
							{tech.map((t, index) => {
								return (
									<span
										className="rounded-[5px] p-[5px] bg-black text-[#be99ff] m-[15px]"
										key={index}>
										{t}
									</span>
								);
							})}
						</div>
					</div>
				</a>
			</>
		);

	return (
		<>
			<a
				href={url}
				className={`relative basis-[450px] rounded-[5px] h-52 m-[0.5%] bg-cover`}
				style={{ backgroundImage: `url("${imgSrc}")` }}
				onMouseOver={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}>
				<div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 items-center justify-center opacity-100 p-4 backdrop-brightness-[0.60] hover:backdrop-brightness-50">
					<span className="text-xl">{name}</span>
					{isHover && (
						<div className="h-[40%] w-[100%] flex flex-wrap justify-around items-center p-1">
							{tech.map((t, index) => {
								return (
									<span
										className="rounded-[5px] p-[5px] bg-black text-[#be99ff] m-[15px]"
										key={index}>
										{t}
									</span>
								);
							})}
						</div>
					)}
				</div>
			</a>
		</>
	);
};

export default Project;
