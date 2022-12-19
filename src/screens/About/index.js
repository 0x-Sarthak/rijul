import Girl from "../../assets/G1final.jpg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./about.scss";

const About = () => {
	return (
		<>
			<Header />
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

					<h4> My Beliefs</h4>
					<div>
						<h5> Everything revolves around passion. </h5>
						<p>
							I believe that working with passion is extremely important. It not
							only keeps us motivated and optimistic, but it also serves as a
							learning booster.
						</p>
					</div>
					<div>
						<h5>Be kind.</h5>
						<p>
							Kindness has the power to change the world for the better. Even
							the most insignificant acts of kindness leave their imprints on
							the hearts of others.
						</p>
					</div>
					<div>
						<h5>Simplicity is the ultimate sophistication.</h5>
						<p>
							Simplicity facilitates the smooth flow of things, whether at work
							or in life. It produces open-mindedness and clarifies our
							priorities. Simply put, simplicity simplifies life.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
