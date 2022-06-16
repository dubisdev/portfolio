import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styles from "./project.module.css";

const Project = ({ name, url, imgSrc, tech }) => {
	const [isHover, setIsHover] = useState(false);
	const isMobile = useMediaQuery("(max-width: 640px)");

	if (isMobile)
		return (
			<a target="_blank" rel="noopener noreferrer" href={url} className={"relative w-full h-52 my-1"}>
        <img src={imgSrc} alt={name} className={"basis-[450px] h-48 my-1 bg-cover w-full " + styles.imgBack}/>
        <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 items-center justify-center p-4">
						<span className="text-xl">{name}</span>
						<div className="w-[100%] flex flex-wrap justify-around items-center p-1">
							{tech.map((t, index) => 
									<span
										className="rounded-lg p-1.5 bg-black text-[#be99ff] m-2"
										key={index}
									>{t}</span>
							)}
					</div>
				</div>
      </a> 
		);

	return (
			<a target="_blank" rel="noopener noreferrer" href={url}
        className={"relative basis-[450px] rounded-[5px] h-52 my-2"}
				onMouseOver={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
        <img src={imgSrc} alt={name} className={"w-full " + styles.imgBack}/>
				<div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 items-center justify-center opacity-100 p-4 hover:backdrop-brightness-75">
					<span className="text-xl">{name}</span>
					  {isHover && (
						  <div className="flex flex-wrap justify-around items-center p-1">
                {tech.map((t, index) => 
                    <span
                      className="rounded-lg p-1.5 bg-black text-[#be99ff] m-2"
                      key={index}
                    >{t}</span>
                )}
              </div>
				  	)}
				</div>
			</a>
		
	);
};

export default Project;
