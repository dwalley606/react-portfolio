const { Project } = require('../models');

const resolvers = {
  Query: {
    getProjects: async () => {
      try {
        const projects = await Project.find();
        return projects;
      } catch (error) {
        throw new Error("Failed to fetch projects");
      }
    }
  },
  Mutation: {
    addProject: async (_, { name, image, repo, link, description }) => {
      const newProject = new Project({ name, image, repo, link, description });
      await newProject.save();
      return newProject;
    },
    updateProject: async (_, { _id, name, image, repo, link, description }) => {
      const updatedProject = await Project.findByIdAndUpdate(_id, { name, image, repo, link, description }, { new: true });
      return updatedProject;
    },
    deleteProject: async (_, { _id }) => {
      await Project.findByIdAndDelete(_id);
      return "Project deleted successfully";
    },
    findProject: async (_, { _id }) => {
      const project = await Project.findById(_id);
      return project;
    }
  }
};

module.exports = resolvers;