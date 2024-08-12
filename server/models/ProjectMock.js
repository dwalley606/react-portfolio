// Mock for the Project model
const Project = {
  find: jest.fn(),
  save: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
  findById: jest.fn(),
};

module.exports = Project;
