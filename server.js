const express = require("express");
const app = express();// our server 

const bodyParser = require("body-parser");
const db = require("./db");
// Handle post requests body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", function (req, res) {
   return  res.send("Welcome localhost:3000");
  });
  
app.get("/api/v1/employees", async (req, res) => {
 return res.send("default get Employee .....");
});

app.get("/api/v1/employees/view", async (req, res) => {
  try {
    const employees = await db.select("*").from("employee");
    //console.log(`result here`,employees);
    return res.status(200).send(employees);
} catch (err) {
    console.log("error message", err.message);
    return res.status(400).send("Could not get employees");
}
});

app.post("/api/v1/employees/new", async (req, res) => {
  try {
    const { firstname, middlename, lastname, country, salary, birthdate } =
      req.body;
    console.log(req.body);
    let newEmployee = {
      firstname,
      lastname,
      country,
      salary,
      birthdate,
    };
    const addedEmployee = await db("employee").insert(newEmployee).returning("*");
    console.log(addedEmployee);
    return res.status(201).json(addedEmployee);
} catch (err) {
    console.log("eror message", err.message);
    return res.status(400).send(err.message);
}
});

app.get("/api/v1/employees/:employeeId", async (req, res) => {
  try {
    const { employeeId } = req.params;
    console.log(req.params);
    const employee = await db.select("*").from("employee").where("id", employeeId);
    console.log(req.params.employeeId);
    return res.status(200).json(employee);
  } catch (err) {
    console.log("eror message", err.message);
   return  res.status(404).send("failed to get this employee id");
  }
});

app.delete("/api/v1/employees/:employeeId", async (req, res) => {
  try {
    const { employeeId } = req.params;
    const deletedEmployee = await db("employee").where("id", employeeId).del().returning("*");
    console.log("dleted",deletedEmployee);
    return res.status(200).json(deletedEmployee);
} catch (err) {
    console.log("eror message", err.message);
    return res.status(400).send("failed to delete employee");

  }
});

app.put("/api/v1/employees/:employeeId", async (req, res) => {
  try {
    const { country, birthdate, salary } = req.body;
    const { employeeId } = req.params;
    const updatedEmployee = await db("employee")
      .where("id", employeeId)
      .update({
        country: country,
        salary: salary,
        birthdate: birthdate,
      })
      .returning("*");
      return res.status(200).json(updatedEmployee);
  } catch (err) {
    console.log("eror message", err.message);
    return res.status(400).send("Could not update employee");
}
});
app.listen(3000, () => {
  console.log("Server is now listening at port 3000 on http://localhost:3000/");
});

