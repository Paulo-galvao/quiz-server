import { prisma } from "../lib/prisma";


async function getAllQuiz() {
    const quiz = prisma.quiz.findMany();
    return quiz;
}

async function getOneQuiz(quizId: number) {
    const quiz = prisma.quiz.findUnique({
        where: { quiz_id: quizId }
    });

    if(!quiz) {
        return { message: "No quiz for this Id"};
    }
    
    return quiz;
}

export {
    getAllQuiz,
    getOneQuiz
};