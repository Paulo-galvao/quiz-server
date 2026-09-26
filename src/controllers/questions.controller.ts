import type { Request, Response } from "express"
import { getAllQuestions, getOneQuestion } from "../services/questions.service";

async function getAll(req: Request, res: Response) {
    try {
        
        const question = await getAllQuestions();

        res.status(200).json(question);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getOne(req: Request<{questionId: string}>, res: Response) {
    try {
        
        const { questionId } = req.params;
        const question = await getOneQuestion(+questionId); 
        
        res.status(200).json(question);

    } catch (error) {
        res.status(500).json(error);
    }
}

export {
    getAll,
    getOne
};