"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openai_1 = require("openai");
const cors_1 = __importDefault(require("cors"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const API_KEY = "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";
const configuration = new openai_1.Configuration({
    apiKey: API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
openai
    .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello ChatGPT" }],
})
    .then((res) => {
    console.log(res);
});
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS + TS!!!!");
});
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
