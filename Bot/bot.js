const { Telegraf } = require('telegraf');
const TOKEN = '7094232443:AAHrvtat6xF9deC14s9FXJ1LFlsLILHaLVk';
const bot = new Telegraf(TOKEN);

const web_link = 'https://precious-kataifi-33be84.netlify.app/';

bot.start((ctx) =>
  ctx.reply('Welcome to Alstore subzero', {
    reply_markup: {
      keyboard: [[{ text: 'web app', web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
