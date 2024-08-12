// Import the resolver functions to be tested
const {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  findProject,
} = require("../schemas/resolvers");

// Import the mocked Project model for testing
const Project = require("../models/ProjectMock");

// Mock the Project model
// jest.mock("../models", () => {
//   const mockProjects = [
//     {
//       _id: "1",
//       name: "Project 1",
//       image: "image1.jpg",
//       repo: "repo1",
//       link: "link1",
//       description: "Description 1",
//     },
//     {
//       _id: "2",
//       name: "Project 2",
//       image: "image2.jpg",
//       repo: "repo2",
//       link: "link2",
//       description: "Description 2",
//     },
//   ];

//   return {
//     Project: {
//       find: jest.fn().mockResolvedValue(mockProjects),
//       create: jest
//         .fn()
//         .mockImplementation((project) => ({ _id: "3", ...project })),
//       findByIdAndUpdate: jest
//         .fn()
//         .mockImplementation((_id, project) => ({ _id, ...project })),
//       findByIdAndDelete: jest
//         .fn()
//         .mockResolvedValue("Project deleted successfully"),
//       findById: jest
//         .fn()
//         .mockImplementation((_id) =>
//           mockProjects.find((project) => project._id === _id)
//         ),
//     },
//   };
// });

jest.mock("../models/ProjectMock");

describe("Resolvers", () => {
  // Existing test for getProjects resolver
  test("getProjects resolver should return projects", async () => {
    const projects = await getProjects();
    expect(projects).toEqual([
      {
        _id: "1",
        name: "Project 1",
        image: "image1.jpg",
        repo: "repo1",
        link: "link1",
        description: "Description 1",
      },
      {
        _id: "2",
        name: "Project 2",
        image: "image2.jpg",
        repo: "repo2",
        link: "link2",
        description: "Description 2",
      },
    ]);
  });

  test("addProject resolver should add a new project", async () => {
    const newProject = await addProject({
      name: "New Project",
      image: "new.jpg",
      repo: "newRepo",
      link: "newLink",
      description: "New Description",
    });
    expect(newProject).toMatchObject({
      name: "New Project",
      image: "new.jpg",
      repo: "newRepo",
      link: "newLink",
      description: "New Description",
    });
  });

  test("updateProject resolver should update an existing project", async () => {
    const updatedProject = await updateProject(null, {
      _id: "1",
      name: "Updated Project",
      image: "updated.jpg",
      repo: "updatedRepo",
      link: "updatedLink",
      description: "Updated Description",
    });
    expect(updatedProject).toMatchObject({
      _id: "1",
      name: "Updated Project",
      image: "updated.jpg",
      repo: "updatedRepo",
      link: "updatedLink",
      description: "Updated Description",
    });
  });

  test("deleteProject resolver should delete a project", async () => {
    const result = await deleteProject(null, { _id: "1" });
    expect(result).toBe("Project deleted successfully");
  });

  test("findProject resolver should find a project by ID", async () => {
    const foundProject = await findProject(null, { _id: "1" });
    expect(foundProject).toMatchObject({
      _id: "1",
      name: "Project 1",
      image: "image1.jpg",
      repo: "repo1",
      link: "link1",
      description: "Description 1",
    });
  });
});
