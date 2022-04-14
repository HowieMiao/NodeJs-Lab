/** Load components
 * Express      - A Node.js Framework
 * Body-Parser  - A tool to help use parse the data in a post request
 */
const express = require("express");
const bodyParser = require("body-parser");

/** express configuration
 * - Support json encoded bodies
 * - Support encoded bodies
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ops = [
  {
    id: 1,
    name: "Add",
    sign: "+",
  },
  {
    id: 2,
    name: "Subtract",
    sign: "-",
  },
  {
    id: 3,
    name: "Multiply",
    sign: "*",
  },
];

const players = [
  { id : 1, name : "John Doe", dob : "2000-02-20" },
  { id : 2, name : "Jane Doe", dob : "2000-02-21" },
  { id : 3, name : "John Jane", dob : "2000-02-22" },
];

// Simple get api provided to check if the node.js starts up successfully. Opening up http://localhost:3000 should display the below returned json.
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome!" });
});

app.get("/operations", (request, response) => {
  response.send(ops);
});

// GET (BY ID)
app.get("/operations/:id", (request, response) => {
  const opsId = request.params.id;
  const op = ops.find((op) => op.id === parseInt(opsId));
  if (!op)
    return response
      .status(404)
      .send("The task with the provided ID does not exist.");
  response.send(op);
});

// POST, add to the list of ops
app.post("/operations", (request, response) => {
  const op = {
    id: ops.length + 1,
    name: request.body.name,
    sign: request.body.sign,
  };

  ops.push(op);
  response.status(201).send(op);
});

// =============================================================================
// Part B TODO: Add your code support two new API's /players/add and /players/:id here.

app.post("/players/add", (request, response) => {
  const player = {
    id: request.body.id,
    name: request.body.name,
    dob: request.body.dob,
  };

  players.push(player);
  response.status(201).send(player);
});

app.get("/players/:id", (request, response) => {
  const playersId = request.params.id;
  const player = players.find((player) => player.id === parseInt(playersId));
  if (!player)
    return response
      .status(404)
      .send("The task with the provided ID does not exist.");
  response.send(player);
});

module.exports = app.listen(3000);
console.log("3000 is the magic port");
