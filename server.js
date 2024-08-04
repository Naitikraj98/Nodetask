const TeleBot = require('node-telegram-bot-api');
const Token = '7025543734:AAH-chmUhJazD4z2cY9Xv2TdIYIdOWDjgdQ';
const bot = new TeleBot(Token, {polling: true});

var request = require('request');

bot.onText(/\/movie (.+)/,function(msg, match) {
    var chatId = msg.chat.id;
    var movie = match[1];

    request(`https://www.omdbapi.com/?s=movie%20title&apikey=50393264`, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            bot.sendMessage(chatId, `_Looking for_ `+ movie +`...`, {parse_mode: 'Markdown'})
            .then(function(msg) {
                var res = JSON.parse(body);
               bot.sendPhoto(chatId, res.Poster,{caption:'Result:\nTitle: '+res.Title+ '\nYear:'+res.Year +'\nRated:'+res.Rated+ '\nReleased:'+res.Released})
            })
        } 
    });
});

