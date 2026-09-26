import type { Request, Response } from "express";
import { getAllCategories, getOneCategory } from "../services/categories.service";
import { Category } from "../types/category";

async function getAll(
    req: Request, 
    res: Response<Category []| any>
) {
    try {
        const categories:Category[] = await getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getOne(
    req: Request<{categoryId: string}>, 
    res: Response
) {
    try {
        const {categoryId} = req.params;

        const category = await getOneCategory(+categoryId);
        res.status(200).json(category);

    } catch (error) {
        res.status(500).json(error);
    }
}

export {
    getAll,
    getOne,
};