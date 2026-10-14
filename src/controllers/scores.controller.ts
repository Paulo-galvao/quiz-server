import type { Request, Response } from "express";
import { createScore, getAllScores } from "../services/scores.service";

async function getAll(req: Request, res: Response) {
    try {
        const scores = await getAllScores();

        res.status(200).json(scores);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function create(req: Request<{},{},{quiz_id:number, hits:number, questions_number:number}>, res: Response) {
    try {           
        const score = await createScore(req.body);

        res.status(201).json(score);
        
    } catch (error) {
        if(error instanceof Error) {
            res.status(400).json(error.message);
        } else {
            res.status(500).json(error);
        }
    } 
}

export {
    getAll,
    create
}