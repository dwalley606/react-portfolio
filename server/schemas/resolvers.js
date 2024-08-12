const Project = require("../models/Project");

//Query Resolvers
// const getProjects = async () => {
//   const projects = await Project.find();
//   try {
//     return projects;
//   } catch (error) {
//     throw new Error("Failed to fetch projects");
//   }
// };

// //Mutation Resolvers
// // Updated addProject function with default parameter values and try-catch block
// const addProject = async ({
//   name = "",
//   image = "",
//   repo = "",
//   link = "",
//   description = "",
// } = {}) => {
//   try {
//     const newProject = new Project({ name, image, repo, link, description });
//     await newProject.save();
//     return newProject;
//   } catch (error) {
//     throw new Error("Failed to add a new project: " + error.message);
//   }
// };

// const updateProject = async (
//   _,
//   { _id, name, image, repo, link, description }
// ) => {
//   try {
//     const updatedProject = await Project.findByIdAndUpdate(
//       _id,
//       { name, image, repo, link, description },
//       { new: true }
//     );
//     return updatedProject;
//   } catch (error) {
//     throw new Error("Failed to update project");
//   }
// };

// const deleteProject = async (_, { _id }) => {
//   await Project.findByIdAndDelete(_id);
//   return "Project deleted successfully";
// };

// const findProject = async (_, { _id }) => {
//   const project = await Project.findById(_id);
//   return project;
// };

const resolvers = {
  Query: {
    getProjects: async () => {
      try {
        const projects = await Project.find();
        return projects;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    },
    findProject: async (_, { _id }) => {
      const project = await Project.findById(_id);
      return project;
    },
  },
  Mutation: {
    addProject: async (_, { name, image, repo, link, description }) => {
      const newProject = new Project({ name, image, repo, link, description });
      await newProject.save();
      return newProject;
    },
    updateProject: async (_, { _id, name, image, repo, link, description }) => {
      const updatedProject = await Project.findByIdAndUpdate(
        _id,
        { name, image, repo, link, description },
        { new: true }
      );
      return updatedProject;
    },
    deleteProject: async (_, { _id }) => {
      await Project.findByIdAndDelete(_id);
      return "Project deleted successfully";
    },
  },
};

module.exports = resolvers;
