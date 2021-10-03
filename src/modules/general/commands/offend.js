const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('offend', {
      aliases: ['insult'],
      info: 'insults you',
      usage: 'offend',
      guildOnly: false,
    });
  }


 async run(message) {
  const messages = ["I’m gonna play jump rope with your prolapsed ass hole",
                    "Does your mother charge you rent to live in her basement ", 
                    "Are you gonna cry or even piss yourself ", 
                    "Im gonna roll your fucking grandmas ashes into a blunt and make you smoke it",
                    "Oh good your back from shoveling Doritos down your greasy ass hole ",
                    "Your so stiff you must have a corncob up your ass",
                    "Shut the fuck up you probably like Brazilian fart porn",
                    "fucking kill yourself you overweight troglodyte mother fucker",
                    "ay yo cave dweller why don't you crawl back into the grotto of a pussy I left your mother with",
                    "your birthplace was the dumpster behind the fucking wendys",
                    "I'm going to put a cactus so far up your ass you'll have more pricks in your mouth than you do during pride month",
                    "your mother didnt waste 9 months for a fuck up to come out",
                    "crying will not unrape you",
                    "crying will not unrape you",
                    "crying will not unrape you",
                    "you cant unshit your grandmas ashes", 
                    "you cant unshit your grandmas ashes",
                    "if you keep acting up imma eat that shitter like an apple fritter",
                    "kitten smittin, bitch only pussy i see is that pussy you gonna be spreading for me",
                    "head shoulders knees and toes you got no hoes",
                    "damn your slow like how i did your mom last night",
                    "my birth certificate says your a bitch",
                    "we call your mom the slide in hotel",
                    "you smell like poop",
                    "god made you, more like retarded bob ross made you because you ugly as fuck",
                    "your mom calls my dick the puff bar and shes addicted",
                    "you mother look like a grown up version of the little girl from the oblongs show",
                    "you look the chipotle bathroom",
                    "you look like a before picture",
                    "you look like a fucked up abortion",
                    "the best part of you ran down your mothers legs",
                    "you look like 480p",
                    "your family tree is a wreath",
                    "this is why everyone talk about you as soon as you leave the room",
                    "your gene pool could use a little chlorine",
                    "i may love to shop but im not buying you bullshit",
                    "is your name dick-cheese-mcgee",
                    "you have a tik tac",
                    "keep rollin your eyes and you might find a brain back there",
                    "dumb dumn ass ass",
                    "your occupation is ass eating"
                   ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

		return message.channel.send(randomMessage);
		}
	};


