const TelegramBot = require('node-telegram-bot-api');
const request = require('request');
const token = '7025543734:AAH-chmUhJazD4z2cY9Xv2TdIYIdOWDjgdQ';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/movie (.+)/, function(msg, match) {
    var chatId = msg.chat.id;
    var movie = match[1];

    request(`https://www.omdbapi.com/?t=${movie}&apikey=50393264`, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            bot.sendMessage(chatId, `_Looking for_ `+ movie +`...`, {parse_mode: 'Markdown'})
            .then(function(msg) {
                var res = JSON.parse(body);
                if (res.Response === "True") {
                    bot.sendPhoto(chatId, res.Poster, {caption: `Result:\nTitle: ${res.Title}\nYear: ${res.Year}\nRated: ${res.Rated}\nReleased: ${res.Released}`});
                } else {
                    bot.sendMessage(chatId, `Movie not found!`);
                }
            });
        } else {
            bot.sendMessage(chatId, `Error: ${error}`);
        }
    });
});
