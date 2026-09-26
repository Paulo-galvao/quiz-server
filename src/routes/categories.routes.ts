import express from "express";
import { getAll, getOne } from "../controllers/categories.controller"


const categoriesRouter = express.Router();

categoriesRouter.get("/", getAll);
categoriesRouter.get("/:categoryId", getOne);

export default categoriesRouter;