const Discord = require('discord.js')
const fetch = require('node-fetch');

const client = new Discord.Client()

function sendLater(){
    
    chapter = Math.floor(Math.random() * 18);     // returns a random integer from 0 to 17
        var chapterRandom = Math.floor(Math.random() * 18);     // returns a random integer from 0 to 17
        var chapterTextRandom = Math.floor(Math.random() * bg.bg[chapterRandom].length)
        var resultTextRandom = bg.bg[chapterRandom][chapterTextRandom].text
        client.channels.cache.get(`810552435981680702`).send('***'+ resultTextRandom +'***' +' ' + (chapterRandom+1) +'.' +(chapterTextRandom+1) )
    setTimeout(() => {
        sendLater()
    }, 72000000);
}

var bg

fetch('https://api.npoint.io/10cbc25e6d2e724ce7c8')
.then(res => res.json())
.then(data =>{  console.log(data)   
                bg = data})

client.once('ready',() =>{
    
    sendLater()
})

client.on('message',message =>{ 
    //////////////////////////   BG
  
        if(message.content === 'kirtan'){
            message.channel.send('_play https://www.youtube.com/playlist?list=PLH96C_fq1-NC9zzTGZMfLmC2ylfcRUiv4')
            setTimeout(() => {
                message.channel.send('2')
            }, 1000);
        }
    
    if(message.content.split(" ").length === 2){ 
    // setup
    var firstWord = message.content.split(" ")[0]
    var secondWord = message.content.split(" ")[1]
    if(secondWord.includes('.')  && secondWord.charAt(0) != '.' && secondWord.charAt(secondWord.length-1) != '.' ){ 
    var splitSecondWord = secondWord.split(".")
    var chapter = splitSecondWord[0]
    var chapterText = splitSecondWord[1]
    // change on Num
    chapterText = Number(chapterText) 
    chapter = Number(chapter)
    //  if| must be numbers
    if(!isNaN(chapterText) && !isNaN(chapter) ){ 
    // set 1
    if(chapter < 1 )chapter=1
    if(chapterText < 1 )chapterText=1
    ///////set to length
    if(chapter > 18) chapter = 18
    if(chapterText > bg.bg[chapter-1].length)chapterText = bg.bg[chapter-1].length
    //
    var resultText = bg.bg[chapter-1][chapterText-1].text
    if(firstWord.toLowerCase() ==='bg'){  
    // send to chat
    message.channel.send('***'+ resultText +'***' ) // second words commands
       if(secondWord.toLowerCase() === 'r'){
        chapter = Math.floor(Math.random() * 18);     // returns a random integer from 0 to 17
        chapterText = Math.floor(Math.random() * bg.bg[chapter].length)
        var resultText = bg.bg[chapter][chapterText].text
        message.channel.send('***'+ resultText +'***' +' ' + (chapter+1) +'.' +(chapterText+1) )
    }
        if(secondWord ==='?'){            // HELP
        message.channel.send('bg x.y (x = čislo kapitoly,y = čislo verša) \nbg k (vypis kapitol s popisom každej kapitoly) \nbg r (náhodny verš) \nbg i (info o bhaghavad gite)')
    }
        if(secondWord ==='i'){            // INFO
        message.channel.send('Bhagavad gítá je jedna z najvýznamnejších posvätných kníh hinduizmu. Niekedy býva dokonca označovaná za „Bibliu hinduizmu“, pretože ju ako autoritu prijímajú všetky hlavné filozofické tradície (daršany). Obyčajne sa chápe ako samostatná kniha, ale je vlastne súčasťou rozsiahleho staroindického eposu Mahábhárata (konkrétne kapitoly 25-42 knihy Bhíšmaparvan). Je rozdelená na 18 spevov a dohromady má 700 veršov. Jej význam vo vývoji indického myslenia je vskutku veľký. \nhttps://vedabase.io/sk/library/bg/')
        
    }



















}}}
   
    var firstWordHelp = message.content.split(" ")[0]
    var secondWordHelp = message.content.split(" ")[1]

    if(firstWordHelp.toLowerCase() ==='bg' && secondWordHelp === "k"){
        message.channel.send("KAPITOLA PRVÁ: Pozorovanie armád na Kuruovskom bojisku\nKAPITOLA DRUHÁ: Zhrnutie obsahu Bhagavad-gīty \nKAPITOLA TRETIA: Karma-yoga \nKAPITOLA ŠTVRTÁ: Transcendentálne poznanie \nKAPITOLA PIATA: Karma-yoga — konanie s mysľou upretou na Kṛṣṇu \nKAPITOLA ŠIESTA: Dhyāna-yoga \nKAPITOLA SIEDMA: Poznanie o Absolútnom \nKAPITOLA ÔSMA: Dosiahnutie Najvyššieho \nKAPITOLA DEVIATA: Najdôvernejšie poznanie \nKAPITOLA DESIATA: Majestát Absolútneho \nKAPITOLA JEDENÁSTA: Vesmírna podoba \nKAPITOLA DVANÁSTA: Oddaná služba \nKAPITOLA TRINÁSTA: Príroda, požívateľ, vedomie \nKAPITOLA ŠTRNÁSTA: Tri kvality hmotnej prírody \nKAPITOLA PÄTNÁSTA: Yoga Najvyššej Osobnosti \nKAPITOLA ŠESTNÁSTA: Božské a démonské povahy \nKAPITOLA SEDEMNÁSTA: Druhy viery \nOSEMNÁSTA KAPITOLA: Dokonalosť odriekania")
    }

} ////////////////////////////////////////  BG 

   







if( message.author.bot){return;}
})




































client.login('ODE0ODEzNTU0NTEwNjU5NTk0.YDjUQQ.NOr_Udd70jPPWSi-_sFlvZJtmjU')