import express from "express";
import employeeRoutes from "./api/employees.js"

// TODO: this file!
const app = express();
app.use(express.json());

app.route("/").get((req, res) => {
    res.send("Welcome to the Fullstack Employees API.")
})

app.use("/employees", employeeRoutes)

export default app;