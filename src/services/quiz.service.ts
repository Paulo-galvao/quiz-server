import { prisma } from "../lib/prisma";

async function getAllQuiz() {
    const quiz = prisma.quiz.findMany({
        include: { 
            category: { 
                omit: { 
                    category_id: true 
                }} 
        }
    });
    return quiz;
}

async function getOneQuiz(quizId: number) {

    const quiz = await prisma.quiz.findUnique({
        where: {    
            quiz_id: quizId,  
        },
        omit: {
            category_id: true
        },
        include: { 
            category: {
                select: { name: true }
            },
            questions: {
                include: {
                    options: true
                },
                omit: { 
                    quiz_id: true 
                },
            }, 

                
        },
    });   

    console.log(quiz);

    if(!quiz) {
        return { message: "No quiz for this Id"};
    }
    
    return {quiz};
}

export {
    getAllQuiz,
    getOneQuiz
};