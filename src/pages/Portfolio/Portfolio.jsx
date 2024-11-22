import { useState } from "react";
import Project from "../../components/Project/index";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "weatherDashboard",
      description: "Front End",
      link: "https://dwalley606.github.io/weather-dashboard/",
      repo: "https://github.com/dwalley606/weather-dashboard",
    },
    {
      name: "ecommerceBackend",
      description: "ORM with Express and Sequelize",
      link: "https://github.com/dwalley606/e-commerce-backend",
      repo: "https://github.com/dwalley606/e-commerce-backend",
    },
    {
      name: "logoGenerator",
      description: "CLI with Node",
      link: "https://drive.google.com/file/d/1BtH7LayYQwCNaSSTN9QhBt2WXpxy9bo7/view?pli=1",
      repo: "https://github.com/dwalley606/logo-generator",
    },
    {
      name: "payrollTracker",
      description: "HTML/CSS/JavaScript",
      link: "https://dwalley606.github.io/payroll-tracker/",
      repo: "https://github.com/dwalley606/payroll-tracker",
    },
    {
      name: "bookReviews",
      description: "HTML/CSS/JavaScript",
      link: "https://jobeans24.github.io/Reviews/",
      repo: "https://github.com/jobeans24/Reviews",
    },
    {
      name: "socialMediaBackend",
      description: "MongoDB and Express",
      link: "https://drive.google.com/file/d/1o7ZlWyqjYWPfy5tRsJvL34-bTsEW1GAV/view",
      repo: "https://github.com/dwalley606/social-network-api?tab=readme-ov-file",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;