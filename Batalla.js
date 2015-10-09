/*function startbattle() will set the initial conditions to start a battle*/
function startbattle (){
    var i;
    /* We make an object that will be delated at the end of the battle and that will contain pointers to the attacking and defending
     * territory and player*/
    Battle= new Object();
    try{
        i=window.opener.MyTurn.Attacker.selectedIndex;
        Battle.attackerctr=window.opener.MyTurn.Attacker.options[i].value;
        Battle.attackerctr=window.opener.Territori[Battle.attackerctr];
        Battle.attacker=Battle.attackerctr.jugador;
        i=window.opener.MyTurn.Defender.selectedIndex;
        Battle.defenderctr=window.opener.MyTurn.Defender.options[i].value;
        Battle.defenderctr=window.opener.Territori[Battle.defenderctr];
        Battle.defender=Battle.defenderctr.jugador;
        Battle.tensiontime=window.opener.tensiontime;
        Battle.attackstart=Battle.attackerctr.tropes-1;
        Battle.defensestart=Battle.defenderctr.tropes;
    }
    catch (err){
        chose();
    }
    Battle.talk='yes';
    /* We write de names of attackers and defenders, the number of troups and make the attacker decide how to attack and
    * with how many troups, we also let the defender chose the number of troups*/
    makebattlehistory();
    writebattlehistory();
}

/* function insertimages will load the images of the players on each side o the window*/
function insertimages(){
    var text, i;
    text='<img src="Images/Colors/'+Battle.attacker.troupcolor+'.png" name="AttackerImg" id="AttackerImg" height="150px" style="position:absolute; left:0; top:10px;">';
    text+='<img src="Images/Colors/'+Battle.defender.troupcolor+'.png" name="DefenderImg" id="DefenderImg" height="150px" style="position:absolute; top:10px;">';
    document.getElementById("BattleHistory").innerHTML=text;
    try{
        i=window.opener.document.getElementById('jugador'+Battle.defender.turn+'Color').width;
        i=i*15;
        i=i/2;
        i=Math.ceil(i);
        i+=10;
    }
    catch (err){
        i=110;
        console.log('no esteu aprofitant tot el meu potencial');
    }
    i=window.innerWidth-i;
    document.getElementById("DefenderImg").style.left=i+"px";
}

/*function makebattlehistory will buil paragrafs in the BattleHistory form*/
function makebattlehistory(){
    insertimages();
    maketitle();
    maketroups();
    makehowtoattack();
    makehistory();
}

/* function writebattlehistory will fill the BattleHistory paragrafs*/
function writebattlehistory(){
    writetitle();
    writetroups();
    writehowtoattack();
}

/* function maketitle() introduces a paragraf called introduction inside the BattleHistory form*/
function maketitle(){
    document.BattleHistory.innerHTML+='<center><br><div name="Introduction" id="Introduction"><br></center>';
}


/* function writetitle() will change the inner HTML of the introduction paragraf*/
function writetitle(){
    var text;
    text='<table style="width:60%">';
    text+='<tr><td align="center">Tropes del jugador <b>'+Battle.attacker.name+' = '+Battle.attackerctr.tropes+'</b></td>';
    text+='<td align="center">Tropes del jugador <b>'+Battle.defender.name+' = '+Battle.defenderctr.tropes+'</b></td></tr>\n';
    text+='</table>';
    document.getElementById("Introduction").innerHTML=text;
}

/*function maketroups() introduces a paragraf called BattleTroups inside the BattleHistory form and inside of this paragraf will*/
function maketroups(){
    document.BattleHistory.innerHTML+='<center><br><div name="BattleTroups" id="BattleTroups"><br></center>';
}

/*function writetroups will change the inner HTML of the BattleTroups paragraf*/
function writetroups(){
    var text, i, n;
    text='<table style="width:60%" align="center|center">';
    text+='<tr><td align="center">Atacant</td> <td align="center">Defensor</td> </tr>';
    text+='<tr>\n<td align="center">\n<select name="AttackTroups" id="AttackTroups">\n';
    i=Battle.attackerctr.tropes-1;
    n=Math.min(3, i);
    if (n!=0){
        for (i=n; i>0; i--){
            text+='<option value="'+i+'">'+i+'</option>\n';
        }
    }
    else{
        text+='<option value=" "> </option>\n';
    }
    text+='</select>\n</td>\n';
    text+='<td align="center">\n<select name="DefenseTroups" id="DefenseTroups">\n';
    i=Battle.defenderctr.tropes;
    n=Math.min(2, i);
    if (n!=0){
        for (i=n; i>0; i--){
            text+='<option value="'+i+'">'+i+'</option>\n';
        }
    }
    else{
        text+='<option value=" "> </option>\n';
    }
    text+='</select>\n</td>\n</tr>\n</table>\n';
    document.getElementById("BattleTroups").innerHTML=text;
}

/*function makehowtoattack() introduces a paragraf called HowToAttack inside the BattleHistory form*/
function makehowtoattack(){
    document.BattleHistory.innerHTML+='<center><br><div name="HowToAttack" id="HowToAttack"><br></center>';
}

/*function makeinvasion() introduces a paragraf called Invasion inside the BattleHistory form and decleres the invaded territori
 * as propriety of the attacker also in case the attacker just killed his opponent it declares his death*/
function makeinvasion(){
    var Continent, color;
    Battle.defenderctr.jugador=Battle.attacker;
    color="Images/Colors/"+Battle.attacker.troupcolor+".png";
    try{
        window.opener.document.getElementById(Battle.defenderctr.identification+'Img').setAttribute("src", color);
    }
    catch (err){
        console.log('No esteu aprofitant tot el meu potencial.');
    }
    Battle.defender.territoris--;
    Continent=Battle.defenderctr.continent;
    Battle.defender[Continent]--;
    Battle.attacker[Continent]++;
    Battle.attacker.territoris++;
    try{
        window.opener.Turn.territories++;
    }
    catch (err){
        console.log('No esteu aprofitant tot el meu potencial.');
    }
    if (Battle.defender.territoris==0){
        declaredeath();
    }
    document.BattleHistory.innerHTML+='<center><p name="Invasion" id="Invasion"></center>';
}

/*function writetransfer() will change the inner HTML of the Transfer paragraf showing the transfered troups to the player and
 *allowing him to accept the transfer*/
function writetransfer(){
    var i, transfered, text;
    i=document.getElementById("Transfered").selectedIndex;
    transfered=document.getElementById("Transfered").options[i].value;
    text='<table style="width:60%">'
    text+='<tr><td align="center">Tropes en <b>'+Battle.attackerctr.name+' = '+(Battle.attackerctr.tropes-transfered)+'</b></td>';
    text+='<td align="center">Tropes en <b>'+Battle.defenderctr.name+' = '+transfered+'</b></td></tr></table><br>';
    text+='<input type="button" name="Move" id="Move" value="Acceptar" onclick="move('+transfered+')">';
    document.getElementById("Transfer").innerHTML=text;
}

/* function move will move troups from the attacker to the defender country*/
function move(transfered){
    Battle.attackerctr.tropes+=-transfered;
    try{
        window.opener.document.getElementById("h"+Battle.attackerctr.identification).innerHTML=Battle.attackerctr.tropes;
    }
    catch (err){
        console.log('No esteu aprofitant tot el meu potencial.');
    }
    Battle.defenderctr.tropes=transfered;
    try{
        window.opener.document.getElementById("h"+Battle.defenderctr.identification).innerHTML=Battle.defenderctr.tropes;
    }
    catch (err){
        console.log('No esteu aprofitant tot el meu potencial.');
    }
    finish();
}

/*function finish delates the Battle object launches the attac function in the opener window and closes the window*/
function finish(){
    var i;
    i=Battle.attacker.turn;
    try{
        window.opener.attac(i);
        window.close();
    }
    catch (err){
        console.log('No esteu aprofitant tot el meu potencial.');
    }
}

/*function declaredeath is activated when the defender has no more countries and erases the object referring to this player
 *Obviusli if the attacker is the mighty Marco my awesom creator I will make sure everybody notices it and if he dies I will
 *cry his death*/
function declaredeath(){
    var text, i, dead, number;
    try{
        window.opener.Jugador.nombre--;
        number=window.opener.Jugador.nombre-1;
    }
    catch (err){
        number=Battle.opponents;
    }
    if (number==0){
        if (Battle.defender.name=="Assass\355"){
            alert('La teva mort ha sigut venjada pare pots descansar en pau.');
            text='Felicitats '+Battle.attacker.name+' has aconseguit superar tots els teus adversaris i declarar-te el amo absolut ';
            text+='de la Terra et mereixes aquesta vict\362ria.';
            alert(text);
            window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/WeAreTheChampions.mp4", "Just listen to the music and feel the glory");
            try{
                window.opener.close();
            }
            catch (err){
                console.log('No esteu aprofitant tot el meu potencial.');
            }
            window.close();
        }
        else if (Battle.attacker.name=="Assass\355" || Battle.attacker.name=="Eretje" || Battle.defender.name=="Marco" || Battle.defender.name=="Moha"){
            text='Tecnicament et tocaria guanyar a tu male&iumlt ';
            if (Battle.attacker.name=='Eretje' || Battle.defender.name=='Moha'){
                text+='Eretje';
            }
            else{
                text+='Assass\355';
            }
            text+=' pero prefereixo suicidar-me abans que veure victori\363s ';
            if (Battle.attacker.name=='Eretje' || Battle.defender.name=='Moha'){
                text+='l\'home que ha matat el gran Moha.';
            }
            else{
                text+='l\'home que ha matat el meu creador.';
            }
            alert(text);
            window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/Stewie.mp4", "Cabronass");
            try{
                window.opener.close();
            }
            catch (err){
                console.log('No esteu aprofitant tot el meu potencial.');
            }
            window.close();
        }
        else if (Battle.attacker.name!="Marco" && Battle.attacker.name!='Moha'){
            text='Felicitats '+Battle.attacker.name+' ho has fet, has aconseguit superar tots els teus adversaris i declarar-te el ';
            text+='amo absolut de la terra et mereixes aquesta vict\362ria';
            alert(text);
            window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/IDidIt.mp4", "You did it");
            try{
                window.opener.close();
            }
            catch (err){
                console.log('No esteu aprofitant tot el meu potencial.');
            }
            window.close();
        }
        else if (Battle.attacker.name=='Moha'){
            text='Adoreu tots el gran Moha que no obstant les adversitats del cam\355 ha aconseguit al\347ar-se victori\363s entre els seus enemics.';
            alert(text);
            window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/WeAreTheChampions.mp4", "Just listen to the music and feel the glory");
            try{
                window.opener.close();
            }
            catch (err){
                console.log('No esteu aprofitant tot el meu potencial.');
            }
            window.close();   
        }
        else{
            text='El gran Marco Praderio s\'ha declarat superior a tots els seus adversaris com era obvi que passaria\n';
            text+'Ara sezillament accepta la teva vict\362ria i celebra.';
            alert(text);
            window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/WeAreTheChampions.mp4", "Just listen to the music and feel the glory");
            try{
                window.opener.close();
            }
            catch (err){
                console.log('No esteu aprofitant tot el meu potencial.');
            }
            window.close();
        }
    }
    else{
        if (Battle.defender.name!="Marco" && Battle.defender.name!='Moha'){
            if (Battle.defender.name=="Assass\355"){
                alert('Ho hem aconseguit pare.\nLa teva mort ha sigut venjada.\nPots descansar en pau.');
                window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/DoraLaExploradoraLoHicimos.mp4", "We did it");
            }
            else if (Battle.defender.name=='Eretje'){
                text='Gaudeix de una eternitat (o fins la pr\362xima partida de Risk) als inferns (o sigui sense jugar a Risk) Eretje.\n';
                text+='La venjan\347a del gran Moha ha caigut sobre tu.';
                alert(text);
                window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/FarfallaVendetta.mp4", "Venjan\347a");
            }
            else if (Battle.attacker.name=='Moha'){
                text='El gran Moha ha aconseguit, com era ll\362gic pensar, derrotar un dels seus nombrosos enemics i d\'aquesta manera ';
                text+='una mica mes al seu objectiu final de conquerir el mon i portar la pau a la Terra.';
                alert(text);   
            }
            else if (Battle.attacker.name!="Marco"){
                text='Ho sento molt '+Battle.defender.name+' el jugador '+Battle.attacker.name+' ha netejat el terra amb el teu careto i ara est\340s ';
                text+='obligat a deixar el joc.\nTranquil t\'ho post passar molt be mirant fixament els jugadors que queden i fent-los ';
                text+='sentir inc\362modes.\nVeur\340s que es molt divertit.'
                alert(text);
            }
            else{
               text='Obviament el meu creador el inigualable Marco Praderio Ha aconseguit aixafar el seu contrincant ';
               text+=Battle.defender.name+' com si fos una formiga\n'+Battle.defender.name+' intenta recollir lo que et queda de ';
               text+='orgull i oserva impotent com la persona que ha destrossat els teus somnis conquereix el mon.';
               alert(text);
            }
        }
        else if (Battle.defender.name=='Moha'){
            text='Tranquils seguidors de Moha. No és la primera vegada que algo aixis passa i ja sabeu que en Moha reapareixera el ';
            text+='tercer dia en una espiral de fibonacci.';
            alert(text);
            alert('Tot i aixis la seva mort ser\340 venjada');
            window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/VenganzaRollitos.mp4", "Venjan\347a");
            Battle.attacker.name='Eretje';
        }
        else{
           text='NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n';
           text+='Perque has matat el meu pare assasi? Ell era bona persona';
           window.open("http://localhost/ProgramesEnJavascript/Risk/Videos/MuerteDeMufasa.mp4", "yoro");
           alert(text);
           Battle.attacker.name='Assass\355';
        }
        dead=Battle.defender.turn;
        try{
            for (i=dead; i<=number; i++){
                window.opener.Jugador["jugador"+i]=window.opener.Jugador["jugador"+(1*i+1*1)];
            }
            window.opener.makelegend(number);
        }
        catch (err){
            console.log('No esteu aprofitant tot el meu potencial.');
        }
   }
}

/*function maketransfer() introduces a paragraf called Transfer inside the BattleHistory form*/
function maketransfer(){
    document.BattleHistory.innerHTML+='<center><p name="Trasfer" id="Transfer"></center>';
}

/*function writeinvasion will change the inner HTML of the how to attacck paragraf allowing the invader player to chose the number
 *of troups to tranfer*/
 function writeinvasion(){
    var i, text;
    text='Selecciona el nombre de tropes que desitges moure &nbsp';
    text+='<select name="Transfered" id="Transfered" onchange="writetransfer()">';
    for (i=Battle.minimumtransfer; i<Battle.attackerctr.tropes; i++){
        text+='<option value="'+i+'">'+i+'</option>';
    }
    document.getElementById("Invasion").innerHTML=text;
 }

/*function writehowtoattack will change the inner HTML of the howtoattack paragraf*/
function writehowtoattack(){
    var text, n;
    n=Battle.talk;
    text='<table style="width:60%">\n';
    text+='<tr>\n<td align="center">\n<input type="button" name="Fight" id="Fight" value="Lluitar" onclick="fight()">\n</td>\n';
    text+='<td align="center">\n<input type="button" name="TillDeath" id="TillDeath" value="A mort" onclick="tilldeath()">\n</td>\n';
    text+='<td align="center">\n<input type="button" name="TillDefeat" id="TillDefeat" value="Fins que perdi" onclick="tilldefeat()">\n</td>\n';
    if (n=='yes'){
        text+='<td align="center">\n<input type="button" name="ShutUp" id="ShutUp" value="Shut the fuck up" onclick="shutup()">\n</td>\n</tr>\n';
    }
    else{
        text+='<td align="center">\n<input type="button" name="ShutUp" id="ShutUp" value="Llibertat d\'expressi\363" onclick="shutup()">\n</td>\n</tr>\n';
    }
    text+='</table>\n';
    document.getElementById("HowToAttack").innerHTML=text;
}

/* function shutup() will permitt or forbidd this program to comment incredible situations*/
function shutup(){
    if (Battle.talk=='yes'){
        Battle.talk='no';
    }
    else{
        Battle.talk='yes';
    }
    writehowtoattack();
}

/*function makehistory() introduces a paragraf called History inside the BattleHistory form*/
function makehistory(){
    document.BattleHistory.innerHTML+='<center><br><div name="History" id="History"></div><br></center>';
}

/* function fight defines a Risk attack (the attacker and defender dices are thrown and the highest
 * values are compared and the attacker and/or defender troups are delated*/
function fight(){
    document.getElementById("History").innerHTML='';
    throwdices();
    writetitle();
    writetroups();
    if (Battle.defenderctr.tropes==0){
        i=document.getElementById("AttackTroups").selectedIndex;
        Battle.minimumtransfer=document.getElementById("AttackTroups").options[i].value;
        makeinvasion();
        maketransfer();
        writeinvasion();
        writetransfer();
        document.getElementById("HowToAttack").innerHTML='';
        document.getElementById("BattleTroups").innerHTML='';
    }
    else if (Battle.attackerctr.tropes==1){
        document.getElementById("HowToAttack").innerHTML='';
        document.getElementById("BattleTroups").innerHTML='';
        document.getElementById("History").innerHTML+='<input type="button" name="Retreat" id="Retreat" value="Retirada" onclick="finish()">';
    }
    else{
        document.getElementById("History").innerHTML+='<input type="button" name="Retreat" id="Retreat" value="Retirada cobard" onclick="finish()">';
    }
}

/* function figthtilldefeat is called by the tilldefeat function and his function is to run functions writetroups and
 * throwdices until the attacker is defeated it waits a little bit in between*/
 function figthtilldefeat(){
    var i;
    writetroups();
    i=throwdices();
    writetitle();
    if (i==0 && Battle.defenderctr.tropes>0 && Battle.attackerctr.tropes>1){
        setTimeout(function(){figthtilldefeat();}, Battle.tensiontime);
    }
    else{
        continuetilldefeat();
    }
}

/*function tilldefet keeps attacking with the maximum possible troups until the attacker loses 2 troups at once
 * or until the attacker or defender are defeated then it acts consequently*/
function tilldefeat(){
    if (Battle.talk=='yes'){
        Battle.attackstart=Battle.attackerctr.tropes-1;
        Battle.defensestart=Battle.defenderctr.tropes;
    }
    document.getElementById("History").innerHTML='';
    figthtilldefeat();
}

/* function continuetilldefeat will continue the tilldefeat function once the figthtilldefeat function bucle
 * it's finished*/
 function continuetilldefeat(){
    writetroups();
    if (Battle.defenderctr.tropes==0){
        var i;
        if (Battle.talk=='yes'){
            talckattacker(Battle.attackstart, Battle.defensestart);
        }
        i=document.getElementById("AttackTroups").selectedIndex;
        Battle.minimumtransfer=document.getElementById("AttackTroups").options[i].value;
        makeinvasion();
        maketransfer();
        writeinvasion();
        writetransfer();
        document.getElementById("HowToAttack").innerHTML='';
        document.getElementById("BattleTroups").innerHTML='';
    }
    else if (Battle.attackerctr.tropes==1){
        if (Battle.talk=='yes'){
            talckdefender(Battle.attackstart, Battle.defensestart);
        }
        document.getElementById("HowToAttack").innerHTML='';
        document.getElementById("BattleTroups").innerHTML='';
        document.getElementById("History").innerHTML+='<input type="button" name="Retreat" id="Retreat" value="Retirada" onclick="finish()">';
    }
    else{
        document.getElementById("History").innerHTML+='<input type="button" name="Retreat" id="Retreat" value="Retirada cobard" onclick="finish()">';
    }
}

/* function figthtilldeath is called by the tilldeath function and his function is to run functions writetroups and
 * throwdices until the attacker or the defender are death it waits a little bit in between*/

 function figthtilldeath(){
    writetroups();
    throwdices();
    writetitle();
    if (Battle.defenderctr.tropes>0 && Battle.attackerctr.tropes>1){
        setTimeout(function(){figthtilldeath();}, Battle.tensiontime);
    }
    else{
        continuetilldeath();
    }
 }

/*function tilldeath keeps attacking with the maximum possible troups until the attacker or defender are defeated
 * then it acts consequently*/
function tilldeath(){
    if (Battle.talk=='yes'){
        Battle.attackstart=Battle.attackerctr.tropes-1;
        Battle.defensestart=Battle.defenderctr.tropes;
    }
    document.getElementById("History").innerHTML='';
    figthtilldeath();
}

/* function continuetilldeath will continue the tilldeath function once the figthtilldeath function bucle
 * it's finished*/
 function continuetilldeath(){
    if (Battle.defenderctr.tropes==0){
        var i;
        if (Battle.talk=='yes'){
            talckattacker(Battle.attackstart, Battle.defensestart);
        }
        i=document.getElementById("AttackTroups").selectedIndex;
        Battle.minimumtransfer=document.getElementById("AttackTroups").options[i].value;
        try{
            i=window.opener.Territori.nombre;
            i=i/window.opener.Jugador.nombre;
            i=i+2;
        }
        catch (err){
            i=42;
        }
        if (Battle.defender.defensedifferent.length!=0){
            i=Math.random()*Battle.attacker.defensedifferent.length;
            i=Math.floor(i);
            i=Battle.defender.defensedifferent[i];
            i=window.opener.Differences[i].direction;
            window.open(i, Battle.defender.name, "width=1000, height=500");
        }
        makeinvasion();
        maketransfer();
        writeinvasion();
        writetransfer();
        document.getElementById("HowToAttack").innerHTML='';
        document.getElementById("BattleTroups").innerHTML='';
    }
    else{
        if (Battle.talk=='yes'){
            talckdefender(Battle.attackstart, Battle.defensestart);
        }
        try{
            i=window.opener.Territori.nombre;
            i=i/window.opener.Jugador.nombre;
            i=i+2;
        }
        catch (err){
            i=42;
        }
        if (Battle.attacker.attackdifferent.length!=0){
            i=Math.random()*Battle.attacker.attackdifferent.length;
            i=Math.floor(i);
            i=Battle.attacker.attackdifferent[i];
            i=window.opener.Differences[i].direction;
            window.open(i, Battle.attacker.name, "width=1000, height=500");
        }
        document.getElementById("HowToAttack").innerHTML='';
        document.getElementById("BattleTroups").innerHTML='';
        document.getElementById("History").innerHTML+='<input type="button" name="Retreat" id="Retreat" value="Retirada" onclick="finish()">';
    }
}

function throwdices(){
    var A=[], a, D=[], d, i;
    /* The A and D vectors will contain the 'a' dices thrown by the attacker (A) and the 'd' dices
     * thrown by the defender (D)*/
    i=document.getElementById("AttackTroups").selectedIndex;
    a=document.getElementById("AttackTroups").options[i].value;
    i=document.getElementById("DefenseTroups").selectedIndex;
    d=document.getElementById("DefenseTroups").options[i].value;
    for (i=0; i<a; i++){
        A.push(throwdicehandicap(Battle.attacker.handicap));
    }
    for (i=0; i<d; i++){
        D.push(throwdicehandicap(Battle.defender.handicap));
    }
    /* now we sort the dices from highest to lowest using the sort function*/
    A.sort(function(c, d){return d-c});
    D.sort(function(c, d){return d-c});
    /*now we compare the dices and erase troups depending on the result*/
    i=comparedices(D, A);
    return i;
}

/* function throwdicehandicap will throw a dice making more probable for it to give higer or lower numbers
 * depending on the handicap*/
 function throwdicehandicap(fuckedlevel){
    var one, two, three, four, five, a, m;
    one=Math.abs(fuckedlevel);
    one=one/120;
    one=1/6+one;
    a=evalnumber(one);
    if (fuckedlevel<0){
        two=one+one*a;
        three=two+(two-one)*a;
        four=three+(three-two)*a;
        five=four+(four-three)*a;
    }
    else{
        five=1-one;
        four=five-(1-five)*a;
        three=four-(five-four)*a;
        two=three-(four-three)*a;
        one=two-(three-two)*a;
    }
    a=(1-6*one)/15;
    m=one-a;
    two=one+m+2*a;
    three=two+m+3*a;
    four=three+m+4*a;
    five=four+m+5*a;
    a=Math.random();
    if (a<one){
        return 1;
    }
    else if (a<two){
        return 2;
    }
    else if (a<three){
        return 3;
    }
    else if (a<four){
        return 4;
    }
    else if (a<five){
        return 5;
    }
    else{
        return 6;
    }
 }

 /* function evaluenumber(x) will find a good aproximation to the number that accomplishes the following equation
  * x(1+a+a²+a³+a⁴+a⁵)=1*/
function evalnumber(x){
    var top=1, bottom=0, middle, difference;
    if (x*6==1){
        return 1;
    }
    else{
        do{
            middle=(top+bottom)/2
            difference=x*(1+middle+middle*middle+middle*middle*middle+middle*middle*middle*middle+middle*middle*middle*middle*middle);
            difference=1-difference;
            if (difference<0){
                top=middle;
            }
            else{
                bottom=middle;
            }
            difference=Math.abs(difference);
        }
        while (difference>0.000001);
    }
}

/* function comparedices compares the dices and erases the troups of attacker and/or defender and returns 1 in case that the
 * attacker suffers total defeat and 0 if not*/
function comparedices(D, A){
    var i, n, text, a=0, d=0;
    n=Math.min(D.length, A.length);
    for (i=0; i<n; i++){
        if (D[i]>=A[i]){
            Battle.attackerctr.tropes--;
            try{
                window.opener.document.getElementById("h"+Battle.attackerctr.identification).innerHTML=Battle.attackerctr.tropes;
            }
            catch (err){
                console.log('No esteu aprofitant tot el meu potencial.');
            }
            Battle.attacker.tropes--;
            a++;
        }
        else{
            Battle.defenderctr.tropes--;
            try{
                window.opener.document.getElementById("h"+Battle.defenderctr.identification).innerHTML=Battle.defenderctr.tropes;
            }
            catch (err){
                console.log('No esteu aprofitant tot el meu potencial.');
            }
            Battle.defender.tropes--;
            d++;
        }  
    }
    text='<table style="width:58%">\n<tr>';
    text+='<td>'+Battle.attackerctr.tropes+'&nbsp &nbsp &nbsp';
    if (A[0]==1 && Battle.talk=='yes' && Battle.attacker.name!="Marco"){
        text+='Priiiimoooo '+A[0];
    }
    else if (A[0]==1 && Battle.talk=='yes' && Battle.attacker.name=="Marco"){
        text+='son coses que passen '+A[0];
    }
    text+=A[0];
    for (i=1; i<A.length; i++){
        text+=', '+A[i];
    }
    if (a!=0){
        text+='&nbsp &nbsp -'+a;
    }
    text+='</td><td align="right">'+D[0];
    for (i=1; i<D.length; i++){
        text+=', '+D[i];
    }
    if (d!=0){
        text+='&nbsp &nbsp -'+d;
    }
    else{
        text+=' &nbsp &nbsp&nbsp&nbsp ';
    }
    text+='&nbsp &nbsp'+Battle.defenderctr.tropes
    text+='</td></tr></table>'
    document.getElementById("History").innerHTML+=text;
    if (d==0){
        return 1;
    }
    else{
        return 0;
    }
}

/* talckattacker and talckdefender functions just talck they do nothing else but I thght it was funny*/
function talckdefender(atini, defini){
    var numdef;
    numdef=Battle.defenderctr.tropes;
    if ((atini/defini)>=2 && (atini/defini)<3 && defini>=3){
        alert('No no no nos moveran:');
    }
    else if ((atini/defini)>=3 && defini>=3){
      alert("Pero amb qu\350 has drogat les teves tropes perque defensin aixis?");
    }
    else if (defini==numdef && atini>2){
        alert("Gaudeix mirant com el jugador "+Battle.attacker.name+" es dona cops contra la paret per no poder treure't ni una sola tropa.\nFelicitats "+Battle.defender.name+" tens el meu respecte.");
    }
    else if ((defini/atini)>=2 && (defini/atini)<3 && defini>=2){
      alert("Si us plau "+Battle.defender.name+" fot-li una colleja al jugador "+Battle.attacker.name+" per ser tan kamikaze.");
    }
}

function talckattacker(atini, defini){
    var numatac;
    numatac=Battle.attackerctr.tropes-1;
    if ((atini/defini)>=2 && atini/defini<3 && defini>=3){
        alert(Battle.attacker.name+' desde aquest moment jo, el programa toh guapo, et declaro oficialment un abus\363n.');
        if ((atini-numatac)>defini){
            alert("Espero que els cadavers de tots els soldats que han caigut sota les teves ordres t'atormentin durant la resta de la teva vida.");
      }
    }
    else if ((atini/defini)>=3 && defini>=3){
        alert("Puto bestia feia falta atacar amb tanta superioritat num\350rica?");
    }
    else if (atini==numatac && defini>2){
        alert("Quina habilitat d'estratega no has perdut ni un sol home en batalla.\nFelicitats "+Battle.attacker.name+" tens el meu respecte.");
    }
    else if ((defini/atini)>=3 && defini>=2){
        alert("Que collons fas aqu\355 sentat jugant? ves corrents a comprar un billet de la loteria "+Battle.attacker.name+" has guanyat");
    }
    else if ((defini/atini)>=2 && defini>=2){
        alert("No et creus ni tu que hagis aconseguit guanyar aix\362.");
    }
}

/* this function will permitt to create a fake player that will permit to execute the program*/ 
function buildplayer (jugador){
    this.name=jugador;
    this.turn=1;
    this.territoris=2;
    this.tropes=9001;
    this.cartes=1;
    this.troupcolor='';
    this.handicap=0;
    this.attackdifferent=[];
    this.defensedifferent=[];
    this.Europa=1;
    this.Asia=1;
    this.Africa=1;
    this.AmericaDelSud=1;
    this.AmericaDelNord=1;
    this.Oceania=1;
}


/* this function will permitt to create a fake territori that will permit to execute the program*/
function buildterritori (territori, troups){
    this.name=territori;
    this.tropes=troups;
    this.continent='Europa';
    this.jugador=Battle.attacker;
    this.veins=[];
}

/* function chose will let the player chose the attacker and defender country and players and wil ask all the necessari informarion*/
function chose(){
    var name, troups;
    Battle.opponents=1;
    name=prompt("Introdueix el nom del atacant.", "atacant");
    if (name==null){
        alert("Pues ara per graci\363s et poso jo el nom."+"\n"+"Encantat de coneixe't Croqueta.");
        name="Croqueta";
    }
    Battle.attacker=new buildplayer(name);
    troups=prompt('introdueix el nombre de tropes del pa\355s atacant.','4');
    Battle.attackerctr=new buildterritori("Pa\355s atacant", troups);
    name=prompt("Introdueix el nom del defensor", "defensor");
    if (name==null){
        alert("Pues ara per graci\363s et poso jo el nom."+"\n"+"Encantat de coneixe't Patata.");
        name="Patata";
    }
    Battle.defender=new buildplayer(name);
    troups=prompt('Introdueix el nombre de tropes del pa\355s defensor.','2');
    Battle.defenderctr=new buildterritori("Pa\355s defensor", troups);
    name=confirm('Al defensor li queda mes de un territori?');
    if (name==false){
        Battle.defender.territoris--;
        name=confirm('Nomes queda un oponent?');
        if (name){
            Battle.opponents--;
        }
    }
    Battle.tensiontime=1500;
    Battle.attackstart=Battle.attackerctr.tropes-1;
    Battle.defensestart=Battle.defenderctr.tropes;
    Battle.attacker.troupcolor='Kvothe';
    Battle.defender.troupcolor='Auri';
    makebattlehistory();
    writebattlehistory();
}