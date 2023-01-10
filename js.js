var way = false; // 0 = e2g 1 = g2e
var wha = `Bllf = hi
Bllfa = hello
Nms = bye
Huff = please
Qep = thankyou
Pu = how
Tuy = nice
Min = bad
Nim = Good
puq = Dad
niq = Mom
Nvev = never
Gnon = Gonna
Gviv = Give
Uh = You
Urq = Up
fit = Face
gib = big
mikko = small
rudra = rainbow
Neep = red
Makak = orange
Mikkkk = yellow
Vit = green
Bonmtot = blue
Putkit = purple
Zint = pink
Butima = brown
Getino = grey
Butimaonk = Black
Urh = Your
Hru = my
Aeh = Are
Nohque = nuts
Ifux = In
Nohq = nut
Ziz = Deez
Mofjs = Mouth
Lafguh = LOL
Tfft = Try
Goflj = Google
Ilof = Is
Metne = there
Yam = you
Nimmat = do
Nimmati = doing
Gaf = Gati HAh!
Paft = Want
Thlo = To
orpuque = See
worque = play
plaque = work
egplosh = potato
bitrace = computer
Whare = with
xfs = sound effect
hahtae = like
laksjdfa = Aiden
Wlafkaj = William
Chehkl = Che
Jofllif = Joseph
Anneto = Anne
Zrupha = Zoey`
var punc = "-=~!@#$%^&*()_+{}|'\"/?><,."
wha = wha.replaceAll("\r","")
wha = wha.split("\n")
var gibdict = {}
var engdict = {}
for(var i=0; i<wha.length; i++){
    wha[i] = wha[i].replaceAll(" ","");
    gkv = wha[i].split("=")
    //console.log(gkv)
    gibdict[gkv[0].toLowerCase()] = gkv[1].toLowerCase();
    engdict[gkv[1].toLowerCase()] = gkv[0].toLowerCase();
}
/**
 * 
 * @param {String} str 
 */
function removePunc(str){
    var newstr = str.slice(0,str.length)
    for(var i=0; i<str.length; i++){
        if(punc.includes(str[i])){
            newstr = newstr.replace(str[i],"")
        }
    }
    return newstr
}
function $(id){
    return document.getElementById(id)
}
function changeWay(me){
    way = !way;
    if(way){
        me.innerText = "Gibberish to English"
        $("input").setAttribute("placeholder","Gibberish goes here")
        $("output").setAttribute("placeholder","English goes here")
    } else {
        me.innerText = "English to Gibberish"
        $("output").setAttribute("placeholder","Gibberish goes here")
        $("input").setAttribute("placeholder","English goes here")
    }
}
function translateGib(){
    if(way){
        var english = $("input").value.split(" ");
        var gibberish = "";
        for(var i=0; i<english.length; i++){
            if(removePunc(english[i]).toLowerCase() in gibdict){
                gibberish+=gibdict[removePunc(english[i]).toLowerCase()]
            } else {
                for(var j=0; j<english[i].length; j++){
                    if(english[i][j].toLowerCase()=="a"){
                        gibberish+="o"
                    } else if(english[i][j].toLowerCase()=="o"){
                        gibberish+="a"
                    } else {
                        gibberish+=english[i][j]
                    }
                }
            }
            gibberish+=" "
        }
        $("output").value = gibberish;
    } else {
        var english = $("input").value.split(" ");
        var gibberish = "";
        for(var i=0; i<english.length; i++){
            //console.log(engdict[removePunc(english[i]).toLowerCase()])
            if(removePunc(english[i]).toLowerCase() in engdict){
                gibberish+=engdict[removePunc(english[i]).toLowerCase()]
                
            } else {
                for(var j=0; j<english[i].length; j++){
                    if(english[i][j].toLowerCase()=="a"){
                        gibberish+="o"
                    } else if(english[i][j].toLowerCase()=="o"){
                        gibberish+="a"
                    } else {
                        gibberish+=english[i][j]
                    }
                }
            }
            gibberish+=" "
        }
        $("output").value = gibberish;
    }
}