import express from "express";
import { getAll, getOne } from "../controllers/questions.controller";

const questionsRouter = express.Router();

questionsRouter.get("/", getAll);
questionsRouter.get("/:questionId", getOne);

export default questionsRouter;