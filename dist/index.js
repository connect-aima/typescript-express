"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pets_js_1 = require("./data/pets.js");
const cors_1 = __importDefault(require("cors"));
const PORT = 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.json(pets_js_1.pets);
});
app.use((req, res) => {
    res.status(404).json({ message: "No route found" });
});
app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});
