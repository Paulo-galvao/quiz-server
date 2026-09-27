import { prisma } from "../lib/prisma";

async function getAllQuestions() {
    try {
        const questions = prisma.questions.findMany();
        return questions;
    } catch (error) {
        return error;
    }
}

async function getOneQuestion(questionId: number) {
    try {
        const question = prisma.questions.findUnique({
        where: { question_id: questionId },
        include: { options: true },
    });

    if(!question) {
        return { message: "No question for this Id"};
    }

    return question;
    
    } catch (error) {
        return error;
    }
    
    
}

export {
    getAllQuestions,
    getOneQuestion
};