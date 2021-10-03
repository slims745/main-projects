const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('sugsong', {
      aliases: ['suggestsong'],
      info: 'suggest a song',
      usage: 'suggestsong',
      guildOnly: false,
    });
  }



async run(message) {
  const messages = ["https://youtu.be/nROvY9uiYYk 👌",
                    "https://youtu.be/Dm2O_W6Rrss  ❤️",
		                "https://youtu.be/MwxgUVrj5m4 👌",
		                "https://youtu.be/HW3WuHmu3sc 👌",
                    "https://youtu.be/zJtGnnhYZOo 🤑",
                    "https://youtu.be/QHVREB6fdvI ❤️",
                    "https://youtu.be/CHbWWphAdPk 🤑",
                    "https://youtu.be/ZUuNiq2HATI cool 😎",
                    "https://youtu.be/JONnui9QvjU lets go",
                    "https://youtu.be/fhBA6ynorvc hella banger 🥰",
                    "https://youtu.be/FtutLA63Cp8 😤✊",
                    "https://youtu.be/UquPv9WpuB4 😤✊",
                    "https://youtu.be/-2h09PU9L8w lets go 😎",
                    "https://youtu.be/cQKGUgOfD8U hella good song 😎",
                    "https://youtu.be/lhjk5x54bsE what even 🥰",
                    "https://youtu.be/MWNLxfZ0IwE 👌",
                    "https://youtu.be/DBXTRtm07RA good song 🥰",
                    "https://youtu.be/IHoj7qvNmwk 😤✊",
                    "https://youtu.be/oykg2y1KHGg another banger 🥰",
                    "https://youtu.be/qqZcuEoqJbU 👌",
                    "https://youtu.be/sWbD5q769Ms good song 🥰",
                    "https://youtu.be/ZCut2rFo1bk awsome 😎",
                    "https://youtu.be/I_rXSDxGXBw absoulte banger 🤯",
                    "https://youtu.be/nDiZD8mhaYw really good for working ✏️",
                    "https://youtu.be/yHgrIcbnZbI banger 🤯",
                    "https://youtu.be/vJyR2QpHGvc just good in general 👌",
                    "https://youtu.be/lX44CAz-JhU good for working ✏️",
                    "https://youtu.be/4nyHPIcbn88 really good song 😍",
                    "https://youtu.be/kFZKgf5WG0g banger 😎",
                    "https://youtu.be/Atvsg_zogxo banger 😍",
                    "https://youtu.be/WRCA_Fo0rWA straight banger 😍",
                    "https://youtu.be/2SUwOgmvzK4 one at a time ladys 😎",
                    "https://youtu.be/rnO-MflYxCw not a good idea 🥵",
                    "https://youtu.be/djV11Xbc914 more like take this cock lmao 😎",
                    "https://youtu.be/1k8craCGpgs always belive 🥵",
                    "https://youtu.be/dQw4w9WgXcQ get nae naed 🥵",
                    "https://youtu.be/XfR9iY5y94s vegimite sandwitch 🥪",
                    "https://youtu.be/YgSPaXgAdzE can't be me 🥶",
                    "https://youtu.be/aDaOgu2CQtI how about don't 🥶",
                    "https://youtu.be/Abrn8aVQ76Q i dont have one 🥶",
                    "https://youtu.be/HZik4fKw3G0 two time clap clap stay friends 🥳",
                    "https://youtu.be/8pm_KoguqPM normally i would make a joke but this is just a good song 🍆",
                    "https://youtu.be/eYDI8b5Nn5s fuck tic tok 🤬",
                    "https://youtu.be/Onx7NL_a8_I another good song",
                    "https://youtu.be/rLHqnOq4wEQ potsu is cool 🍑",
                    "https://youtu.be/6okxuiiHx2w need i say more 🍑",
                    "https://youtu.be/NxxjLD2pmlk fucking base 👌",
                    "https://youtu.be/GmJckIarmPg straight base 🥳"
          	      
                   ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

		return message.channel.send(randomMessage);
    }
}