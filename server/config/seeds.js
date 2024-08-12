const db = require("./connection");
const Project = require("../models/Project");

db.once("open", async () => {
  const projects = await Project.insertMany([
    {
      name: "Weather Dashboard",
      image: "../../client/src/assets/projects/weatherDashboard.png",
      repo: "https://github.com/dwalley606/weather-dashboard",
      link: "https://dwalley606.github.io/weather-dashboard/",
      description:
        "A weather portfolio that displays the weather in a given city.",
    },
    {
      name: "E-commerce Backend",
      image: "../../client/src/assets/projects/ecommerceBackend.png",
      repo: "https://github.com/dwalley606/e-commerce-backend",
      link: "https://github.com/dwalley606/e-commerce-backend",
      description:
        "A project to explore connecting an API with express to a database using Sequelize as an ORM tool.",
    },
    {
      name: "Logo Generator",
      image: "../../client/src/assets/projects/logoGenerator.png",
      repo: "https://github.com/dwalley606/logo-generator",
      link: "https://drive.google.com/file/d/1BtH7LayYQwCNaSSTN9QhBt2WXpxy9bo7/view",
      description:
        "A small node based app to construct a simple SVG logo for inclusion on personal web pages.",
    },
    {
      name: "Employee Payroll Tracker",
      image: "../../client/src/assets/projects/payrollTracker.png",
      repo: "https://github.com/dwalley606/payroll-tracker",
      link: "https://dwalley606.github.io/payroll-tracker/",
      description:
        "A small project building an employee payroll tracker with the GWU coding boot camp.",
    },
    {
      name: "Book Reviews",
      image: "../../client/src/assets/projects/bookReviews.png",
      repo: "https://github.com/jobeans24/Reviews",
      link: "https://jobeans24.github.io/Reviews/",
      description:
        "A project developed with agile methodologies to create a front end for a book review site.",
    },
    {
      name: "Social Media Backend",
      image: "../../client/src/assets/projects/socialMediaBackend.png",
      repo: "https://github.com/dwalley606/social-network-api",
      link: "https://drive.google.com/file/d/1o7ZlWyqjYWPfy5tRsJvL34-bTsEW1GAV/view",
      description:
        "A short project to practice MongoDB by coding the basics of a social media app backend.",
    },
  ]);
  console.log("Projects seeded:", projects);
  process.exit();
});
