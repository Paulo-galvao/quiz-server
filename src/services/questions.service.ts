import { prisma } from "../lib/prisma";

async function getAllQuestions() {
    const questions = prisma.questions.findMany();
    return questions;
}

async function getOneQuestion(questionId: number) {
    const question = prisma.questions.findUnique({
        where: { question_id: questionId },
        include: { options: true }
    });

    if(!question) {
        return { message: "No question for this Id"};
    }
    
    return question;
}

export {
    getAllQuestions,
    getOneQuestion
};