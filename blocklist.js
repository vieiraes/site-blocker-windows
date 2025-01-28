const fs = require('fs').promises
const path = require('path')
const fsSync = require('fs')

async function modificarHostsFile(conteudo) {
  const hostsPath = 'C:\\Windows\\System32\\drivers\\etc\\hosts'
  
  try {
    await fs.writeFile(hostsPath, conteudo, {
      flag: 'w',
      mode: 0o666
    })
  } catch (error) {
    throw new Error(`Não foi possível modificar o arquivo hosts: ${error.message}`)
  }
}

module.exports = {
    sites: `
# Redes Sociais
127.0.0.1 facebook.com
127.0.0.1 www.facebook.com
127.0.0.1 login.facebook.com
127.0.0.1 m.facebook.com
127.0.0.1 instagram.com
127.0.0.1 www.instagram.com
127.0.0.1 twitter.com
127.0.0.1 www.twitter.com
127.0.0.1 mobile.twitter.com
127.0.0.1 tiktok.com
127.0.0.1 www.tiktok.com
127.0.0.1 snapchat.com
127.0.0.1 www.snapchat.com
127.0.0.1 pinterest.com
127.0.0.1 www.pinterest.com
127.0.0.1 linkedin.com
127.0.0.1 www.linkedin.com
127.0.0.1 reddit.com
127.0.0.1 www.reddit.com
127.0.0.1 tumblr.com
127.0.0.1 www.tumblr.com
127.0.0.1 whatsapp.com
127.0.0.1 web.whatsapp.com
127.0.0.1 messenger.com
127.0.0.1 www.messenger.com

# Subdomínios do Facebook
127.0.0.1 connect.facebook.net
127.0.0.1 static.xx.fbcdn.net
127.0.0.1 fbcdn.net
127.0.0.1 cdn.fbsbx.com

# Subdomínios do Instagram
127.0.0.1 cdninstagram.com
127.0.0.1 scontent.cdninstagram.com
127.0.0.1 instagram.fgru1.com

# Subdomínios do Twitter
127.0.0.1 pbs.twimg.com
127.0.0.1 abs.twimg.com
127.0.0.1 t.co

# YouTube e sites relacionados
127.0.0.1 youtube.com
127.0.0.1 www.youtube.com
127.0.0.1 m.youtube.com
127.0.0.1 youtu.be
127.0.0.1 youtube-nocookie.com
127.0.0.1 youtubei.googleapis.com
127.0.0.1 ytimg.com
127.0.0.1 i.ytimg.com
127.0.0.1 yt3.ggpht.com
127.0.0.1 googlevideo.com
127.0.0.1 upload.youtube.com
127.0.0.1 studio.youtube.com

# Outros sites de vídeo
127.0.0.1 vimeo.com
127.0.0.1 www.vimeo.com
127.0.0.1 player.vimeo.com
127.0.0.1 dailymotion.com
127.0.0.1 www.dailymotion.com
127.0.0.1 twitch.tv
127.0.0.1 www.twitch.tv
127.0.0.1 player.twitch.tv
127.0.0.1 clips.twitch.tv
127.0.0.1 twitchcdn.net
127.0.0.1 jtvnw.net
127.0.0.1 netflix.com
127.0.0.1 www.netflix.com
127.0.0.1 primevideo.com
127.0.0.1 www.primevideo.com
127.0.0.1 hulu.com
127.0.0.1 www.hulu.com
127.0.0.1 disneyplus.com
127.0.0.1 www.disneyplus.com
127.0.0.1 hbomax.com
127.0.0.1 www.hbomax.com
127.0.0.1 metacafe.com
127.0.0.1 www.metacafe.com
127.0.0.1 vevo.com
127.0.0.1 www.vevo.com`,
    modificarHostsFile
};
