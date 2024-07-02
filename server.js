import express from "express"
import bot from "./bot";
import { addTime } from "./methods/addTime";
import { register } from "./methods/register";
import { showStatus } from "./methods/showStatus";
import { showCommands } from "./methods/showCommands";

require('dotenv').config();

const app = express();

app.get("/", (req, res) => {
    res.send("Bot is alive");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

bot.onText(/\/إضافة_جلسة (.+)/, (msg, match) => addTime(msg, match));
bot.onText(/\/تسجيل_بالبوت/, (msg) => register(msg));
bot.onText(/\/عرض_إحصائياتي/, (msg) => showStatus(msg));
bot.onText(/\/عرض_الأوامر/, (msg) => showCommands(msg));

module.exports = app;
