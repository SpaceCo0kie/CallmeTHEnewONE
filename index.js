const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping'){
    //    message.reply('NEIN! DEINE MAMA! ICH... AHHRRGHH... *pong* :sob: ');
        message.channel.sendMessage('i wont play with you this fucking game :smiling_imp: ')
    }
});

bot.login('MzU3MzMyNDk4MDIxMDg5Mjgw.DY2EPg.ki3sLYFxL2DfgzIcnpVoa26kPyo');
