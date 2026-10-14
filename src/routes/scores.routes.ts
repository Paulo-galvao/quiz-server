import express from "express";
import { create, getAll } from "../controllers/scores.controller";

const scoresRouter = express.Router();

scoresRouter.get("/", getAll);
scoresRouter.post("/", create);

export default scoresRouter;