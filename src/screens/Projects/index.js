import "./projects.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Wizkid from "../../assets/Wizkid.png";
import Antique from "../../assets/Antique.png";
import Wishtree from "../../assets/Wishtree.png";
import Vertal from "../../assets/Vertal.png";
import BabyCare from "../../assets/Babycare.png";
import Art from "../../assets/Art&Artist.png";
import Firely from "../../assets/Firely.png";
import FirelyGirl from "../../assets/FireflyGirl.png";
import WinetiqueG from "../../assets/WinetiqueG.png";
import WhizkidG from "../../assets/WhizkidG.png";
import WishtreeG from "../../assets/WishtreeG.png";
import VertalG from "../../assets/VertalG.png";
import BabycareG from "../../assets/BabycareG.png";
import G2 from "../../assets/G2final.jpg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Projects = () => {
	const { ref: firely, inView: firelyIsVisible } = useInView({
		threshold: 0.6,
	});
	const { ref: winetique, inView: winetiqueIsVisible } = useInView({
		threshold: 0.62,
	});
	const { ref: whizkid, inView: whizkidIsVisible } = useInView({
		threshold: 0.6,
	});
	const { ref: wishtree, inView: wishtreeIsVisible } = useInView({
		threshold: 0.6,
	});
	const { ref: vertal, inView: vertalIsVisible } = useInView({
		threshold: 0.6,
	});
	const { ref: babycare, inView: babycareIsVisible } = useInView({
		threshold: 0.8,
	});
	const { ref: artandart, inView: artandartIsVisible } = useInView({
		threshold: 0.8,
	});

	const [show, setShow] = useState(null);

  useEffect(() => {
    if(firelyIsVisible) setShow('firely');
    if(winetiqueIsVisible) setShow('winetique');
    if(whizkidIsVisible) setShow('whizkid');
    if(wishtreeIsVisible) setShow('wishtree');
    if(vertalIsVisible) setShow('vertal');
    if(babycareIsVisible) setShow('babycare');
    if(artandartIsVisible) setShow('art');
    
  }, [babycareIsVisible,artandartIsVisible, vertalIsVisible, firelyIsVisible, winetiqueIsVisible, whizkidIsVisible, wishtreeIsVisible])

  console.log(show)
	return (
		<div style={{ textAlign: "center" }}>
			<Header />
      <div className="page-layout">
			<div className="project-container">
				<div className="girl-container">
					<div style={{ width: "560px" }}></div>
					{show === 'firely' && <img src={FirelyGirl} alt="girl.png" />}
					{show === 'winetique' && <img src={WinetiqueG} alt="girl.png" />}
					{show === 'whizkid' && <img src={WhizkidG} alt="girl.png" />}
					{show === 'wishtree' && <img src={WishtreeG} alt="girl.png" />}
					{show === 'vertal' && <img src={VertalG} alt="girl.png" />}
					{show === 'babycare' && <img src={BabycareG} alt="girl.png" />}
					{show === 'art' && <img src={G2} alt="Girl2.jpg" />}
				</div>
				<div className="description-section">
				<Link to="/firely">
						<div class="image" ref={firely}>
							<img src={Firely} alt="Firely.png" />
							<div className="image__overlay">
								<div id="wrapper"></div>
								<div className="image__description">
									<p>
										Firefly is an independent agency focussed on telling brand
										stories and creating word of mouth for various cool brands.
										It specialises in concept development, creation, brand
										activation and high-end events.
									</p>
								</div>
							</div>
						</div>
					</Link>
					<Link to="/wizkid">
						<div class="image" ref={whizkid}>
							<img src={Wizkid} alt="Firely.png" />
							<div className="image__overlay">
								<div id="wrapper"></div>
								<div className="image__description">
									<p>
										WHIZKID is a modern and easy to use tool which provides
										children well-curated and age relevant news in a creative
										manner. A perfect news platform for kids to make them
										future-ready.
									</p>
								</div>
							</div>
						</div>
					</Link>

					<Link to="/winetique">
						<div class="image" ref={winetique}>
							<img src={Antique} alt="Firely.png" />
							<div className="image__overlay">
								<div id="wrapper"></div>
								<div className="image__description">
									<p>
										Winetique was conceptualised with the single minded purpose
										of raising the bar of wine experience. Each wine is a
										cultural symbol which narrates it’s own unique story.
									</p>
								</div>
							</div>
						</div>
					</Link>
					<Link to="/wishtree">
						<div class="image" ref={wishtree}>
							<img src={Wishtree} alt="Firely.png" />
							<div className="image__overlay">
								<div id="wrapper"></div>
								<div className="image__description">
									<p>
										WishTree reflects the future of shopping where data
										analysis, a personalised relationship with clients and
										customers, and streamlined business management will be
										utmost important.
									</p>
								</div>
							</div>
						</div>
					</Link>
					

					

					<Link to="/vertal">
						<div class="image" ref={vertal}>
							<img src={Vertal} alt="Firely.png" />
							<div className="image__overlay">
								<div id="wrapper"></div>
								<div className="image__description">
									<p>
										Vertal is an easy to use pocket translator which brings
										people together via technology. It aims to converts text and
										audio to sign-language automatically using artificial
										intelligence.
									</p>
								</div>
							</div>
						</div>
					</Link>
					<Link to="/babycare">
						<div class="image" ref={babycare}>
							<img src={BabyCare} alt="Firely.png" />
							<div className="image__overlay">
								<div id="wrapper"></div>
								<div className="image__description">
									<p>
										‘Baby Care’ is a cosmetic brand for complete care protection
										of babies. They recently launched a new range of lotions,
										which have been formulated keeping children at heart.
									</p>
								</div>
							</div>
						</div>
					</Link>
					<Link to="/artandart">
						<div class="image" ref={artandart}>
							<img src={Art} alt="Firely.png" />
							<div className="image__overlay">
								<div id="wrapper"></div>
								<div className="image__description">
									<p>
										Art & Artists is an Indian art magazine, responsible for the
										promotion of a critical discourse around diverse art forms,
										activities and disciplines.
									</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
			</div>
			<Footer />
		</div>
	);
};

export default Projects;
