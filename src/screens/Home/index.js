import React from "react";
import Hi from "../../assets/Hi.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./home.scss";
const Home = () => {
	return (
		<>
			<Header />
			<div className="home-container">
				<div>
					<img src={Hi} alt="Hi.png" />
				</div>
				<div className="text-area">
					<h1>
						Hi, I’m <span>Rijul Jain. </span>
					</h1>
					<p>
						I am an enthusiastic UX/UI designer striving for simple yet
						significant designs. I am passionate about making a difference in
						the lives of others through my work, and am always looking to learn
						new things.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
