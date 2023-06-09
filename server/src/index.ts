import express, { Express, Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import cors from "cors";
const port = 8000;

const app: Express = express();
app.use(express.json());
app.use(cors());
const API_KEY = "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";

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello ChatGPT" }],
  })
  .then((res) => {
    console.log(res);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
