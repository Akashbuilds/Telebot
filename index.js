const { Telegraf } = require('telegraf');
const axios = require("axios");

const bot = new Telegraf('6634365256:AAHp4nImxLpgoo_pSIi3wSqJ2hY8g_n5Cg4');

let binarysearch = `function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}`;

bot.start((ctx) => {
    ctx.reply('Welcome to the new bot made by Akash')
});
bot.command('treejs', async function (ctx) {
    const response = await axios.get("https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js")
    console.log(response.data);
    return ctx.reply(response.data);
    });

bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch));
bot.on("sticker", (ctx) => {ctx.reply("♥")});
bot.command("Who made this", (ctx) => ctx.reply('Akash Goswami'));
// bot.on("emoji", (ctx) => {ctx.reply('🚀')});


bot.launch();
