"use strict";
const mongoose = require("mongoose");

const jeevanathiSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  img:{
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
   
});

const Jeevanathi = mongoose.model("Jeevanathi", jeevanathiSchema);

module.exports = Jeevanathi;
