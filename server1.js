










// const axios = require('axios');
// const TeleBot = require('node-telegram-bot-api');

// // Replace with your actual Telegram Bot Token and Chat ID
// const telegram_chat_token = '7025543734:AAH-chmUhJazD4z2cY9Xv2TdIYIdOWDjgdQ';
// const telegram_chat_id = '-1002163417763'; // Ensure this is the correct chat ID

// const bot = new TeleBot(telegram_chat_token, { polling: true });

// async function getWikipedia() {
//     try {
//         // Fetching a summary of the "JavaScript" Wikipedia page
//         const wikiResponse = await axios.get('https://en.wikipedia.org/api/rest_v1/page/summary/JavaScript');
//         return wikiResponse.data;
//     } catch (error) {
//         console.error('Error fetching Wikipedia article:', error);
//         return null;
//     }
// }

// async function postToTelegram(article) {
//     // Constructing the message with Markdown formatting
//     const message = `*${article.title}*\n\n${article.extract}\n\n(${article.content_urls.desktop.page})`;

//     try {
//         // Sending the message to the Telegram chat
//         await bot.sendMessage(telegram_chat_id, message, { parse_mode: 'Markdown' });
//         console.log('Article posted to Telegram successfully.');
//     } catch (error) {
//         console.error('Error posting to Telegram:', error.response ? error.response.body : error.message);
//     }
// }

// async function main() {
//     const article = await getWikipedia();
//     if (article) {
//         await postToTelegram(article);
//     }
// }

// // Run the main function
// main();
