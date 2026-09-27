import express, { Request, Response } from "express";
import cors from "cors";

import { 
    quizRouter, 
    categoriesRouter, 
    optionsRouter, 
    questionsRouter
} from "./routes";

const PORT = 8000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Quiz Game!" });
});

/* Routes */

app.use("/categories", categoriesRouter);
app.use("/options", optionsRouter);
app.use("/quiz", quizRouter);
app.use("/questions", questionsRouter);

/* Not Found */

app.use((req: Request, res:Response<{message: string}>):void => {
    res.status(404).json({
        message: "404 Route not found"
    })
});

app.listen(PORT, ():void => {
    console.log("Server running in port", PORT);
});