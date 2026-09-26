import { prisma } from "../lib/prisma";

async function getAllOptions() {
    const options = await prisma.options.findMany();
    return options;
}

async function getOneOption(optionId:number) {
    const option = await prisma.options.findUnique({
        where: { option_id: optionId }
    });

    if(!option)
        return { message: "No option for this Id" };
        
    return option;
}

export {
    getAllOptions,
    getOneOption
}