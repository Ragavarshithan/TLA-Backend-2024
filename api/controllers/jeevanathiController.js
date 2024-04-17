const Jeevanathi = require("../models/jeevanathiModel");

const jeevanathiController = {
  getAllProjects: async (req, res, next) => {
    try {
      const projects = await Jeevanathi.find();
      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  addProject: async (req, res, next) => {
    try {
      const newProject = await Jeevanathi.create(req.body);
      res.status(201).json(newProject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateProject: async (req, res, next) => {
    try {
      const id = req.params.projectId;
      const project = await Jeevanathi.findById(id);
      if (project) {
        project.set(req.body); // Update document properties
        const updatedProject = await project.save(); // Save the changes
        res.status(200).json(updatedProject);
      } else {
        res.status(404).json({ message: "project not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = jeevanathiController;
