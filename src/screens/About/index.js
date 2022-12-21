import Girl from "../../assets/G1final.jpg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./about.scss";

const About = () => {
	return (
		<>
			<Header />
			<div className="page-layout">
			<div className="about-container">
				<div>
					<img src={Girl} alt="Hi.png" />
				</div>
				<div className="text-area">
					<h1>Daughter Dreamer Designer</h1>
					<p>
						My name is Rijul Jain, currently working as an intern in Fareportal.
						I started my jouney as a computer engineer but found solace in
						design. Throughout my studies, I worked on a variety of briefs,
						including web design, user interface design, branding, and graphic
						design. My group projects aided in the development of my teamwork
						and communication abilities.
					</p>

					<h2> My Beliefs</h2>
					<div>
						<h3> Everything revolves around passion. </h3>
						<p>
							I believe that working with passion is extremely important. It not
							only keeps us motivated and optimistic, but it also serves as a
							learning booster.
						</p>
					</div>
					<div>
						<h3>Be kind.</h3>
						<p>
							Kindness has the power to change the world for the better. Even
							the most insignificant acts of kindness leave their imprints on
							the hearts of others.
						</p>
					</div>
					<div>
						<h3>Simplicity is the ultimate sophistication.</h3>
						<p>
							Simplicity facilitates the smooth flow of things, whether at work
							or in life. It produces open-mindedness and clarifies our
							priorities. Simply put, simplicity simplifies life.
						</p>
					</div>
				</div>
			</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
