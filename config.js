/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6285796919851'
global.nomerowner = ["6285796919851"]

// Apikey 

global.skizo = 'FalX'
global.casterix = 'GoldenWings'
//watermark 
global.packname = 'Di Buat Oleh'
global.author = 'WaBot - MD'

// cpanel 
global.domain = 'https://warungpanel-pterodactyl.panelserver.my.id' // Isi Domain Lu
global.apikey2 = 'ptla_W7fDRzGyDBlAJY1Vfcs6Vrsti9boHm53vCJfFvJa59t' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_6Rk9rTaE6qLYwS6CZM6Bq2OH8RfM2nRbydZQgTDsJUu' // Isi Apikey Pltc Lu 
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location


global.apilinode = ''// apikey   akun vps linode
global.apitokendo = ''

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
