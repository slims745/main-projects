const { stripIndents } = require('common-tags');

const { Command } = require('../../../handler');

module.exports = class extends Command {
  constructor() {
    super('lewds', {
      aliases: ['lewd','lewdsg'],
      info: 'NSFW - general hentai',
      usage: 'lewds',
      guildOnly: false,
    });
  }

  async run(message) {
  const messages = ["https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__atago_and_takao_azur_lane_drawn_by_hikagen_yoshio__sample-16373d3a6deb425923cebb5e265e12de.jpg?v=1605900952278",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__atago_and_atago_azur_lane_drawn_by_ushimittsu__sample-9e1d0d0d99099f9843fd3e224296fe02.jpg?v=1605900957541",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fdownload%20(1).jpg?v=1605900978943",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fdownload%20(2).jpg?v=1605900978944",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__beidou_genshin_impact_drawn_by_2ndeminence__sample-38d524a208a8f536f13622dd4baa0970.jpg?v=1605900979198",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Ftumbler_is_gay.png?v=1605900980224",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__fischl_and_hilichurl_genshin_impact_drawn_by_tonchinkan__sample-43faffda2a9ad1f9f4ccf50c1338f387.jpg?v=1605900980505",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__fischl_genshin_impact_drawn_by_bae_c__sample-f550254156b84270a164e4048d69986c.jpg?v=1605900981065",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__jean_gunnhildr_genshin_impact_drawn_by_gimnang__sample-7f877fb09bcda99a8ac008dd67886d8d.jpg?v=1605900981465",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__modeus_helltaker_drawn_by_ett__sample-b43dbd2b4c803b35278f6e3e43ab202b.jpg?v=1605900981952",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__noelle_genshin_impact_drawn_by_nyromide__sample-89a7feeca9c13ec511910b9b1fb66eb7.jpg?v=1605900982825",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__ooishi_izumi_idolmaster_and_1_more_drawn_by_sutora_binsuke__sample-062b9591a6f7b63f1b544caa88ad15f0.jpg?v=1605900983394",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__original_drawn_by_circle_hitori__sample-7a2293aec3f88fdf2629c6be8db65f15.jpg?v=1605900984106",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__original_drawn_by_haiba_09__sample-aa58890baaccfd97c591dd02d5876cd0.jpg?v=1605900985754",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__original_drawn_by_koh_minagi_kou__sample-94e2f092fa57625fb2ae3f8cbd8a3c66.jpg?v=1605900986136",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__original_drawn_by_sora_72_iro__sample-fcdefd5e0aa622763253e77067df6c9c.jpg?v=1605900986756",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__prinz_eugen_azur_lane_drawn_by_dakkalot__9fa65f0dd7dcf2bf609b0e2f4fb77094.jpg?v=1605900990955",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__original_drawn_by_suinose__sample-dfdf83ad6f1f906e84d13089b3604ce3.jpg?v=1605900990491",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__prinz_eugen_azur_lane_drawn_by_mochirong__sample-48a99f58847bc80e5beedc56e2631b9b.jpg?v=1605900991618",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__tamaki_kotatsu_en_en_no_shouboutai_drawn_by_trg_sain__sample-5eba9ce1f8813826196a9cb95c98a511.jpg?v=1605900992755",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__tohsaka_rin_fate_and_1_more_drawn_by_kyokucho__sample-1d51dffbaf0ac8af7148e7d01ce4cdf1.jpg?v=1605900994076",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__tohsaka_rin_fate_and_1_more_drawn_by_murakami_meishi__0cd8f75a1d2eb4f5a3bba28b870b086e.jpg?v=1605900994487",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F75615da.png?v=1605901018003",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fpoosie%20pi.PNG?v=1605901018003",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fpoosie%20pi.PNG?v=1605901018003",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FCapture.PNG?v=1605901854981",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2020-11-06-13-52-02.png?v=1605901859914",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__magallan_arknights_drawn_by_sigm__sample-531fb127d40c2dacf49e37320ca090f8.jpg?v=1605902746859",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F__scathach_and_scathach_fate_and_1_more_drawn_by_chacharan__sample-ef77fa5643323458c812cb3829b3f49b.jpg?v=1605902747745",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F6a2a1437-29ac-4581-a364-80d3ce67f456.image.png?v=1608947485601",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F31d44dd1-c998-454e-b702-5699c89e123c.image.png?v=1608947499513",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fa2d6fc08-36ca-49a5-bb94-bd363eb9de4d.image.png?v=1608947508307",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2F9c1d576b-5504-456a-acc5-3a0f786d2567.image.png?v=1608947513154",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2Fbb8d3418-f01b-49f1-83ce-19f94f8b2452.image.png?v=1608947524468",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-15-50-29.png?v=1613890709091",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-16-01-53.png?v=1613890709208",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-16-12-12.png?v=1613890709388",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-15-58-28.png?v=1613890709423",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-15-59-07.png?v=1613890709656",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-16-16-28.png?v=1613890709811",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-16-01-14.png?v=1613890709974",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-16-10-33.png?v=1613890710204",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-16-08-54.png?v=1613890710395",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-15-57-53.png?v=1613890710527",
                    "https://cdn.glitch.com/2db785e5-f2b6-4b94-9ec0-cc9600f761ac%2FScreenshots_2021-02-09-16-06-57.png?v=1613890710892"

                    
                   ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

		return message.channel.send(randomMessage);
    }
}