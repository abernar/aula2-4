import express from "express";
import { studentModel } from "../models/student.js";
const app = express();

app.post("/student", async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    send.status(500), send(error);
  }
});

app.get("/student", async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.send(students);
  } catch (error) {
      send.status(500).send(error)
  }
});

export { app as studentRouter };
