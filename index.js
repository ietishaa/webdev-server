const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/lab5/welcome", (req, res) => res.send("Welcome to Lab 5!"));

app.get("/lab5/add/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.json({ result: Number(a) + Number(b) });
});
app.get("/lab5/subtract/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.json({ result: Number(a) - Number(b) });
});
app.get("/lab5/multiply/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.json({ result: Number(a) * Number(b) });
});
app.get("/lab5/divide/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.json({ result: Number(a) / Number(b) });
});

app.get("/lab5/calculator", (req, res) => {
  const { operation, a, b } = req.query;
  const numA = Number(a), numB = Number(b);
  let result;
  if (operation === "add") result = numA + numB;
  else if (operation === "subtract") result = numA - numB;
  else if (operation === "multiply") result = numA * numB;
  else if (operation === "divide") result = numA / numB;
  res.json({ result });
});

const assignment = { _id: "a1", title: "A1 - HTML user interfaces", points: 125 };
app.get("/lab5/assignment", (req, res) => res.json(assignment));
app.get("/lab5/assignment/title", (req, res) => res.send(assignment.title));

const moduleObj = { _id: "m1", name: "Week 1 - Introduction" };
app.get("/lab5/module", (req, res) => res.json(moduleObj));
app.get("/lab5/module/name", (req, res) => res.send(moduleObj.name));

const todos = [
  { _id: "1", title: "Buy milk", completed: true },
  { _id: "2", title: "Walk dog", completed: false },
  { _id: "3", title: "Finish homework", completed: false },
];
app.get("/lab5/todos", (req, res) => {
  if (req.query.completed === "true") {
    return res.json(todos.filter((t) => t.completed));
  }
  res.json(todos);
});
app.get("/lab5/todos/:id", (req, res) => {
  const todo = todos.find((t) => t._id === req.params.id);
  res.json(todo);
});

const courses = [
  { _id: "1234", name: "Web Development" },
  { _id: "5678", name: "Algorithms" },
  { _id: "9012", name: "Numerical Analysis" },
];
app.get("/api/courses", (req, res) => res.json(courses));

const modules = [
  { _id: "m101", name: "Week 1 - Introduction", course: "1234" },
  { _id: "m102", name: "Week 2 - HTML & CSS", course: "1234" },
  { _id: "m201", name: "Week 1 - Sorting", course: "5678" },
];
app.get("/api/courses/:courseId/modules", (req, res) => {
  res.json(modules.filter((m) => m.course === req.params.courseId));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));