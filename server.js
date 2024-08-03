const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual Telegram Bot Token and Chat ID
const telegram_chat_token = '7025543734:AAH-chmUhJazD4z2cY9Xv2TdIYIdOWDjgdQ';
const telegram_chat_id = '-1002163417763'; // Ensure this is the correct chat ID

const bot = new TelegramBot(telegram_chat_token, { polling: false });

async function getRandomWikipedia() {
    try {
        // Fetching a random Wikipedia article
        const wikiResponse = await axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary');
        return wikiResponse.data;
    } catch (error) {
        console.error('Error fetching Wikipedia article:', error);
        return null;
    }
}

async function postToTelegram(article) {
    // let message = `${article.title}\n\n${article.extract}\n\nRead more: ${article.content_urls.desktop.page}`;
    
    if (message.length > 4096) {
        message = message.substring(0, 4093) + '...';
    }
    
    try {
        await bot.sendMessage(telegram_chat_id, message);
        console.log('Article posted to Telegram successfully.');
    } catch (error) {
        console.error('Error posting to Telegram:', error.response ? error.response.body : error.message);
    }
}

async function main() {
    try {
        console.log('Telegram Chat ID:', telegram_chat_id);
        
        const article = await getRandomWikipedia();
        if (article) {
            await postToTelegram(article);
        } else {
            console.log('Failed to fetch Wikipedia article');
        }
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

// Run the main function
main().catch(error => console.error('Unhandled error:', error));