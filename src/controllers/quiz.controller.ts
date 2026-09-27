import type { Request, Response } from "express"
import { getAllQuiz, getOneQuiz } from "../services/quiz.service";

async function getAll(req: Request, res: Response) {
    try {
        
        const quiz = await getAllQuiz();

        
        

        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getOne(req: Request<{quizId: string}>, res: Response) {
    try {
        
        const { quizId } = req.params;
        const quiz = await getOneQuiz(+quizId);

        console.log(quiz);
        
        res.status(200).json(quiz);

    } catch (error) {
        console.log(error);
        
        res.status(500).json(error);
    }
}

export {
    getAll,
    getOne
};