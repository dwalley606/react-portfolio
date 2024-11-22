import "./style.css"; // Import the CSS file for the component
import githubIcon from "../../assets/icons/github.png"; // Import GitHub icon
import linkedinIcon from "../../assets/icons/linkedin.png"; // Import LinkedIn icon
import facebookIcon from "../../assets/icons/facebook.png"; // Import Facebook icon

function Footer() {
  // Replace links with social media profiles
  const icons = [
    {
      name: "GitHub",
      link: "https://github.com/dwalley606",
      img: githubIcon,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/daniel-walley/",
      img: linkedinIcon,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/dwalle1/",
      img: facebookIcon,
    },
  ];

  return (
    <footer>
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icon.img} alt={icon.name} className="social-icon" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;
