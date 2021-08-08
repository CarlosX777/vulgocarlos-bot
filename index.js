    const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, ChatModification, waChatKey, WA_DEFAULT_EPHEMERAL, mentionedJid, processTime

//MODULOS NPM
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { modapk } = require('./src/modapk')
const { pack } = require('./src/pack')
const { outros } = require('./src/outros')
const { destrava } = require('./src/destrava')
const { destrava2 } = require('./src/destrava')
const { gbin } = require('./src/gbin')
const { gpessoa } = require('./src/gpessoa')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');
const { tiktokmenu } = require('./src/tiktokmenu')
const { playlist } = require('./src/playlist')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { addfoto } = require('./src/addfoto')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const { cekvip } = require('./src/cekvip')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { vipbot } = require('./src/vipbot')
const { iklan } = require('./src/iklan')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const apivhtear = 'apivhtear';
const gbl1ph = 'gbl1ph';
const xteam= 'apixteam';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = 'Loser Bot'; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:CarlosX\n' // Nama kamu
            + 'ORG:OwnerBot;\n' // Nama bot
            + 'TEL;type=CELL;type=VOICE;waid=558499034946:+55 8499034946\n' //Nomor whatsapp kamu
            + 'END:VCARD'
prefix = '!'
blocked = []
limitawal = '999999999'
cr = '*LOSER*'

/*********** CARREGAR ARQUIVO ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'));
const antishit = JSON.parse(fs.readFileSync('./database/json/antishit.json'))
const sotoy = JSON.parse(fs.readFileSync('./database/sotoy.json'))
const xingarbot = JSON.parse(fs.readFileSync('./database/json/xingarbot.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
/*********** END LOAD ***********/

	
/********** FUNÇÕES ***************/


const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Quase la...')
	})
	client.on('open', () => {
		success('2', 'Conectado ao LoserBOT')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá @${num.split('@')[0]}\nBem vindo ao grupo *${mdata.subject}*\n\nEspero que goste do grupo ❤️`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchau @${num.split('@')[0]} Ja foi tarde 😂👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').locale('pt_BR').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			
			mess = {
				    aguarde: '*⏳ Estou fazendo aguarde, caso se não foi tente novamente!*',
				    nsfw: '*Ative o modo nsfw, para ativar use: .modonsfw on* *',
					wait: '*⏳ Aguarde Um Pouco, Estou Fazendo!*',
					dado: '*🎲Jogandos os dados🎲*',
					ficha: '*Puxando A Ficha...*',
					success: '️* ✔  Sucesso*',
					levelon: '❬ ✔ ❭ *leveling* *ativado*',
					leveloff: ' ❬ X ❭  *leveling* *desativado*',
					levelnoton: '❬ X ❭ *leveling não ativado*',
					levelnol: '*error* 0 °-°',
					error: {
				stick: '*⚠️ OCORREU UM ERRO NO BOT\nSE OCORRER NOVAMENTE CHAME OS PROPRIETÁRIOS DO BOT DIGITE ${prefix}bug*',
				Iv: '⚠️ ESTE LINK É INVÁLIDO, TENTE OUTRO LINK!'
				},
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
					mod: '[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD LOSER BOT*',
					benned: 'Você para a banda, por favor, contate o proprietário para abrir sua banda',
					ownerG: '[❗] Este é um recurso especial para o Loser ❌',
					ownerB: '[❗] Este é um recurso especial para o Loser ❌',
					userB: `──「 LISTA 」──\nOlá Kak !\nDesculpe, irmã. Você não está registrado como amigo de LOSER. Registre-se para fazer amizade com o bot Loser por meio, \n\nCommand : ${prefix}vipbot nama|idade\nExemplo : ${prefix}vipbot Loserzin|17\n\n──「 LOSER BOT 」──`,
					admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
					Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["558499034946@s.whatsapp.net","55318854-2535@s.whatsapp.net"] // replace this with your number
			const mod = [ownerNumber,"558499034946@s.whatsapp.net","557588265283@s.whatsapp.net"]//ubah nomor lo
			const adminbotnumber = ["558499034946@s.whatsapp.net","557588265283@s.whatsapp.net"]//ubah nomor lo
			const frendsowner = ["558499034946@s.whatsapp.net"]//ubah nomor lo
			const premium = ["558499034946@s.whatsapp.net","557588265283@s.whatsapp.net","553188542535@s.whatsapp.net","557588313083@s.whatsapp.net","12192479196@s.whatsapp.net"] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiShit = isGroup ? antishit.includes(from) : true
            const isXingarBot = isGroup ? xingarbot.includes(from) : true
	    	const isAnime = isGroup ? anime.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
		    const isBanned = ban.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
		    const isfrendsowner = frendsowner.includes(sender)
		    const arqs = body.trim().split(' ')
		   pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
              //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }


if (text.includes("placa"))
  { const aris = text.replace(/!placa /, "") 
  axios.get(`https://apicarros.com/v1/consulta/${aris}/json`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *ANO:*  ${res.data.ano}\n ➸ *ANO MODELO* : ${res.data.anoModelo}\n ➸ *CHASSI* : ${res.data.chassi}\n ➸ *CODIGO RETORNO* : ${res.data.codigoRetorno}\n ➸ *CODIGO SITUACAO* : ${res.data.codigoSituacao}\n ➸ *COR* : ${res.data.cor}\n ➸ *MARCA* : ${res.data.marca}\n ➸ *MUNICIPIO* : ${res.data.municipio}\n ➸ *SITUACAO* : ${res.data.situacao}\n ➸ *UF* : ${res.data.uf}\n *📌BY:May Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }		        

		        if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado você sera expulso ${sender.split("@")[0]}`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
	}

	
	        if (messagesC.includes("youtu.be")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado você sera expulso ${sender.split("@")[0]}`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
	}

	        if (messagesC.includes("/(https:\/\/chat.whatsapp.com)/gi")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
	}
	
	//_VISUALIZA AS MENSAGENS 
client.chatRead(from)
//F
     
	        if (messagesC.includes("sexo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Sexo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
	//CARREGAR IMAGENS E MENSAGEM DO TERMUX
	colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			    // Mensagens no PV
        if (!isCmd && !isGroup) { return console.log('> MENSAGEM AS', color(moment.tz('America/Sao_Paulo').locale('pt_BR').format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${sender.split('@c.us', '')}]"`)) }
		
		// Mensagem em Grupo
        if (!isCmd && isGroup) { return console.log('> MENSAGEM AS', color(moment.tz('America/Sao_Paulo').locale('pt_BR').format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${sender.split('@c.us', '')}]"`), 'EM', color(groupName)) }
		
		// Comandos no PV
		if (isCmd && !isGroup) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(moment.tz('America/Sao_Paulo').locale('pt_BR').format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${sender.split('@c.us', '')}]"`)) }
		
		// Comandos em grupo
        if (isCmd && isGroup) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(moment.tz('America/Sao_Paulo').locale('pt_BR').format('DD/MM/YY HH:mm:ss'), 'yellow'), 'DE', color(`"${pushname} - [${sender.split('@c.us', '')}]"`), 'EM', color(groupName)) }
			switch(command) {
				
	
				   case 'help':
                   case 'menu':
                    client.sendMessage(from, help(prefix, pushname, time) , text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "𝐋𝐎𝐒𝐄𝐑 𝐁𝐎𝐓\n", 'jpegThumbnail': fs.readFileSync('bot/sticker/botlogo.webp')}}}})					
                    break

                   case 'playlist':
                    putagg = await getBuffer(`https://i.pinimg.com/originals/a8/ef/f8/a8eff8c7de2f06ce7933f6e2ccb11d7f.jpg`)
                    client.sendMessage(from, putagg, image, {quoted: mek, caption: playlist(prefix)})
                    break

					case 'kiss':
try {
res = axios.get(`https://nekos.life/api/v2/img/kiss`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break


case 'addxp':
if (!isGroup) 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp(pru, Number(args[1]))                     
break

case 'cpf1':
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
client.sendMessage(from, `CPF gerado: ${cpf}`, text, {quoted: mek})
break

case 'leaderboard':
					case 'lb':
						if (!isGroup) return reply(mess.only.group)
						_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
						mentioned_id = []
						let leaderboard = '-----[ LEADERBOARD ]----\n\n'
						try {
					     for (let i = 0; i < 3; i++) {
								if (i == 0) {
									leaderboard += `${i + 1}º 🥇 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 1) {
									leaderboard += `${i + 1}º 🥈 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 2) {
									leaderboard += `${i + 1}º 🥉 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								}
								mentioned_id.push(_level[i].jid)     
							}
							mentions(leaderboard, mentioned_id, true)
						} catch (err) {
							console.log(err)
							client.sendMessage(from, `É necessário que no mínimo 3 pessoas tenham level...`, text, {quoted: mek})
						}
					break

//SEPARAR

				case 'ramaljadian':
				
					var gh7 = body.slice(10)
					var gbl16 = gh7.split("|")[0];
					var gbl26 = gh7.split("|")[1];
					var gbl36 = gh7.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl16}&bln=${gbl26}&thn=${gbl36}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					reply(anu.result.hasil)
					break

//GERADORES 

                   case 'modapk':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
                   case 'gbin':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gbin(prefix), text, { quoted: mek })
                    break
                   case 'gpessoa':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gpessoa(prefix), text, { quoted: mek })
                    break
                   case 'destrava':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case 'pack':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, pack(prefix), text, { quoted: mek })
                    break
                   case 'chentai':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, chentai(prefix), text, { quoted: mek })
                    break

                   case 'gcpf':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gcpf(prefix), text, { quoted: mek })
                    break

//SEPARAR

				case 'ytmp4':
					if (args.length < 1) return reply('Cadê o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break

				case 'ytmp3':
				if (args.length < 1) return reply('Onde está a url hein?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://ferdizstark-afk.xyz/api/yta?url=https://youtu.be/6l5V3BWDcMw`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytkli = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumbgg = await getBuffer(anu.thumb)
					client.sendMessage(from, thumbgg, image, {quoted: mek, caption: ytkli})
					bufferhaje = await getBuffer(anu.result)
					client.sendMessage(from, bufferhaje, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break

//SEPARAR

				case 'encode64':

				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':

				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':

				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':

				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':

				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decbinary':

				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':

				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':

				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':

				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
				
//SEPARAR

				case 'snowrite':
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					break

				case 'lovemake':
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break

				case 'thunderlogo':
					if (args.length < 1) return reply('Cadê o texto, hum')
					thun = body.slice(12)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/thundertext?text=${thun}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${thun}`})
					break

                case 'walogo':
					if (args.length < 1) return reply('Cadê o texto, hum')
					makwa = body.slice(7)
					reply(mess.wait)
					buffer = await getBuffer(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${makwa}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${makwa}`})
					break

case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ted)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'reverter':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ted)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${anu.display_url}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
if (args.length < 1) return reply(`Digite algum texto para isso`)
wtext = body.slice(7)
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ted)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=${wtext}&text2=10000`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'ytcom':
if (args.length < 1) return reply('⚠️Você precisa marcar uma foto mais com um texto/texto\nEx: Marque uma Imagem e digite USUÁRIO|TEXT\n Ex2: (IMAGEM) NOBRU|VOCÊ É PRO PLAYER')
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
if (args.length < 1) return reply(`Digite algum texto para isso`)
ytfake = body.slice(6)
yt1 = ytfake.split("|")[0];
yt2 = ytfake.split("|")[1];
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ted)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${anu.display_url}&username=${yt1}&comment=${yt2}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'wasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgwas = `${anu.display_url}`
hehe = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${imgwas}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break


case 'drawing':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'drawing2':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'triggered':
case 'ger':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})                               
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'pretobranco':
case 'pretoebranco':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgwas = `${anu.display_url}`
hehe = await getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${imgwas}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'rgb':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgwas = `${anu.display_url}`
hehe = await getBuffer(`https://some-random-api.ml/canvas/rgb?hex=${imgwas}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break


case 'vidro':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgwas = `${anu.display_url}`
hehe = await getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${imgwas}`)
client.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

//SEPARAR

         case 'fakereply':
		        if (!args) return reply(`Usa :\n${prefix}fakereply [numero/msg/suamsg]]\n\nEx : \n${prefix}fakereply 0|oi|oi juga`)
		        var ghh = budy.slice(11)
		        var nomorr = ghh.split("|")[0];
	            var target = ghh.split("|")[1];
		        var buteco = ghh.split("|")[2];
	            client.sendMessage(from, `${buteco}`, MessageType.text, {quoted: { key: { fromMe: false, participant: nomorr+'@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
                break


               case 'happy':
					if (args.length < 1) return reply('Cadê o texto, hum')
					niver = body.slice(6)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${niver}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${niver}`})
					break

             case 'textclaro':
					if (args.length < 1) return reply('Cadê o texto, hum')
					claq = body.slice(10)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${claq}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${claq}`})
					break

           case 'lol1':
                    teks = body.slice(5)
                    a = await fetchJson(`https://api-exteam.herokuapp.com/api/photooxy?tema=retro-avatar&teks=${teks}`)
                    b = await fetchJson(`https://api.imgbb.com/1/upload?expiration=1000&key=761ea2d5575581057a799d14e9c78e28&image=${a.data}&name=Ex-team`)
                    c = await getBuffer(b.data.url)
                    client.sendMessage(from, c, image, {quoted: mek})
                    break

               case 'textnature':
					if (args.length < 1) return reply('*Texto¹*')
					natu = body.slice(11)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${natu}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${natu}`})
					break

                case 'codigobrr':
					if (args.length < 1) return reply('Cadê o texto, hum')
					brs = body.slice(10)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${brs}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '_CÓDIGO DE BARRAS_' })
					break

//SEPARAR

				case 'modonsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw já está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break

                 case 'nomegp':
		             if (args.length < 1) return reply ('o nome do grupo é: *${groupMetadata.subject}*')
		             break

//_LOLIS PINTEREST
case 'loli':
reply(mess.wait)
client.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
client.sendMessage(from, pok, image, {
quoted: mek, caption: `nii?`
})
} catch {
}
break

//SEPARAR

					case 'xd':				
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(3)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Pesquisa : '+pinte+'*', quoted: mek })
					break
				
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
                    await limitAdd(sender)
					break


//SEPARAR

				case 'bloquear':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					client.blockUser (`@${body.slice(7)}`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir @${body.slice(7)}`, text)
					break

				case 'premiumlist':
					teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *LOSER BOT* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break

                  case 'qrcode':
        			if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.vipbot* para adquirir o acesso Premium!' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break


//SEPARAR
		    	case 'wa.me':
		        case 'wame':
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*LOSER NO CONTROLE🐊🚩*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { quoted: mek } )
			      break
                  case 'playstore':
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
             
			                case 'pornhub':
					var krl = body.slice(8)
					var iz1 = krl.split("|")[0];
					var iz2 = krl.split("|")[1];
					if (args.length < 1) return reply('INSIRA SEU TEXTO\nex: TEXTO|TEXTO\n\n LEMBRE-SE DE SEMPRE COLOCAR O "|" PARA SEPARAR O TEXTO E NAO BUGAR SEU TEXTO!')
					reply(mess.wait)
					buffer = await getBuffer(`http://docs-jojo.herokuapp.com/api/phblogo?text1=${iz1}&text2=${iz2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'phlogo'})
					break


//SEPARAR 
            case 'onichan':
            case 'bodoh':
                client.sendMessage(from, buff, './lindy/baka.mp3', audio/mp3, {quoted: mek, ptt:true})
                break

                 case 'setdesc':
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: mek})
				     break
			 
                case 'speed':
                case 'ping':
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `_VELOCIDADE DO LOSER BOT_: *${latensi.toFixed(4)}*`, text, { quoted: mek})
                    break

                case 'tempbot':
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				putagg = await getBuffer(`https://i.pinimg.com/originals/61/f0/ec/61f0ecf0f872fe1d7c0603d98cbdde9c.png`)
                    client.sendMessage(from, putagg, image, {quoted: mek, caption: `_O LOSER BOT ESTA ATIVO:_\n*${kyun(uptime)}*`})
                    break

				case 'delete':
				case 'del':
				case 'd':  
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.vipbot* para adquirir o acesso Premium!' ,text, { quoted: mek })
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break


//TESTE TRAVA, DEU F 
                case 'travarf':
                     const pesan = body.slice(5)
                      if (!isPremium) return reply(mess.only.premium)
                      if (pesan.length > 5000) return client.sendMessage(from, 'ate 5k de caracteres', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks2 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks3 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks4 = `*[TRAVA🐊🚩]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                      var options = {
                         text: teks1,
                         text: teks2,
                         text: teks3,
                         text: teks4,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                     break
                     case 'sugerircmd':
                     if (args.length < 1) return reply('*Digite Qual Comando Você Quer Sugerir!*')
                     const testee = body.slice(11)
                      if (testee.length > 100) return client.sendMessage(from, 'Você ultrapassou o limite de mensagens', msgType.text, {quoted: mek})
                       const teks0 = `*você tem um novo comando sugerido!* \n_*Mensagem:*_ ${testee}`
                      var options = {
                         text: teks0
                     }
                    client.sendMessage('558499034946@s.whatsapp.net', options, text, {quoted: mek})
                    reply('*SEU COMANDO SUGERIDO FOI ENVIADO PARA OS DONOS DO BOT!*\n\n_OBRIGADO PELO APÓIO!_')
                    break

//*** PLAY COM LINK ***\\
                      case 'playmp3':
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Título:* ${anu.result.title}\n*• Link:* ${anu.result.source}\n*• Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIANDO POR FAVOR, NÃO SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break 
//fim do cmd
					
                  case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break


//*** IMAGENS ***\\
                case 'image':
					if (args.length < 1) return reply('O que você quer procurar, mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
				case 'playstore':
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break


           case 'pinterest':
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${body.slice(11)}}`)				
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*`})			
					break 
  
                case 'darkjokes':
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
                  break

                case 'ffmeme':
				 data = fs.readFileSync('./outros/ffmeme.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
                  break

                case 'mascote':
				 data = fs.readFileSync('./outros/mascote.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted: mek, caption: 'Whatsapp Jr.'})
                  break

                case 'shitpost':
				 data = fs.readFileSync('./outros/shitpost.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, hasil, image, {quoted: mek, caption: 'SHITPOST DO LOSER'})
                  break

               case 'tadas':
				 data = fs.readFileSync('./outros/tadas.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
               client.sendMessage(from, hasil, image, {quoted: mek, caption: 'CANTADAS DO LOSER'})
                   break


                case 'wallpaper':
				 data = fs.readFileSync('./src/wallpaper.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
                   break

                case 'alerta':
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break									
   
	
				case 'naruto':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					tto =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(tto)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				
				case 'minato':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
					
					
//*** MUSICAS / VIDEOS / IMAGENS ***\\
case 'onich':
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'm4':
tujuh = fs.readFileSync('./assets/matue&teto.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'vidabom':
tujuh = fs.readFileSync('./assets/teto1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'paypal':
tujuh = fs.readFileSync('./assets/paypal.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fdp':
tujuh = fs.readFileSync('./assets/fdp.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fahsion':
tujuh = fs.readFileSync('./assets/teto3.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'blaze':
tujuh = fs.readFileSync('./assets/blaze.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cmflamengo':
tujuh = fs.readFileSync('./assets/cmflamengo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'apagaluz':
tujuh = fs.readFileSync('./assets/apagatudo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'lacoste':
tujuh = fs.readFileSync('./assets/lacoste.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'gringa':
tujuh = fs.readFileSync('./assets/gringa.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case '24kgoldn':
tujuh = fs.readFileSync('./assets/24kGoldn.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'vidalouca':
tujuh = fs.readFileSync('./assets/vidalouca.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'portugal':
tujuh = fs.readFileSync('./assets/portugal.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'botlindo':
const linduh = fs.readFileSync('./assets/lindo.webp');
client.sendMessage(from, linduh, sticker, {quoted: mek})
break

case 'qualfigu':
const testef = fs.readFileSync('./assets/STK-20210302-WA0610.webp');
client.sendMessage(from, testef, sticker, {quoted: mek})
break


//*** BEIJAR ALEATÓRIO ***\\
case 'beijar':
if (args.length < 1) return reply('@Marque Alguém!')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
const tujuh = fs.readFileSync('./beijar2/STK-20210321-WA0551.webp');
client.sendMessage(from, tujuh, sticker, {quoted: mek, caption: mentions(`${pushname} Deu Uma Beijada Em ${arqs[1]}`, mentioned, true)})
                  }
                 break
//BEIJAR

//*** MUSICAS / VIDEOS / IMAGENS ***\\
case 'imteste':
beju = body.slice(8)
tujuh = fs.readFileSync('./bot/sticker/testee.jpeg');
client.sendMessage(from, tujuh, image, {quoted: mek, mimetype: 'image/jpeg', caption: `${pushname} Deu uma Beijada em${beju}`, ptt:true})
break

case 'wal':
tujuh = fs.readFileSync('./assets/Aesthetic_black-2d7d1cee-6005-4764-aa2d-8b6c684f2800.jpeg');
client.sendMessage(from, tujuh, image, {quoted: mek, mimetype: 'image/jpeg', ptt:true})
break

case 'hackear':
if (args.length < 1) return reply('@Marque Alguém!')
aimaura = body.slice(8)
tujuh = fs.readFileSync('./assets/VID-20210317-WA0776.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', caption: `O ${pushname} *Está Hackeando o sistema de(a)* ${aimaura}`, ptt:true})
mentions(membr, true)
break

case 'macarena':
tujuh = fs.readFileSync('./assets/macarena.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break

case 'fteste':
tujuh = fs.readFileSync('./assets/20210526_000116.gif');
client.sendMessage(from, tujuh, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek})
break

case 'botada':
tujuh = fs.readFileSync('./assets/botada.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit':
tujuh = fs.readFileSync('./assets/edit1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'pedro':
tujuh = fs.readFileSync('./assets/STK-20210320-WA0065.webp');
client.sendMessage(from, tujuh, sticker, {quoted: mek, mimetype: 'webp', ptt:true})
break
case 'xxxedit':
tujuh = fs.readFileSync('./assets/editxxx.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx1':
tujuh = fs.readFileSync('./assets/status1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx2':
tujuh = fs.readFileSync('./assets/status2.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx3':
tujuh = fs.readFileSync('./assets/status3.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'estudar':
tujuh = fs.readFileSync('./assets/estudar.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'saturno':
tujuh = fs.readFileSync('./assets/saturno.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'okk':
const rate = body.slice(7)
tujuh = fs.readFileSync('./assets/VID-20210315-WA1016.mp4');
ah = await getBuffer(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
client.sendMessage(from, ah, {quoted: mek, caption: 'teste ${rate}'})
break
case 'tiktok0':
if (!isNsfw) return reply('*❗ ESTE VÍDEO É 🔞 E SO ESTÁ LIBERADO NO PV OU NSFW ON ❗*')
tujuh = fs.readFileSync('./assets/18tao.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok1':
tujuh = fs.readFileSync('./assets/tiktok1.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok2':
tujuh = fs.readFileSync('./assets/tiktok2.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok3':
tujuh = fs.readFileSync('./assets/tiktok3.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok4':
tujuh = fs.readFileSync('./assets/tiktok4.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok5':
tujuh = fs.readFileSync('./assets/tiktok5.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok6':
tujuh = fs.readFileSync('./assets/tiktok6.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok7':
tujuh = fs.readFileSync('./assets/tiktok7.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok8':
tujuh = fs.readFileSync('./assets/tiktok8.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok9':
tujuh = fs.readFileSync('./assets/tiktok9.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok10':
tujuh = fs.readFileSync('./assets/tiktok10.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok11':
tujuh = fs.readFileSync('./assets/tiktok11.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok12':
tujuh = fs.readFileSync('./assets/tiktok12.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok13':
tujuh = fs.readFileSync('./assets/tiktok13.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok14':
tujuh = fs.readFileSync('./assets/tiktok14.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok15':
tujuh = fs.readFileSync('./assets/tiktok15.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok16':
tujuh = fs.readFileSync('./assets/tiktok16.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok17':
tujuh = fs.readFileSync('./assets/tiktok17.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok18':
tujuh = fs.readFileSync('./assets/tiktok18.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok19':
tujuh = fs.readFileSync('./assets/tiktok19.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok20':
tujuh = fs.readFileSync('./assets/tiktok20.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok21':
tujuh = fs.readFileSync('./assets/tiktok21.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok22':
tujuh = fs.readFileSync('./assets/tiktok22.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok23':
tujuh = fs.readFileSync('./assets/tiktok23.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok24':
tujuh = fs.readFileSync('./assets/tiktok24.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok25':
tujuh = fs.readFileSync('./assets/tiktok25.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok26':
tujuh = fs.readFileSync('./assets/tiktok26.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok27':
tujuh = fs.readFileSync('./assets/tiktok27.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok28':
tujuh = fs.readFileSync('./assets/tiktok28.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok29':
tujuh = fs.readFileSync('./assets/tiktok29.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tiktok30':
tujuh = fs.readFileSync('./assets/tiktok30.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'tchau':
tujuh = fs.readFileSync('./assets/tchau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
tujuh = fs.readFileSync('./assets/bem.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'falsidade':
tujuh = fs.readFileSync('./assets/falsidade.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'docinho':
tujuh = fs.readFileSync('./assets/docinho.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cirilo':
tujuh = fs.readFileSync('./assets/cirilo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nobru':
tujuh = fs.readFileSync('./assets/nobru.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'gemidao':
tujuh = fs.readFileSync('./assets/gemidao.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'peneu':
tujuh = fs.readFileSync('./assets/peneu.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
tujuh = fs.readFileSync('./assets/glub.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'macaco':
tujuh = fs.readFileSync('./assets/caco.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
           case 'hobby':

					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
        case 'dado':	
         if (args.length < 1) return reply('*digite .dado e o número que você quer!*')	
           client.updatePresence(from, Presence.composing) 
	       reply('*Jogados Os Dados 🎲*')
		   const jo =[`1`, `2`, `3`, `4`, `5`, `6`]
	       const gu = jo[Math.floor(Math.random() * jo.length)]
	       hasil = `O dado caiu no lado: *${gu}*`
	       reply(hasil)
			   break
          case 'cassino':
                    reply('*🎰Girando a roleta...🎰*')
					var aaah = [`🍒 🍒 🍒\n🍒 🍒 🍇\n🍇 🍇 🍇\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`, `🍎 🍎 🍇\n🍇 🍎 🍇\n🍎 🍇 🍎\n\n*Você Perdeu!*\n*😓 Que Pena... 😭*`, `🍒 🍎 🍒\n🍎 🍒 🍇\n🍇 🍒 🍒\n\n*Você Perdeu!*\n*😓 Que Pena... 😭*`, `🍇 🍇 🍇\n🍇 🍇 🍎\n🍇 🍇 🍇\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`, `🍎 🍎 🍎\n🍇 🍇 ??\n🍒 🍒 🍒\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`, `🍒 🍇 🍎\n🍎 🍎 🍇\n🍇 🍇 🍇\n\n*Você Perdeu!*\n*😓 Que Pena... 😭*`, `🍇 🍎 🍒\n🍇 🍒 🍎\n🍇 🍎 🍒\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`, `🍎 🍒 🍇\n🍇 🍎 🍒\n🍒 🍇 ??\n\n*Você Perdeu!*\n*😓 Que Pena... 😭*`, `🍎 🍎 🍇\n🍒 ?? 🍎\n🍎 🍒 🍒\n\n*Você Perdeu!*\n*😓 Que Pena... 😭*`, `🍎 🍎 🍎n\🍎 🍎 🍒\n🍎 🍎 🍎\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`, `🍎 🍒 🍎\n🍎🍒🍇\n🍎 🍒 🍎\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`, `🍒 🍎 🍒\n🍇 🍇 🍒\n🍎 🍇 🍎\n\n*Você Perdeu!*\n*😓 Que Pena... 😭*`, `🍎 🍎 🍒\n🍒 🍒 🍎\n🍇 🍒 🍎\n\n*Você Perdeu!*\n*😓 Que Pena... 😭*`, `🍒 🍎 🍇\n🍒 🍎 🍇\n🍒 🍎 🍇\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`, `🍒 🍎 🍒\n🍇 🍇 🍇\n🍒 🍎 🍎\n\n*🎊 Você Ganhou! 🎉*\n*🥰 Parabéns 🥰`]
					const gira1 = aaah[Math.floor(Math.random() * aaah.length)]
					teksahh = `*🎰 Roleta Girada ✅🎰*\n\n${gira1}`
					client.sendMessage(from, teksahh, text, {quoted: mek})
					break

          case 'cassino2':
                    reply('*🎰Girando a roleta...🎰*')
					var casino = [`💵 | 💎 | 💵\n\n*Você perdeu😭*\n_Tente Novamente!_`, `💵 | 💎 | 💵\n\n*Você perdeu😭*\n_Tente Novamente!_`, `💎 | 💎 | 💵\n\n*Você perdeu😭*\n_Tente Novamente!_`, `💎 | 💎 | 💎\n\n*Você Ganhou Parabéns 😍*\n_Agora Você Vai Ganhar Uma Mamada!_`, `💎 | 💵 | 💵\n\n*Você perdeu😭*\n_Tente Novamente!_`, `💎 | 💎 | 💎\n\n*Você Ganhou Parabéns 😍*\n_Agora Você Vai Ganhar Uma Mamada!_`, `💵 | 💵 | 💵\n\n*Você Ganhou Parabéns 😍*\n_Agora Você Vai Ganhar Uma Mamada!_`, `💵 | 💎 | 💎\n\n*Você perdeu😭*\n_Tente Novamente!_`]
					const gira2 = casino[Math.floor(Math.random() * casino.length)]
					teksahh = `${gira2}`
					ssino = await getBuffer(`https://i.ibb.co/CKg6s4d/images-4.jpg`)
					client.sendMessage(from, ssino, image, {quoted: mek, caption:`*?? Roleta Girada - Cassino2✅🎰*\n\n${gira2}`})
					break

case 'slot':
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
client.sendMessage(from, slott, text, {quoted: mek})
break

//PEDRA PAPEL TESOURA
case "ppt":
if (args.length < 1) return reply('Esolha, Pedra, Papel, Tesoura')
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do Loser-BOT"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Loser-BOT jogou: ${pptb}\nVocê jogou: ${args}\n\nRESULTADO FINAL:\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break
//FIM DO PPT

case 'amongus':
if (!isGroup) return reply('⚠️ ESSE COMANDO SO PODE SER USADO EM GRUPOS!')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
//  tiringa.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break

//*** CARA COROA ***\\
case 'caracoroa':
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
client.sendMessage(from, cararoa, sticker, {quoted: mek})
break

case 'fanime':
const kisaa = fs.readFileSync('./assets/STK-20210312-WA0666.webp');
client.sendMessage(from, kisaa, sticker, {quoted: mek})
break

//FIGU MACACO
case 'macaco1':
const figur = fs.readFileSync('./figmacaco/STK-20210311-WA0162.webp');
client.sendMessage(from, figur, sticker, {quoted: mek})
break

case 'macaco2':
const kaco = fs.readFileSync('./figmacaco/STK-20210311-WA0399.webp');
client.sendMessage(from, kaco, sticker, {quoted: mek})
break

case 'macaco3':
const lcaco = fs.readFileSync('./figmacaco/STK-20210311-WA0457.webp');
client.sendMessage(from, lcaco, sticker, {quoted: mek})
break

case 'macaco4':
const bcaco = fs.readFileSync('./figmacaco/STK-20210311-WA0604.webp');
client.sendMessage(from, bcaco, sticker, {quoted: mek})
break

case 'macaco5':
const fcaco = fs.readFileSync('./figmacaco/macaco5.webp');
client.sendMessage(from, fcaco, sticker, {quoted: mek})
break


//FIGU DE PUNHETINHA
case 'punheta':
case 'fpunheta':
const fpunheta = fs.readFileSync('./assets/punheta.webp');
client.sendMessage(from, fpunheta, sticker, {quoted: mek})
break

//CRINGE FIGU
case 'cringe':
const crige = fs.readFileSync('./database/gringa/cringe.webp');
const nhe = fs.readFileSync('./database/gringa/cringe2.webp');
gee = ["cringe", "cringe2"]
hjh = gee[Math.floor(Math.random() * gee.length)]
gg = hjh
gringa = fs.readFileSync('./database/gringa/'+hjh+'.webp')
client.sendMessage(from, gringa, sticker, {quoted: mek})
break

//_INFORMAÇÕES DO USUÁRIO
case 'infome':
case 'perfil':
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pf = 
`
  ‣ Nome: @${sender.split("@")[0]}
  ‣ Registrado: ✅
  ‣ Idade: ${idad}
  ‣ Nome de registro: ${regin}
  ‣ Registrado desde: ${usTime}
  ‣ Level: ${usLevel}
  ‣ XP: ${usXp}/${requirXp}
  ‣ Patente: ${patt}
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serh}
`
its = await getBuffer (ppimg)
client.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
if(usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined) {
reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
}
break

          case 'pergunta':
					var perg = ['TALVEZ SIM','TALVEZ NÃO','PREFIRO NÃO ENTRAR NESSE ASSUNTO!','DEFINITIVAMENTE NÃO','VOCÊ PODE ACREDITAR NISSO','¯\_(ツ)_/¯','MELHOR NÃO FALAR SOBRE ISSO AGORA','NÃO QUERO FALAR DISSO','NÃO NECESSARIAMENTE','NÃO','SIM','AS VEZES SIM','SEI LÁ']
					const perguntaai = perg[Math.floor(Math.random() * perg.length)]
					teksahh = `${perguntaai}`
					client.sendMessage(from, teksahh, text, {quoted: mek})
					break

         case 'gplaca':
					var gure = ['LDG-1595','NDD-6721','MUG-2947','LEH-5752','GKQ-4357','JUR-0811','JZI-7184','MXB-9358']
					const plq = gure[Math.floor(Math.random() * gure.length)]
					teksahh = `${plq}`
					client.sendMessage(from, teksahh, text, {quoted: mek})
					break

           case 'infocovid':
					var infov = ['┏━━━━━━━━━┑\n🌍INFO COVID🌍\n🌍Mundial🌍\n┃Casos: 114,795,908\n┃Novos casos: +399,275\n┃Mortes: 2,550,334\n┃Novas Mortes: +7,423\n┃Recuperados: 64,251,727\n┃em tratamento: 23,562,189\n┗━━━━━━━━━┙']
					const covidmu = infov[Math.floor(Math.random() * infov.length)]
					teksahh = `${covidmu}`
					client.sendMessage(from, teksahh, text, {quoted: mek})
					break

          case 'viadometro':
					var viad1 = ['□□□□□0%\n\n- MÓ PAZ AMIGÃO','□□□□□0%\n\n- TU NÃO MAMA O BONDE RLX','■□□□□20%\n\n- UM POUCO EM PAZ','■□□□□20%\n\n- CUIDADO TU JÁ TA UM POUCO COMEÇANDO A MAMAR O BONDE','■■■□□60%\n\n- EITAA JÁ MAMAOU O BONDE TODO','■■■■■100%\n\n- TU JÁ TA ENJOADO DE MAMAR E DÁ O BOGA 😳']
					const metro1 = viad1[Math.floor(Math.random() * viad1.length)]
					teksahh = `*〽️ VIADOMETRO* - ${metro1}`
					client.sendMessage(from, teksahh, text, {quoted: mek})
					break

          case 'oraculo':
                    reply('*🔮 VENDO AS PREVISÃOES DA SUA VIDA 🔮*')
					var temp = ['🔮 PELAS MINHAS PREVISÕES VOCÊ VAI USAR CAMISINHA DE  MARACUJÁ NO DESODORANTE 🔮','🔮 VOCÊ VAI SE JUNTAR A MODINHA E SENTAR NA PICA DE OUTRO HOMEM 🔮','🔮 VOCÊ VAI SER FAMOSINHO NO TIK TOK POR FAZER UMA TREND SÓ DE BIQUINE 🔮','🔮 VOCÊ VAI SER MULTIQUADRINARIO 🔮','🔮 VOCÊ VAI PARAR DE TER ESSA CARA DE JOELHO É VIRAR UM LINDO E ESBELTO EXEMPLO DE BELEZA 🔮','🔮 VOCÊ VAI MAMAR OUTRO MAXO 🔮','VOCÊ VAI PERDER A VIRGINDADE COM O DONO DO BOT 🔮','🔮 VOCÊ VAI SER UM PROPLAYER DE FREE FIRE 🔮','🔮 VOCÊ VAI ENTRAR NA LOUD 🔮','🔮 VOCÊ VAI PEGAR A MORENA ESSE ANO 🔮','🔮 VOCÊ AINDA VAI SER O MAIS BONITO (A) DA SUA ESCOLA 🔮']
					const dog = temp[Math.floor(Math.random() * temp.length)]
				    oru = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3X4eRaYg1NSWpFpv-lF4pliqyEOlstW1FA&usqp=CAU`)
					client.sendMessage(from, oru, image, {quoted: mek, caption:`*🔮 SUA PREVISÃO:*\n\n `+dog +`` })
					break


//*** EDUCAÇÃO ***\\
          case 'boanoite':
				    buffer = await getBuffer(`https://i.pinimg.com/originals/1c/24/b0/1c24b0545e3d7783022c40d0ab8701db.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption:`Boa Noite 🥰 Espero Que Tenha Tido Um Bom Dia!`})
					break

          case 'bomdia':
				    buffer = await getBuffer(`https://i.pinimg.com/originals/aa/d0/89/aad089b60695808ef7f3d86550907410.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption:`Bom Dia 🥱 Espero Que Tenha Um Bom Dia!`})
					break

         case 'boatarde':
				    buffer = await getBuffer(`https://i.pinimg.com/originals/aa/d0/89/aad089b60695808ef7f3d86550907410.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption:`Boa Tarde 🤠 Espero Que Tenha Uma Bela Tarde!`})
					break

           case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `👩‍❤️‍💋‍👨?? Está rolando um Clima entre @${teupai11.jid.split('@')[0]} e @${teupai21.jid.split('@')[0]}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					    break

            case 'par':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const parzada = groupMembers
						const par1 = parzada[Math.floor(Math.random() * parzada.length)]
						teks = `😍 Encontrei o seu Par @${par1.jid.split('@')[0]}\n👩‍❤️‍💋‍👨 E vocês formam um belo casal!`
						membr.push(par1.jid)
						mentions(teks, membr, true)
					    break

           case 'feio':
                    reply(mess.ficha)
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const irineu7 = groupMembers
                        const lin =['Muito feio não dá irmão','Tu é muito feio pprt','Muito feio parece um Sirigueijo','Tua Mãe não te fez não ela cagou você','Tu se cria?']
					    const du = lin[Math.floor(Math.random() * lin.length)]
						const irineu99 = irineu7[Math.floor(Math.random() * irineu7.length)]
						var feio1 = [`50%`, `70%`, `80%`, `100%`, `+999%`]
						const feio = feio1[Math.floor(Math.random() * feio1.length)]
						teks = `*Achei o mais feio do grupo:* @${irineu99.jid.split('@')[0]}\n\ncom uma porcentagem de feiura de: *${feio}*\n\n*${du}*`
						membr.push(irineu99.jid)
						mentions(teks, membr, true)
					break

           case 'punheteiro':
                    reply(mess.ficha)
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const puta1 = groupMembers
						const puta2 = groupMembers
                        const puta3 = groupMembers
                        const puta4 = groupMembers
                        const puta5 = groupMembers
						const gozada1 = puta1[Math.floor(Math.random() * puta1.length)]
						const gozada2 = puta2[Math.floor(Math.random() * puta2.length)]
						const gozada3 = puta3[Math.floor(Math.random() * puta3.length)]
						const gozada4 = puta4[Math.floor(Math.random() * puta4.length)]
						const gozada5 = puta5[Math.floor(Math.random() * puta5.length)]
						teks = `*_😳 Esses É Top 5 Punheteiro Do Grupo:_*\n\n*_1= @${gozada1.jid.split('@')[0]}_*\n\n*_2= @${gozada2.jid.split('@')[0]}_*\n\n*_3= @${gozada3.jid.split('@')[0]}_*\n\n*_4= @${gozada5.jid.split('@')[0]}_*\n\n*_5= @${gozada4.jid.split('@')[0]}_*`
						membr.push(gozada1.jid)
						membr.push(gozada2.jid)
						membr.push(gozada3.jid)
						membr.push(gozada4.jid)
						membr.push(gozada5.jid)
						mentions(teks, membr, true)
					break

              case 'suruba':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const su1 = groupMembers
						const su2 = groupMembers
                        const su3 = groupMembers
                        const su4 = groupMembers
                        const su5 = groupMembers
                        const su6 = groupMembers
						const ruba1 = su1[Math.floor(Math.random() * su1.length)]
						const ruba2 = su2[Math.floor(Math.random() * su2.length)]
						const ruba3 = su3[Math.floor(Math.random() * su3.length)]
						const ruba4 = su4[Math.floor(Math.random() * su4.length)]
						const ruba5 = su5[Math.floor(Math.random() * su5.length)]
						const ruba6 = su6[Math.floor(Math.random() * su6.length)]
						teks = `_ROII_ ${pushname}\n\nA suruba será *hoje* na casa do primeiro\n@abaxio\n*_horário da suruba: 23:38_*\nParticipantes da suruba:\n🤤@${ruba1.jid.split('@')[0]}\n🤤@${ruba2.jid.split('@')[0]}\n🤤@${ruba3.jid.split('@')[0]}\n🤤@${ruba4.jid.split('@')[0]}\n🤤@${ruba5.jid.split('@')[0]}\n🤤@${ruba6.jid.split('@')[0]}`
						membr.push(ruba1.jid)
						membr.push(ruba2.jid)
						membr.push(ruba3.jid)
						membr.push(ruba4.jid)
						membr.push(ruba5.jid)
						membr.push(ruba6.jid)
						mentions(teks, membr, true)
					break

                   case 'lindo':
                    reply(mess.ficha)
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const tomate = groupMembers
                        const ga =['Krl Que Lindo(a)','Se eu não fosse um robô eu te pegava!','Seu pai te fez com um pincel? pqp','Certeza que você é o mais lindo(a) do grupo','Sua mãe te vende?']
					    const to = ga[Math.floor(Math.random() * ga.length)]
						const uva = tomate[Math.floor(Math.random() * tomate.length)]
						var tutu = [`70%`, `80%`, `90%`, `100%`, `99999%`]
						const bunitin = tutu[Math.floor(Math.random() * tutu.length)]
						teks = `*Achei o mais lindo(a) do grupo:* @${uva.jid.split('@')[0]}\n\ncom uma porcentagem de lindeza: *${bunitin}*\n\n*${to}*`
						membr.push(uva.jid)
						mentions(teks, membr, true)
					break

                   case 'gostoso':
                    reply(mess.ficha)
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const limao = groupMembers
                        const gos =['meninão chega acordou com essa gostosa(o)', 'Gostoso(a) do krl irmão', 'Nossa que gostoso(a)', 'Mais Gostosa(o) do que a mia khalifa']
					    const toso = gos[Math.floor(Math.random() * gos.length)]
						const pau = limao[Math.floor(Math.random() * limao.length)]
						var porce = [`75%`, `80%`, `85%`, `90%`, `100%`, `99999%`]
						const olho = porce[Math.floor(Math.random() * porce.length)]
						teks = `*Achei o mais gostoso(a):* @${pau.jid.split('@')[0]}\n\n*_Com uma porcentagem de gostosura:_* *${olho}*\n\n*${toso}*`
						membr.push(pau.jid)
						mentions(teks, membr, true)
					break

					
                case 'truth':
				case 'sasuke':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'sakura':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				    
				case 'instastory':
				if (args.length < 1) return reply('username??')
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `• *Envio:* ${story.uploaded}\n• *Termina:* ${story.expired}\n• *Tamanho: ${story.filesize}\n• *Tipo:* ${story.type}\n• Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
                                
				case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'O tempo acabou:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 5 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 segundos para ir', text) // ur cods
					}, 0) // 1000 = 1s,
					break

              case 'gay':
           client.updatePresence(from, Presence.composing) 
           random = `${Math.floor(Math.random() * 100)}`
           boiola = random
          if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
           }
          hasil = `Você é ${random}% gay\n\n${bo}`
          reply(hasil)
           break

case 'rola':
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break

              case 'xingar':
                	if (args.length < 1) return reply('Maruqe seus amigos!')
                    rate = body.slice(7)
                    const toma =['SEU BOSTINHA', 'SEU AROMBADO', 'SEU PÃO DOCE', 'FIMOSE FORTIFICADA', 'SEU CARA DE CU DE COELHO', 'SEU PRIMATA DESNUTRIDO COM AIDS', 'SEU ABORTADO', 'SEU FDP', 'SEU PAÇOCA', 'SEU BANANAO', 'SEU RUIM', 'SEU 2 DE QI FEIO', 'CABEÇA DE COGUMELO', 'CARECA PRETO', 'FUDIDO DO KRL']
					const resposta = toma[Math.floor(Math.random() * toma.length)]
                    client.sendMessage(from, '🤬'+rate+' 🤬\n\n*Resposta*: '+resposta+' ', text, { quoted: mek })
					break

            case 'top5':
                    if (!isGroup) return reply(mess.only.group)
                	if (args.length < 1) return reply('QUAL TOP 5 VOCÊ QUER SABER? - *EXP: .TOP5 GADOS*')
                    topss = body.slice(5)
                    membr = []
                    const tops1 = groupMembers
                    const tops2 = groupMembers
                    const tops3 = groupMembers
                    const tops4 = groupMembers
                    const tops5 = groupMembers
                    const tuf1 = tops1[Math.floor(Math.random() * tops1.length)]
                    const tuf2 = tops2[Math.floor(Math.random() * tops2.length)]
                    const tuf3 = tops3[Math.floor(Math.random() * tops3.length)]
                    const tuf4 = tops4[Math.floor(Math.random() * tops4.length)]
                    const tuf5 = tops5[Math.floor(Math.random() * tops5.length)]
                    teks = `┍─━─¤ *(🏆 TOP 5${topss} 🏆)*\n |\n |❥🥇 *1° Lugar:* @${tuf1.jid.split('@')[0]}\n |❥🥈 *2° Lugar:* @${tuf2.jid.split('@')[0]}\n |❥🥉 *3° Lugar:* @${tuf3.jid.split('@')[0]}\n |❥    *4° Lugar:* @${tuf4.jid.split('@')[0]}\n |❥    *5° Lugar:* @${tuf5.jid.split('@')[0]}`
                    membr.push(tuf1.jid)
						membr.push(tuf2.jid)
						membr.push(tuf3.jid)
						membr.push(tuf4.jid)
						membr.push(tuf5.jid)
						mentions(teks, membr, true)
					break

                case 'taxa':
               	if (args.length < 1) return reply('QUAL TAXA VOCÊ QUER SABER? - *EXP: .taxa BOT LINDO*')
                    taxi = body.slice(5)
                    membr = []
                    var dome = [`20%`, `40%`, `50%`, `60`, `70%`, `80%`, `100%`]
                    const tro = dome[Math.floor(Math.random() * dome.length)]
                    teks = `*🌡️ Sua Taxa${taxi}*\n_Porcentam: ${tro}_`
						mentions(teks, taxi, true)
					break

                case 'peaky':
					const ab =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%']
					const be = ab[Math.floor(Math.random() * ab.length)] 
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjnBQacr5MMKW_9kWxdG02LW6WwjOnxRONg&usqp=CAU`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:`*Porcentagem frio e calculista*\n\n${pushname}\n_Sua porcentagem é:_ `+be +` `}) 
					break

                  case 'timer':
				if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*escolher:*\nsegundo\nminuto\nhora")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				break

				case 'delete':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque a msg para apagar *seja um administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
			

//*** ATIVAÇÃO ***\\
				case 'setfoto':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break	
		
                case 'level':
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nome : ${sem}\n┣⊱ Seu XP :  ${userXp}\n┣⊱ Seu Level : ${userLevel}\n┗━━━━━━━━━━━━`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break

                case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*O comando de level já estava ativo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use ${prefix}leveling on para ativar e  ${prefix}leveling off para desativar')
					}
					break


                                case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('digite on para ativar, e off para desativar')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`Antilink Ativado Com Sucesso✔️`)
					} else if ((args[0]) === 'off') {
			            if (!isAntiLink) return reply('Antilink já esta off!');
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Desativado o anti-link com sucesso neste grupo ✔️')
					} else {
						reply('On para ativar, Off para desligar')
					}
					break


//*** CONVERTER ***\\
                	case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque o video pfv')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
                	case 'tomp4':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❗Responda um video❗')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❗ Falha ao converter vídeo para mp3 ❗')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break


//*** GADO METROS ***\\
        case 'gadometro':
		case 'gado':
		    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
			var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "TPTDPBCT=Topa Tudo Por Buceta KKKJ", "Gado Comum", "Mini-Pedro", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Proffisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
			var gado = chifre[Math.floor(Math.random() * chifre.length)]
			var hola = ["50", "60", "70", "80", "90", "124"]
			var lvpc = hola[Math.floor(Math.random() * hola.length)]
			if (args.length == 1) {
				const mentions = (teks, memberr, id) => (from, arqs[1] + ' é ' + lvpc + '% ' + gado + 'KKKKJ.') 
			} else { reply(from, `Você é ` + lvpc + '% ' + gado + ' KKKKJ.', id) }
			break

	
			    case 'igstalk': 
anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(anu.profile_pic)
teks = `Username : ${anu.username}
Fullname : ${anu.fullname}
Follower : ${anu.follower}
Following : ${anu.following}
Verified : ${anu.is_verified}
Bussiness : ${anu.is_bussiness}
Private : ${anu.is_private}
Link : https://www.instagram.com/${anu.username}
Bio : ${anu.bio}`
client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break

               case 'fakeidentity':
					reply(mess.wait)
					anu = await fetchJson(`http://docs-jojo.herokuapp.com/api/fake_identity`, {method: 'get'})
					indeti = `✅ INDENTIDADE FAKE ENCONTRADA ✅\n\n*➸ Nome :* ${anu.name}*\n*➸ Sexo :* ${anu.gender}\n*➸ idade :* ${anu.age}\n*➸ Aniversário :* ${anu.birtday}\n*➸ Ocupação :* ${anu.occupation}\n*➸ Endereço :* ${anu.address}\n*➸ Estado :* ${anu.state}\n*➸ E-mail :* ${anu.email}\n*➸ Senha :* ${anu.password}\n*➸ Telefone :* ${anu.phone}\n*➸ Cartão :* ${anu.card}\n*➸ Data :* ${anu.date}\n*➸ Código Pin :* ${anu.pin_code}\n*➸ Peso :* ${anu.weight}\n*➸ Altura :* ${anu.height}\n*➸ Tipo Sanguíneo :* ${anu.blood_type}\n*➸ Estado Civil :* ${anu.status}`
					client.sendMessage(from, indeti, text, {quoted: mek})
					break

              case 'ip':
                     if (args.length < 1) return reply('Digite um IP\nEx: 8.8.8.8')
                    aip = body.slice(3)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${aip}`, {method: 'get'})
					checkk = `✅ IP ENCONTRADO ✅\n\n ✪ IP: ${anu.ip}\n✪ Tipo: ${anu.type}\n✪ Região: ${anu.region}\n✪ Cidade: ${anu.city}\n✪ Latitude: ${anu.latitude}\n✪ Longitude: ${anu.longitude}\n✪ Provedor: ${anu.isp}\n✪ Continente: ${anu.continent}\n✪ Sigla do continente: ${anu.continent_code}\n✪ País: ${anu.country}\n✪ Sigla do País: ${anu.country_code}\n✪ Capital do País: ${anu.country_capital}\n✪ DDI: ${anu.country_phone}\n✪ Países Vizinhos: ${anu.country_neighbours}\n✪ Fuso Horário: ${anu.timezone} ${anu.timezone_name} ${anu.timezone_gmt}\n✪ Moeda: ${anu.currency}\n✪ Sigla da Moeda: ${anu.currency_code}`
					client.sendMessage(from, checkk, text, {quoted: mek})
					break

              case 'scnpj':
					reply(mess.wait)
					anu = await fetchJson(`https://www.receitaws.com.br/v1/cnpj/${encodeURIComponent(body.slice(6))}`, {method: 'get'})
					checkk = `✅ CNPJ ENCONTRADO ✅\n* ${anu.atividade_principal} \n\n ➸ *DATA SITUAÇÃO:* ${anu.data_situacao}\n\n ➸ *TIPO:* ${anu.tipo} \n\n ➸ *NOME:* ${anu.nome} \n\n ➸ *UF:* ${anu.uf} \n\n ➸ *TELEFONE:* ${anu.telefone}\n\n ➸ *SITUAÇÃO:* ${anu.situacao} \n\n ➸ *BAIRRO:* ${anu.bairro} \n\n ➸ *RUA:* ${anu.logradouro} \n\n ➸ *NÚMERO :* ${anu.numero} \n\n ➸ *CEP :* ${anu.cep} \n\n ➸ *MUNICÍPIO:* ${anu.municipio} \n\n ➸ *PORTE:* ${anu.porte}\n\n ➸ *ABERTURA:* ${anu.abertura}\n\n ➸ *NATUREZA JURÍDICA:* ${anu.natureza_juridica} \n\n ➸ *FANTASIA:* ${anu.fantasia}\n\n ➸ *CNPJ:* ${anu.cnpj}\n\n ➸ *ÚLTIMA ATUALIZAÇÃO:* ${anu.ultima_atualizacao}\n\n ➸ *STATUS:* ${anu.status}\n\n ➸ *COMPLEMENTO:* ${anu.complemento}\n\n ➸ *EMAIL:* ${anu.email}`
					client.sendMessage(from, checkk, text, {quoted: mek})
					break

              case 'gerarplaca':
					reply(mess.wait)
					anu = await fetchJson(`https://apicarros.com/v1/consulta/${encodeURIComponent(body.slice(11))}`, {method: 'get'})
					checkk = `✅ PLACA ENCONTRADA ✅\n\n➸ *ANO:*  ${anu.ano}\n ➸ *ANO MODELO* : ${anu.anoModelo}\n ➸ *CHASSI* : ${anu.chassi}\n ➸ *CODIGO RETORNO* : ${anu.codigoRetorno}\n ➸ *CODIGO SITUACAO* : ${anu.codigoSituacao}\n ➸ *COR* : ${anu.cor}\n ➸ *MARCA* : ${anu.marca}\n ➸ *MUNICIPIO* : ${anu.municipio}\n ➸ *SITUACAO* : ${anu.situacao}\n ➸ *UF* : ${anu.uf}`
					client.sendMessage(from, checkk, text, {quoted: mek})
					break

              case 'covid':
                    if (args.length < 1) return reply('Digite o nome do Pais em inglês\nEx: Brazil')
					reply(mess.wait)
					anu = await fetchJson(`https://coronavirus-19-api.herokuapp.com/countries/${encodeURIComponent(body.slice(7))}`)
					checkk = `✪ Casos no ${anu.country} >* ${anu.cases}\n\n*✪ Casos diarios >* ${anu.todayCases}\n\n*✪ Mortes >* ${anu.deaths}\n\n*✪ Mortes diarias >* ${anu.todayDeaths}\n\n*✪ Recuperados >* ${anu.recovered}\n\n*✪ Ativos >* ${anu.active}\n\n*✪ Casos criticos >* ${anu.critical}\n\n*✪ Testes totais >* ${anu.totalTests}`
					client.sendMessage(from, checkk, text, {quoted: mek})
					break

case 'cep':
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
client.sendMessage(from, ccg, text, {quoted:mek})
break

case 'ddd':
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: 
    ${hehe.cities}\n`
client.sendMessage(from, ccg, text, {quoted:mek})
break

case 'cartão':
case 'cartao':
if (!isPremium) return reply(mess.only.premium)
hehe = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
if (hehe.error) return reply(hehe.error)
ccg =
` Cartão gerado com sucesso
   ‣ Bandeira: ${hehe.result.card.network}
   ‣ Número: ${hehe.result.card.number}
   ‣ Cvv: ${hehe.result.card.cvv}
   ‣ Pin: ${hehe.result.card.pin}
   ‣ Balanço: ${hehe.result.card.balance}
   ‣ Validade: ${hehe.result.card.expiration_month}/${hehe.result.card.expiration_year}`
client.sendMessage(from, ccg, text, {quoted:mek})
break

case 'clima':
case 'tempo':
anu = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${args[0]}`)
client.sendMessage(from, anu, image, {quoted: mek})
break


//_EFEITO REVERSE PARA VIDEO  
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
		
//_EFEITO FAST PARA VIDEO  
case 'fastvid':
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
		
//_EFEITO SLOW PARA VIDEO  
case 'slowvid':
if (!isQuotedVideo) return fakegroup('Marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
reply(mess.wait)
if (!isQuotedAudio) return reply('Marque um áudio')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
reply(mess.wait)
if (!isQuotedAudio) return reply('Marque um áudio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
reply(mess.wait)
if (!isQuotedAudio) return reply('Marque um áudio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
reply(mess.wait)
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
reply(mess.wait)
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
reply(mess.wait)
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break


				case 'text3d2':
              	    if (args.length < 1) return reply('Onde está o texto, irmão??')
                    onee = `${body.slice(8)}`
                    buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${onee}`, {method: 'get'})
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: '_TEXT3D 2_'})
			     	break
               case 'textmaker':
              	    if (args.length < 1) return reply('Onde está o texto, irmão??')
                    teks = `${body.slice(8)}`
                    buffer = await getBuffer(`https://api-gdr.herokuapp.com/api/textmaker3?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: '_TEXTO MAKER_'})
			     	break
				case 'wibu':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nome* ${anu.result.nama} ➸ *descrição* ${anu.result.deskripsi}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					break
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Resultados de *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
                   
                case '8bits':
                  var ef = body.slice(6)
                  var ab1 = ef.split("|")[0];
                  var cd2 = ef.split("|")[1];
                    if (args.length < 1) return reply('⚠️ocorreu um erro, verifique se você digitou o texto correto\nex: Loser|bot')
                   buffer = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${ab1}&text2=${cd2}`, {method: 'get'})
                   client.sendMessage(from, buffer, image, {quoted: mek, caption: `${ef}`})
                   break
					case 'totaluser':
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOS LOSER BOT 👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *LOSER* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break

				case 'desligar':
				if (!isOwner) return reply('Comando so para o meu dono, qm e vc?')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						client.sendMessage(from, 'BOT DESLIGADO COM SUCESSO', text, { quoted: mek })
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer222 = fs.readFileSync(ran)
								client.sendMessage(from, buffer222, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer333 = fs.readFileSync(ran)
								client.sendMessage(from, buffer333, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer444 = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer444, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buffer555 = fs.readFileSync(ran)
								client.sendMessage(from, buffer555, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`MANDE NA LEGENDA DE UMA FOTO SE VOCÊ DESEJA DESLIGAR O BOT!`)
					}
					break

case 'reiniciar':
if (!isOwner) return reply('Comando Apenas Para Meu Dono!')
npm = `npm start`
reply('Reiniciando em alguns segundos...')       
exec(npm, (err, stdout) => {
if(err) return client.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break


			case 'fechargp':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\n*apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break

//*** ANIMES Q ESTA OFF / MAIS PODE VOLTAR! ***\\
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'akira':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: '_A K I R A_', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
                case 'abrirgp':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nsekarang *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true)
					client.sendMessa
					break

              case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break

//*** SHIPP ***\\
                case 'ship':
                    if (args.length < 1) return reply('@Marque Alguém!')
                    porc = `${Math.floor(Math.random() * 100)}`
					if (!isGroup) return reply(mess.only.group)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 2) {
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`♥️ ${arqs[1]} tem uma chance de ${porc}% de namorar com ${arqs[2]}`, mentioned, true)
					}
					break

case 'abraço':
case 'abraco':
if (args.length < 1) return reply('@Marque Alguém!')
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break

case 'slap':
case 'tapa':
if (args.length < 1) return reply('@Marque Alguém!')
if (!isGroup) return reply(mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Olhaaa a briga ... @${sender.split("@")[0]} deu um tapa na cara de @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
const slapz = fs.readFileSync('./assets/slap.webp');
client.sendMessage(from, slapz, sticker, {queoted: mek})
break


//*** PLAY DO YT ***\\
                                  case 'play':
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*POR FAVOR ESPERE 10 SEGUNDOS PARA PEDIR OUTRA MUSICA!*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
//*** FIM DO PLAY ***\\


				case 'setnome':
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			   	   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
                   break
				
                case 'pubglogo':
					       gh = body.slice(9)
                    p1 = gh.split("|")[0];
                    p2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/game?text=${p1}&text2=${p2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                 
                case 'battle1':
					       fl = body.slice(9)
                    b1 = fl.split("|")[0];
                    b2 = fl.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/bf?text=${b1}&text2=${b2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				
                case 'glitch':
					var g = body.slice(8)
					var l1 = g.split("|")[0];
					var l2 = g.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/glitch?text=${l1}&text2=${l2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
		
                case 'wolflogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      ol = body.slice(10)
                      wo1 = ol.split("|")[0];
                      wo2 = ol.split("|")[1];
                      reply(mess.wait)
                      buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${wo1}&text2=${wo2}`, {method: 'get'})
                      client.sendMessage(from, buffer, image, {quoted: mek})
                      break
               case 'fumaca':
               case 'fumaça':
                      if (args.length < 1) return reply('Cadê o texto?')
                      dro = body.slice(7)
                      reply(mess.wait)
                      buffer = await getBuffer(`https://api.zeks.xyz/api/smoketext?text=${dro}&apikey=apivinz`, {method: 'get'})
                      client.sendMessage(from, buffer, image, {quoted: mek})
                      break
					
	
				case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break

                case 'fitnah':	
				case 'fake':          
                    if (!isGroup) return reply(mess.only.group)
                    arg = body.substring(body.indexOf(' ') + 1)
				    isi = arg.split(' |')[0] 
			        pesan = arg.split('|')[1] 
				    pesan2 = arg.split('|')[2] 
                    costum(pesan, isi, pesan2)
                    break

				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do bot* : @${me.jid.split('@')[0]}\n*Prefixo* : ${prefix}\n*Contatos bloqueados* : ${blocked.length}`
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGLyJAuvwpVgGcafB4elUM5lQ__DtLNazfA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break

case 'bdsm':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://meme-api.herokuapp.com/gimme/BDSMPics').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
} 
}
break

case 'masturb':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://nekos.life/api/v2/img/solo').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
} 
}
break


case 'pussy':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
} 
}
break

case 'porn':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://meme-api.herokuapp.com/gimme/porn').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
} 
}
break

case 'tits':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
} 
}
break

case 'ass':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://meme-api.herokuapp.com/gimme/CuteLittleButts').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
} 
}
break

				case 'bloqueados':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'leens':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break

//CAPTURA O TEXTO NA IMAGEM
case 'ocr':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ocrt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const com = await client.downloadAndSaveMediaMessage(ocrt)
await recognize(com, {lang: 'eng+ind', oem: 1, psm: 3})
.then(oc => {
reply(oc.trim())
fs.unlinkSync(com)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(com)
})
} else {
reply(`Marque ou envie uma imagem com ${prefix}ocr para capturar o texto da imagem`)
}
break

//CONTAR LETRAS DO TEXTO
case 'contar':
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break

//STICKER 800x800
                    case 'st':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)                                     
						rano = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
                                exec(`webpmux -set exif ${addMetadata('Loser-BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
                      })
							exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
							fs.unlinkSync(media)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})

						fs.unlinkSync(rano)
                        })
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						rano = getRandom('.webp')
						reply(mess.waitgif)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
                                exec(`webpmux -set exif ${addMetadata('Loser-BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Falha na conversão de ${tipe} para sticker`)
							})
                      })
							exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
							fs.unlinkSync(media)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})

						fs.unlinkSync(rano)
					    })
						} else {
						reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
					}
					break
//STICKER 1280x720
                    case 'fs':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)                                     
						rano = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
                                exec(`webpmux -set exif ${addMetadata('Loser-BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
                      })
							exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 1280:720 ${rano}`, (err) => {
							fs.unlinkSync(media)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})

						fs.unlinkSync(rano)
                        })
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						rano = getRandom('.webp')
						reply(mess.waitgif)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
                                exec(`webpmux -set exif ${addMetadata('Loser-BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Falha na conversão de ${tipe} para sticker`)
							})
                      })
							exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
							fs.unlinkSync(media)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})

						fs.unlinkSync(rano)
					    })
						} else {
						reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
					}
					break
                case 'sticker':
                case 's':
                case 'gif':
                case 'stickergif':
                case 'gifsticker':
				case 'figu':
				case 'fig':
				case 'fgif':
				case 'f':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *.f* ou marque uma imagem que já foi enviada`)
					}
					break
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem?\n\nex: "pt" Ola', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto é merda')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				
				
                case 'glow':
					if (args.length < 1) return reply(mess.blank)
					on = body.slice(5)
					reply(mess.wait)
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/glow?text=${on}`, {method: 'get'})
             buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: '_GLOW_', quoted: mek})
					break

                case 'azulneon':
					if (args.length < 1) return reply(mess.blank)
					zul = body.slice(9)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${zul}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_AZUL NEON_', quoted: mek})
					break

                case 'aguatext':
					if (args.length < 1) return reply(mess.blank)
					man = body.slice(9)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${man}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_GOTAS DE ÁGUA_', quoted: mek})
					break

              case 'praiatext':
					if (args.length < 1) return reply(mess.blank)
					more = body.slice(10)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${more}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_PRAIA_', quoted: mek})
					break

              case 'fflogo':
					if (args.length < 1) return reply(mess.blank)
					lzin = body.slice(7)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${lzin}&apikey=apivinz`, {method: 'get'})
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `${lzin}`})
					break
            
              case 'comentph':
					if (args.length < 1) return reply('INSIRA SEU TEXTO\nex: TEXTO|TEXTO\n\nLEMBRE-SE DE SEMPRE COLOCAR O "|" PARA SEPARAR O TEXTO E NAO BUGAR SEU TEXTO!')
					come = body.slice(9)
					ph1 = come.split("|")[0];
                    ph2 = come.split("|")[1];
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${ph1}&msg=${ph2}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_COMENTÁRIO PORNHUB_', quoted: mek})
					break

              case 'blackpink':
					if (args.length < 1) return reply(mess.blank)
					abc = body.slice(10)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${abc}&apikey=apivinz`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_BLACKPINK_', quoted: mek})
					break

              case 'neongreen':
					if (args.length < 1) return reply(mess.blank)
					ver = body.slice(10)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/gneon?apikey=apivinz&text=${ver}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_VERDE NEON_', quoted: mek})
					break

            case 'paredequebrada':
					if (args.length < 1) return reply(mess.blank)
					pra = body.slice(15)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${pra}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_PAREDE QUEBRADA_', quoted: mek})
					break

                case 'placayt':
					if (args.length < 1) return reply(mess.blank)
					ytt = body.slice(9)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${ytt}&apikey=apivinz`, {method: 'get'})
					client.sendMessage(from, buffer, image, {caption: '_PLACA YOUTUBE_', quoted: mek})
					break

                case 'neon':
					if (args.length < 1) return reply(mess.blank)
					anaa = body.slice(5)
					reply(mess.wait)
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/neon?text=${anaa}`, {method: 'get'})
             buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'neon', quoted: mek})
					break

				case 'text3d':
				    if (args.length < 0) return reply('cade o texto?')
					if (args.length < 1) return reply(mess.blank)
					zado = body.slice(7)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${zado}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {caption: `${zado}`, quoted: mek})
					break

					case 'addvip':  
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o Loser ou digite * # vipbot * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (!isadminbot) return reply('*_Você Não Tem Permissão Para Usar Esse Comando, So Pode Ser Usado Quem É Dono Do LoserBot!_*')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A a-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ Thx para atualizar para premium🥰\n*╰──────「 *posição* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break

                    case 'tiktokmenu': 
					client.sendMessage(from, tiktokmenu(pushname, prefix) , text, { quoted: mek })
					break

                    case 'vipbot': 
					client.sendMessage(from, vipbot(pushname, prefix) , text, { quoted: mek })
					break
	
					case 'online':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break

					case 'cekvip': 
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.vipbot* para adquirir o acesso Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*Nome do bot:* LOSER BOT\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Status:* *ATIVO*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n\n*VOCE É UM MEMBRO PREMIUM* 🐊🚩\n*──────────────────*` , text, { quoted: mek, })
					break

					case 'dellvip':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite * # vipbot * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Status*: *DEATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *posição* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *DEATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *posição* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'ichiadmin':
					tod = await getBuffer(`https://i.ibb.co/XDwBVDJ/1f2652c622fa.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*╭────*「 *ADMINBOT LOSER ✨* 」\n*│+ wa.me/5547992091566*╰──────*「 *LOSER* 」*────*\n\n*_SE QUER SER ADMIN DO BOT LOSER_*\n*_Tipo /iklan_*' })
					break
				
					case 'premiumcek':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/PcQ6tsB/79ac87b9358c.jpg`)
					client.sendMessage(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+ wa.me/554792091566/*╰──────*「 * LOSER* 」*────*\n\n*_SE QUER SER UM USUÁRIO PREMIUM DO LOSER BOT_*\n*_Ketik #vipbot*' })
					break
					case 'cekmod': 
 
					if (!isOwner) return reply(mess.only.ownerB)
                 if (!ismod) return reply('kamu Belum Terdaftar sebagai User Modbot')
                reply('kamu udah ke daftar sebagai user Modbot')
                break
                    case 'modbotlist':
					teks = 'Esta é a lista de usuários premium :\n'
					for (let p of mod) {
						teks += `~> @${p.split('@')[0]}\n`
					}
					teks += `Total : ${mod.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": mod}})
					break
					case 'addpremium': 
					client.updatePresence(from, Presence.composing) 
 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Comando aceito adicionar usuário premium : ${premium}`)
					break
			
                case 'belle': 
                 reply(mess.aguarde)                
				 data = fs.readFileSync('./src/belle.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Belle :V*')
				break

                case 'egirl': 
                 reply(mess.aguarde)                
				 data = fs.readFileSync('./outros/egirl.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '_Egirl_')
				break

               case 'minecraft': 
                 reply(mess.aguarde)                
				 data = fs.readFileSync('./outros/minecraft.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, 'Mine')
				break
	
		    	case 'grupoinfo':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break

				case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEME BRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'cringe️', quoted: mek })
					await limitAdd(sender) 	
					break

				case 'antishit':
               if (!isGroup) return reply(mess.only.group);
               if (!isGroupAdmins) return reply(mess.only.admin);
               if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               if (args.length < 1) return reply('On para ativar,Off para desativar');
               if (args[0] === 'on') {
                  if (isAntiShit) return reply('antishit já ativo burro');
                  antishit.push(from);
                  fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit));
                  reply(`Antishit ativado`);
               } else if (args[0] === 'off') {
                  if (!isAntiShit) return reply('antishit já ta off burro');
                  antishit.splice(from, 1);
                  fs.writeFileSync('./database/json/antishit.json', JSON.stringify(antishit));
                  reply(`Antishit desativado`);
               } else {
                  reply(ind.satukos());
               }
               break

           case 'addshit':
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`);
               const bw = body.slice(9);
               bad.push(bw);
               fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad));
               reply('Success Menambahkan Bad Word!');
               break;
               
           case 'delshit':
               if (!isOwner) return reply(mess.only.ownerB);
               if (args.length < 1) return reply(`Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`);
               let dbw = body.slice(9);
               bad.splice(dbw);
               fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad));
               reply('Success Menghapus BAD WORD!');
               break

           case 'shitlist':
               let lbw = `Lista de palavras proibidas\nTotal : ${bad.length}\n`;
               for (let i of bad) {
                  lbw += `➸ ${i.replace(bad)}\n`;
               }
               await reply(lbw);
               break

				case 'rr':
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    client.sendMessage(from, ''+ cu+'', text, { quoted: mek })
                    break

				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)
					break

               case 'botcarlos':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, 'Aqui está o numero do meu criador, chame ele para afins, ou dúvidas! (x',MessageType.text, { quoted: mek} )
                break

           case 'dono':
           case 'criador':
           case 'owner':
           case 'support':
					var dono = ['☀️ - Dono/Criador: https://wa.me/558499034946']
					const bot = dono[Math.floor(Math.random() * dono.length)]
					teksahh = `${bot}`
					client.sendMessage(from, bot, text, {quoted: mek})
					break

           case 'eqxv':
                    const surp = groupMembers[Math.floor(Math.random() * groupMembers.length)]
    	            var xvid = ["Negoes branquelos e feministas", `${pushname} se depilando na banheira`, `${pushname} comendo meu cuzinho`, `${pushname} quer me comer o que fazer?`, "lolis nuas e safadas", "Ursinhos Mansos Peludos e excitados", "mae do adm cozida na pressao", "Buceta de 500 cm inflavel da boneca chinesa lolita company", "corno manso batendo uma pra mim com meu rosto na webcam", "tigresa vip da buceta de mel", "belle delphine dando o cuzinho no barzinho da esquina", "fazendo anal no negao", "africanos nus e chupando pau", "anal africano", "comendo a minha tia", "lgbts fazendo ahegao", "adm gostoso tirando a roupa", "gays puxando o intestino pra fora", "Gore de porno de cachorro", "anoes baixinhos do pau grandao", "Anões Gays Dotados Peludos", "anões gays dotados penetradores de botas", "Ursinhos Mansos Peludos", "Jailson Mendes", "Vendo meu Amigo Comer a Esposa", "Golden Shower"]
                    const surp2 = xvid[Math.floor(Math.random() * xvid.length)]
					teksahh = `EQUIPE ❌VIDEOS*\n\n_Caro usuário @${sender.split("@")[0]} ..._\n\n_Sou da administração do Xvideos e nós percebemos que você não entrou em sua conta por mais de 2 semanas e decidimos checar pra saber se está tudo OK com o(a) nosso(a) usuário(a) mais ativo(a)._ \n\n_Desde a última vez que você visitou nosso site, você procurou mais de centenas de vezes por_ *"${surp2}"* (acreditamos ser sua favorita), viemos dizer que elas foram adicionadas e temos certeza que você irá gostar bastante._ \n_Esperamos você lá!_\n\n_Para o nosso usuário(a) favorito(a), com carinho, Equipe Xvideos._`
					client.sendMessage(from, teksahh, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
					break


//*** INTERAÇÕES ***\\
case 'tmnc':
return reply('Tomar no cu é vitamina, comu tu e tua prima 🤤')
break

case 'botcorno':
return reply('Vai te foder, jogador de ff, comprador de pack do pézinho🤤')
break

case 'botviado':
return reply('Falou o manja rola 🤬')
break

case 'botgay':
return reply('Falou o mama o bonde inteiro 😂')
break

case 'botputa':
return reply('Senhora tua mãe 🤬')
break

case 'vsf':
return reply('Se fuder é rolimã, comi tu e tua irmã')
break

case 'botfofo':
return reply('Arigato te amu 😳♥️')
break

case 'botbaiano':
return reply('Convidei sua placa-mãe pra minha rede seu corno')
break

case 'cheguei':
return reply('Fodase ninguém liga! 🤠')
break

case 'botlixo':
return reply('Cala boca mlk se eu te pegar na porrada quando tu tiver dormindo tu vai ver! 😡')
break
//*** FIM DAS INTERAÇÕES ***\\

	
//*** MOEDAS ***\\
case 'dolarhoje':
return reply('*Preço do dolar atualmente: 5.45 R$*')
break
	
case 'rublohoje':
return reply('*Preço do rublo atualmente: 0.073 R$*')
break

case 'ienehoje':
return reply('*Preço do iene atualmente: 0.050 R$*')
break

case 'librahoje':
return reply('*Preço do iene atualmente: 7.58 R$*')
break

case 'bitconehoje':
return reply('*Preço do bitcone atualmente: 300.120,11 R$*')
break

case 'realhoje':
return reply('*Preço do real atualmente: 0.18 R$*')
break
//*** FIM DAS MOEDAS ***\\

					case 'attp':
					if (args.length < 1) return reply('*Onde está o texto, rabudinha hum?*')
					if (args.length < 0) return reply('Cadê o texto, hum?')
					var txt = encodeURI(body.slice(5))
                    anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${txt}`)
					client.sendMessage( from, anu, sticker, {quoted:mek})
					break

                    case 'ttp':    
                    var aaa7 = encodeURI(body.slice(4))
                    if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}ttp Carlos gado`)
                    attp2 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${aaa7}`)
                    client.sendMessage(from, attp2, sticker, {quoted: mek})
                    break

				case 'nulis':
                open = body.slice(6)
                reply(mess.wait)
               buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${open}&apikey=apivinz`)
                client.sendMessage(from, buffer, image, {quoted: mek})
                     break

                case 'morte':
                    if (args.length < 1) return reply('Coloque um nome...\nNão há necessidade de inserir sobrenome.')
                    teks = body.slice(7)
                    azz = await fetchJson(`https://api.agify.io/?name=${teks}`)
                    replyc = `Pessoas com este nome: "${azz.name}".\nTendem a morrer aos ${azz.age} anos de idade ;/`
                    client.sendMessage(from, replyc, text, {quoted: mek})
                     break
				
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

                case 'marcar2':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break

                 case 'marcar3':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break

				case 'limpar':
					if (!isOwner) return reply('Quem é Você?, Voce não é meu dono 😂')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Excluido todos os chats com sucesso :)')
					break

				case 'bc':
					if (!isOwner) return reply('Você Não É Proprietário Do Loser !')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[🤖LOSER® - Mensagem Para Todos!]\n\n${body.slice(4)}`})
						}
						reply('Mensagem enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[🤖LOSER® - Mensagem Para Todos]\n\n${body.slice(4)}`)
						}
						reply('Mensagem enviada com sucesso')
					}
					break

               case 'aviso':
					if (!isOwner) return reply('Você Não É Proprietário Do Loser !')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[⚠️ AVISO DO LOSER BOT ⚠️]\n\n${body.slice(6)}`})
						}
						reply('Mensagem enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[⚠️ AVISO DO LOSER BOT ⚠️]\n\n${body.slice(6)}`)
						}
						reply('Mensagem enviada com sucesso')
					}
					break

               case 'ataque':
					if (!isOwner) return reply('Você Não É Proprietário Do Loser !')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[❗❗ ATAQUE ❗❗]\n\n${body.slice(7)}`})
						}
						reply('Mensagem enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[❗❗ ATAQUE ❗❗]\n\n${body.slice(7)}`)
						}
						reply('Mensagem enviada com sucesso')
					}
					break

				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break

				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você quer adicionar um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break

				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break


case 'ownergrup':
case 'ownergroup':
if (!isGroup) return reply(mess.only.group)
client.updatePresence(from, Presence.composing) 
options = {
text: `Dono do grupo: @${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from]}}
client.sendMessage(from, options, text, { quoted: mek } )
break

                                case 'linkgp':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break

                                case 'leave':
                                        if (!isOwner) return reply(mess.only.ownerB)    
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                          reply(`Foi uma honra permanecer com vocês, mas me mandaram sair, vejo vocês, com sorte, na proxima.`).client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break

                case 'upstory':
                 if (!isOwner) return reply(mess.only.ownerB)    
                var teks = body.slice(9)
                client.sendMessage('status@broadcast', teks, text)
                    reply('succses')
                break

//TESTE CMD
             case 'mute':
                if (!isOwner) return reply(mess.only.ownerB)    
                client.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                break

            case 'unmute':
                if (!isOwner) return reply(mess.only.ownerB)    
                client.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                break
//TESTE 👆👆

         case 'listaimagem':
	            teks = '*Lista Imagens :*\n\n'
                    for (let awokwkwk of imagenye) {
		        teks += `- ${awokwkwk}\n`
		        }
		        teks += `\n*Total : ${imagenye.length}*`
		        client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
		        break

            case 'pegarimagem':
		        namastc = body.slice(10)
		        buffer = fs.readFileSync(`./lib/image/${namastc}.jpeg`)
		        client.sendMessage(from, buffer, MessageType.image, {quoted: {
                    key: {
                        fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                        remoteJid: "status@broadcast"
                        }: {})
                    }, message: { conversation: `Resultado : ${namastc}.jpg` }}})
		        break

              case 'sair':
                if (!isOwner) return reply(mess.only.ownerB)    
                if (!isGroup) return reply(mess.only.group)
                reply(`Foi uma honra permanecer com vocês, mas me mandaram sair, vejo vocês, com sorte, na proxima.`)
                await sleep(3000)
                client.groupLeave(from)
                break

//ARQUIVAR GP
               case 'arquivar':
                if (!isOwner) return reply(mess.only.ownerB)    
                reply('*okey wait..*')
                await sleep(3000)
                client.modifyChat(from, ChatModification.archive)
                break

              case 'desarquivar':
                if (!isOwner) return reply(mess.only.ownerB)    
                reply('*succes unarchive all chat*')
                anu = await vinicius.chats.all()
                for (let _ of anu) {
                client.modifyChat(_.jid, ChatModification.unarchive)
                }
                break

case 'imagem':
client.updatePresence(from, Presence.composing)                       
if (!isQuotedSticker) return reply('Você precisa marcar um sticker não animado para isso')
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medtmg = await client.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return reply('❌falha ao converter sticker em imagem❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'conversão sucedida'})
fs.unlinkSync(ran)
})
break

case 'stickername':
	        if (!isQuotedSticker) return reply(`Reaja a um Sticker Mencionando *${prefix}takestick nama|author*`)
		    const pembawm = body.slice(13)
		    if (!pembawm.includes('|')) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
                const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
		    const packname = pembawm.split('|')[0]
	            const author = pembawm.split('|')[1]
		        exif.create(packname, author, `takestick_${sender}`)
		        exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		        if (error) return reply('error')
		        wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
		        fs.unlinkSync(media)
		        fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		    })
		    break
              
				case 'simi':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mnazria.herokuapp.com/api/simi?text=${teks}`, {ihod: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break

				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo 😗️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado modo simi com sucesso neste grupo 😡️')
					} else {
						reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
					}
					break

				case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já esta ativo.')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo 😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativou com sucesso o recurso de boas-vindas neste grupo 😡️')
					} else {
						reply('1 para ativar, 0 para desativar, lerdão vc em KAKKKK')
					}
                                      break

				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isadminbot) return reply('*_Você Não Tem Permissão Para Usar Esse Comando, So Pode Ser Usado Quem É Dono Do LoserBot!_*')
					if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
					break

		        case 'setfoto2':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Quem é Você?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break

                case 'bc2':
					if (!isadminbot) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada')
					}
					break

				case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply('Este Comando Só Pode Ser Usando Quando Você Comprar Vip!')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Só uma foto mano')
					}
					break

//*** ANIMES ON ***\\

case 'keta':
try {
res = axios.get(`https://nekos.life/api/v2/img/keta`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'yuri':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/yuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'foxg':
try {
res = axios.get(`https://nekos.life/api/v2/img/fox_girl`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'pat':
try {
res = axios.get(`https://nekos.life/api/v2/img/pat`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'poke':
try {
res = axios.get(`https://nekos.life/api/v2/img/poke`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
//
case 'waifukawai':
try {
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
client.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('Ocorreu um erro')
}
break
		

case 'kemonomimi':
try {
res = axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'gecg':
try {
res = axios.get(`https://nekos.life/api/v2/img/gecg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'cuddle':
try {
res = axios.get(`https://nekos.life/api/v2/img/cuddle`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'waifu':
try {
axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

 case 'animeavatar':
 try {
axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'baka':
try {
axios.get('https://nekos.life/api/v2/img/baka').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break   

//_COMANDOS NSFW
case 'holo':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break


case 'smug':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'solo':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'ero':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
clinet.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'erofeet':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'spank':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feet':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'classic':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'holoero':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'cum':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eroyuri':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eron':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'pwankg':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'anal':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewd':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdkemo':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'solog':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdk':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//GIF
case 'ngif':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'blowjob':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hentai':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hololewd':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'trap':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'les':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'smallboobs':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'futanari':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'femdom':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feed':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erok':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'feetg':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erokemo':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'boobs':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break


//GIF
case 'rhug':
axios.get('https://nekos.life/api/v2/img/hug').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break


//GIFS
case 'nsfwgif':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//GIF
case 'cumgif':
try {
if (!isNsfw) return reply('❌ O ModoNsfwesta desativado, para atiivar digite .modonsfw (on) (off)\n ou esta liberado no pv! ❌')
reply(mess.wait)
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//_ FIM DOS COMANDOS NSFW

default:
if (body == `${prefix}${command}`) {
hsl = `⚠️ @${sender.split("@")[0]}!!\nO comando: ${prefix}${command} não existe no LoserBOT\n\nTem certeza que digitou corretamente?🏷️\nUse ${prefix}Menu para listar meus comandos`
client.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
}
starts()
