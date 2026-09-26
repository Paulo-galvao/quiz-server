import express from "express";
import { getAll, getOne } from "../controllers/options.controller"


const optionsRouter = express.Router();

optionsRouter.get("/", getAll);
optionsRouter.get("/:optionId", getOne);

export default optionsRouter;