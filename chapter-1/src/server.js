const express = require("express");

const app = express();

app.get("/courses", (request, response) => {
  return response.status(200).json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  return response.status(200).json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/course/:id", (request, response) => {
  return response.status(200).json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.status(200).json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.status(200).json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333, () => console.log("server up 🚀\nhttp://localhost:%s", 3333));
