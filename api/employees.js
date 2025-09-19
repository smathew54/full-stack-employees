import express from "express";
import { getEmployees, getEmployee, updateEmployee, deleteEmployee, createEmployee} from "../db/queries/employees.js";

// TODO: this file!
const router = express.Router();

    router
    .route("/").get(async (req, res) => {
        try {
            const response = await getEmployees();
            if (!response) {
                res.status(400).send(message)
            }
            return res.status(200).send(response);
        }
        catch (error) {
            return res.status(400).send(error);
        }
    })
    .post(async (req, res) => {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send("no body");
        }
        const {name, birthday, salary} = req.body;
        if (!name || !birthday || !salary) {
            return res.status(400).send("no fields");
        }
        try{
            const response = await createEmployee({name, birthday, salary});
            return res.status(201).send(response);
        }
        catch (error) {
            return res.status(400).send(error);
        }
    }
    )


    router
    .route("/:id").get(async (req, res) => {
        console.log("I'm in the get")
        console.log(req.params)
        const { id } = req.params;
        if (!id) {
            return res.status(400).send(error)
        }
        if (!/^\d+$/.test(id) || Number(id) < 0){
            return res.status(400).send(error)
        } 
        try {
            const response = await getEmployee({ id });
            if (!response) {
                return res.status(404).send("Employee not found");
            }
            res.status(200).send(response)
        }
        catch (error) {
            res.status(400).send(error)
        }
    })
    .put(async (req, res) => {
        
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send(error);
        }
        const { name, birthday, salary } = req.body;
        if (!name || !birthday || !salary) {
            return res.status(400).send("Missing required fields");
        }
        const { id } = req.params
        if (!/^\d+$/.test(id) || Number(id) < 0) {
            return res.status(400).send("not positive integer");
        } 
        try{
            const response = await updateEmployee({ id, name, birthday, salary });
            console.log(response)
            if (!response) {
                return res.status(404).send("Employee not found");
            }
            res.status(200).send(response)
        }
        catch (error) {
            res.status(400).send(error)
        }
    }
    )
    .delete(async (req, res) => {
        const { id } = req.params;
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send(error)
        }
        if (!/^\d+$/.test(id) || Number(id) < 0){
            return res.status(400).send(error)
        } 
        try {
            const response = await deleteEmployee(id);
            if (!response) {
                return res.status(404).send("Employee not found");
            }
            res.status(204).send(response)
        }
        catch (error) {
            res.status(400).send(error)
        }
    })   


export default router;