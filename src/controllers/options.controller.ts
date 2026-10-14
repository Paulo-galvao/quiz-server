import type { Request, Response } from "express";
import { getAllOptions, getOneOption } from "../services/options.service";


async function getAll(
    req: Request, 
    res: Response
) {
    try {
        const options = await getAllOptions();
        res.status(200).json(options)
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getOne(
    req: Request<{optionId: string}>, 
    res: Response
) {
    try {
        const {optionId} = req.params;

        const option = await getOneOption(+optionId);
        res.status(200).json(option);

    } catch (error) {
        res.status(500).json(error);
    }
}

export {
    getAll,
    getOne,
};