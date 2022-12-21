import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./resume.scss";
import { useInView } from "react-intersection-observer";
const Resume = () => {
	const { ref: experience, inView: experienceIsVisible } = useInView({threshold: 0.5});
	const { ref: volunteer, inView: volunteerIsVisible } = useInView({threshold: 0.8});
	const { ref: education, inView: educationIsVisible } = useInView({threshold: 0.8});

	const [active, setActive] = useState("");

	useEffect(() => {
		if (educationIsVisible) setActive("education");
		if (volunteerIsVisible) setActive("volunteer");
		if (experienceIsVisible) setActive("experience");
	}, [experienceIsVisible,educationIsVisible,volunteerIsVisible]);
	return (
		<div style={{ textAlign: "center" }}>
			<Header />
			<div className="page-layout">
			<div className="resume-container">
				<div className="reactive-container">
					<span style={{fontSize: "20px"}} className={experienceIsVisible ? "reactive" : ""}>
						Work Experience
					</span>
					<span style={{fontSize: "20px"}} className={volunteerIsVisible ? "reactive" : ""}>
						Volunteering and Leadership
					</span>
					<span style={{fontSize: "20px"}} className={educationIsVisible ? "reactive" : ""}>Education</span>
					{/* <h3>Resume</h3> */}
					<br></br>
				</div>
				<div className="text-area">
					<div ref={experience}>
						<h1> UI/UX Designer Intern</h1>
						<h3>Foreportal India Private Limited Gurgaon</h3>
						<h5>20-06-2022 to 20-12-2022</h5>

						<ul>
							<li>
								Carried out competitive analysis, qualitative research,
								brainstorming, and ideation for Black Friday Cyber Monday (BFCM)
								campaign
							</li>
							<li>
								Designed sitemap, wireframe, prototype and UI of CheapOAir web
								page and mobile app for better user engagement.
							</li>
							<li>
								Translated user stories and business requirements into effective
								designs.
							</li>
							<li>Upskilled the team with the Figma software.</li>
						</ul>
					</div>

					<h1> Java Intern</h1>
					<h3>Allsoft Solutions and Services Private Limited, Chandigarh</h3>
					<h5>15 June 2020 - 31 July 2020</h5>
					<ul>
						<li>
							Developed project-Student Attendance Management System using Java
							and MySql Database
						</li>
					</ul>
					<div ref={volunteer}>
						<h1>Exceutive member</h1>
						<h3>Toastmasters Club , Chitkara University, Punjab</h3>
						<h5> 2019 - Present</h5>
						<ul>
							<li>
								Organized Colloquio Competitions and Table's Topic Session
							</li>
						</ul>
						<br></br>
						<h1>Editor</h1>
						<h3>Inner wheel club utkarsh, Ambala Cantt</h3>
						<h5>2021 - Present</h5>
						<ul>
							<li>
								Handled social media https://www.instagram.com/iwc_utkarsh/
							</li>
							<li>Organised plantation drives.</li>
							<li>
								Conducted awareness drive about begging and girl child education
							</li>
							<li>
								Organised National level Talent Hunt and Poetry Competition.
							</li>
						</ul>
						<h1>Volunteer</h1>
						<h3>Swarmani Youth Welfare Association, Chandigarh</h3>
						<h5>March 2020 - Present</h5>
						<ul>
							<li>
								Organising member for the camp ‘My Policy, My Right’-to ensure
								the schemes and initiatives reach the beneficiaries.
							</li>
						</ul>
					</div>

					<div ref={education}>
						<h1> B.E. CSE specilisation in UX/UI</h1>
						<h3>Chitkara University Punjab</h3>
						<h5> August 2019 - june 2023</h5>
						<ul>
							<li>CGPA - 9.78 (till 6th Semester)</li>
							<li>1st Price in CSI Tech Enclave 2021 in Tech Bolt quiz</li>
						</ul>
					</div>
					<h2>D.C. Montessori Senior Secondary School</h2>
					<h4> Chandigarh</h4>
					<h5>2017 - 2019</h5>
					<h2>Convent of jesus and Mary school</h2>
					<h4>Ambala</h4>
					<h5>Untill 2017</h5>
				</div>
			</div>
        </div>
			<Footer />
		</div>
	);
};

export default Resume;
