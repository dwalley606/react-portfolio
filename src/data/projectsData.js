import ecommerceBackendImg from '../assets/projects/ecommerceBackend.png';
import logoGeneratorImg from '../assets/projects/logoGenerator.png';
import payrollTrackerImg from '../assets/projects/payrollTracker.png';
import bookReviewsImg from '../assets/projects/bookReviews.png';
import socialMediaBackendImg from '../assets/projects/socialMediaBackend.png';
import threenigmaImg from '../assets/projects/threenigma.png';

const projectsData = [
  {
    name: "3nigma",
    description: "3NIGMA is a cutting-edge messaging application designed to operate seamlessly in the browser as a Progressive Web App (PWA). Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a robust full-stack solution for real-time communication. The application leverages Apollo Client for state management and GraphQL for efficient data fetching, ensuring a smooth user experience. With a focus on security, 3NIGMA incorporates end-to-end encryption, although this feature is still under development. The app's responsive design, powered by Material-UI, ensures compatibility across devices, making it accessible to users of all technical backgrounds. This project showcases the integration of modern web technologies to deliver a secure and versatile communication platform.",
    link: "https://threenigma.onrender.com/dashboard",
    repo: "https://github.com/dwalley606/3nigma",
    img: threenigmaImg,
  },
  {
    name: "E-commerce Backend",
    description: "This E-commerce Back End application is designed to demonstrate the integration of an Express.js API with a PostgreSQL database using Sequelize as an ORM. The application provides a robust backend solution for managing products, categories, and tags, allowing for CRUD operations through RESTful API endpoints. The architecture is modular, with separate models for Product, Category, Tag, and ProductTag, each defined with Sequelize to ensure data integrity and relationships. The application is tested using Jest and Supertest to ensure reliability and performance. It is a comprehensive example of a full-stack application backend, showcasing best practices in database management, API design, and testing.",
    link: "https://github.com/dwalley606/e-commerce-backend",
    repo: "https://github.com/dwalley606/e-commerce-backend",
    img: ecommerceBackendImg,
  },
  {
    name: "Logo Generator",
    description: "This app is a Node.js-based logo generator designed to create simple SVG logos for personal web pages. It prompts the user for input using the Inquirer library, allowing them to specify logo text, text color, shape type (Triangle, Circle, or Square), and shape color. Based on the user's input, the app generates an SVG file with the specified design and saves it in the 'examples' folder. The app is intended for users who want to quickly create a personalized logo with minimal effort.",
    link: "https://drive.google.com/file/d/1BtH7LayYQwCNaSSTN9QhBt2WXpxy9bo7/view?pli=1",
    repo: "https://github.com/dwalley606/logo-generator",
    img: logoGeneratorImg,
  },
  {
    name: "Payroll Tracker",
    description: "The Employee Payroll Tracker app is designed to manage and display employee data, specifically focusing on their names and salaries. Users can interact with the app by adding employee details through prompts, which are then stored in an array of employee objects. The app calculates and displays the average salary of the employees, selects a random employee to display, and sorts the employees by their last names. The employee data is presented in an HTML table format, providing a clear and organized view of the information. The app is styled with CSS for a clean and user-friendly interface and is deployed on GitHub Pages for easy access.",
    link: "https://dwalley606.github.io/payroll-tracker/",
    repo: "https://github.com/dwalley606/payroll-tracker",
    img: payrollTrackerImg,
  },
  {
    name: "Book Reviews",
    description: "This application, titled 'Book Finder & Reviews', is designed to allow users to search for books and leave reviews. Users can search for books by title, author, or genre using the OpenLibrary API, and view the current New York Times Best Sellers list. The app provides a homepage with a list of best-selling books and buttons for searching and adding reviews. Users can submit reviews, which are stored in local storage and displayed alongside other user reviews. The app also features a modal for adding reviews and a section for displaying previous searches and reviews.",
    link: "https://jobeans24.github.io/Reviews/",
    repo: "https://github.com/jobeans24/Reviews",
    img: bookReviewsImg,
  },
  {
    name: "Social Media Backend",
    description: "This app is a backend for a social media platform designed to practice using MongoDB. It provides functionality for managing users, thoughts, and reactions. Users can create, update, and delete thoughts, as well as add and remove reactions to thoughts. The app also supports user management, including creating, updating, and deleting users, and managing friendships between users. The backend is built using Node.js, Express, and Mongoose, and it connects to a MongoDB database to store and retrieve data. The app is structured with controllers, models, and routes to handle API requests efficiently.",
    link: "https://drive.google.com/file/d/1o7ZlWyqjYWPfy5tRsJvL34-bTsEW1GAV/view",
    repo: "https://github.com/dwalley606/social-network-api?tab=readme-ov-file",
    img: socialMediaBackendImg,
  },
];

export default projectsData;