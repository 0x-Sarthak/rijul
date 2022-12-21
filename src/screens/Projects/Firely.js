import React from "react";
import One from "../../assets/Firely/One.png";
import Two from "../../assets/Firely/Two.png";
import Three from "../../assets/Firely/Three.png";
import Four from "../../assets/Firely/Four.png";
import Header from "../../components/Header";

const Firely = () => {
	return (
		<>
		<Header />
		<div className="project-view-wrapper">
			<img src={One} alt=" Wow" />
			<img src={Two} alt=" woexz" />
			<img src={Three} alt=" Isdf" />
			<img src={Four} alt=" sdfas" />
		</div>
		</>
	);
};

export default Firely;
