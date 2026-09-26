import express from "express";
import { getAll, getOne } from "../controllers/quiz.controller";

const quizRouter = express.Router();

quizRouter.get("/", getAll);
quizRouter.get("/:quizId", getOne);

export default quizRouter;