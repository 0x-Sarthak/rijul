import logo from "../../assets/logo.png";
import "./header.scss";

const Header = () => {
	return (
		<header>
			<div>
				<img style={{ paddingTop: "10px" }} src={logo} alt="Logo.png" />
			</div>
			<div>
				<ul>
					<li>Projects</li>
					<li>Resume</li>
					<li>About</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
