import express from "express";
import categoriesRouter from "./routes/categories.routes";

const PORT = 8000;
const app = express();

app.get("/", (req, res) => {
    res.json({message: "Config concluded"});
});

app.use("/categories", categoriesRouter);

app.listen(PORT, ():void => {
    console.log("Server running in port", PORT);
});