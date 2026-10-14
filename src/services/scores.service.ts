import { prisma } from "../lib/prisma";

type Score = {
    quiz_id: number,
    hits: number,
    questions_number: number,
};

async function getAllScores() {

    const scores = await prisma.scores.findMany();

    return scores;

}

async function createScore(body: Score) {

    const { quiz_id, hits, questions_number } = body;

    if (!quiz_id) {
        throw new Error("quiz_id field is required");
    } else if (!hits) {
        throw new Error("hits field is required");
    } else if (!questions_number) {
        throw new Error("questions_number field is required");
    }


    const score = await prisma.scores.create({
        data: { ...body },
    });

    return score;

}

export {
    getAllScores,
    createScore
};