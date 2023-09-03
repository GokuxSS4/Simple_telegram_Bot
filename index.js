const { Telegraf } = require('telegraf')

const bot = new Telegraf("6015590344:AAHw2W_Uhb2ekJ2ZnZPrAK7EFvqFidQaTII")


bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command("goku",ctx => ctx.reply("I am the super saiyan son Goku!!"))
bot.launch()