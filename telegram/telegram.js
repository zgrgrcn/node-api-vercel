const TelegramBot = require('node-telegram-bot-api');//https://github.com/yagop/node-telegram-bot-api

const token = process.env.TELEGRAM_TOKEN || '6562840893:AAGhfD_CcowCFMYx5H7SeCNetW_vjNlUaKE';
const bot = new TelegramBot(token, { polling: true });

const goToBinance = (symbol) => [{
    text: 'Go To Graph at Binance', url: `https://www.binance.com/en/trade/${symbol}?type=spot`
}];
const goToTradingview = (symbol) => [{
    text: 'Go To Graph at Tradingview', url: `https://www.tradingview.com/chart/?symbol=BINANCE:${symbol}`
}];

const telegramSender = (ticker = 'ETHUSDT', message = 'no message provided') => {
    const option = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                goToBinance(ticker),
                goToTradingview(ticker)
            ]
        })
    };
    console.log("Telegram message: " + message)
    bot.sendMessage(process.env.TELEGRAM_GROUP_ID, message, option)
        // .then(response => console.log(response))
        .catch(error => console.log(error))
}
module.exports = { bot, telegramSender };