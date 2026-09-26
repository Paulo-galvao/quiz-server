import express from "express";
import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const categoriesRouter = express.Router();

categoriesRouter.get("/", async(
    req: Request, 
    res: Response
) => {
    
    const categories = await prisma.categories.findMany();

    try {
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default categoriesRouter;