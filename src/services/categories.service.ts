import { prisma } from "../lib/prisma";

async function getAllCategories() {
    const categories = await prisma.categories.findMany();
    return categories;
}

async function getOneCategory(categoryId:number) {
    const category = await prisma.categories.findUnique({
        where: { category_id: categoryId }
    });

    if(!category)
        return { message: "No category for this Id" };
        
    return category;
}

export {
    getAllCategories,
    getOneCategory
}