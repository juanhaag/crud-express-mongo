const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/tareas",require("./routes/tarea"));

app.get("/", (req, res) => {
  res.send("Funciona");
});

app.listen(port, () => {
  console.log("localhost:", port);
});
