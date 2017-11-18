/* function reinforcement troups will calculate how many reinforcement troups a given player should have, will permit this player to
 * place this troups and finally will give him the option to attac*/
function reinforcementtroups(i){
	/* We make an object where we can save relevant information such as the number of troups to give and the initial ammount of
	troups in each territori and the number of territories conquered during this turn*/
	Turn=new Object();
	Turn.territories=0;
	Turn.troup=0;
	Turn.turn=i;
	Turn.attackdefense=0;
	Reinforce= new Object();
	loadplayerimage(i);
	counttroups(i);
	setonclick1();
}

/* function setonclick1 will set the onclick=clickreinforcemore() and oncontextmenu=clickreinforceless attributes for
 * all the image objects in Board*/
function setonclick1(){
	var i, n, str;
	for (var i in Board.children){
		n=i.length;
		str=i.slice(-3, n);
		if (str=="Img"){
			str=i.slice(0, -3);
			Board.children[i].setAttribute("onclick", "clickreinforcemore('"+str+"')");
			Board.children[i].setAttribute("oncontextmenu", "javascript:clickreinforceless('"+str+"'); return false;");
		}
	}
}

/*function clicktreinforcemore will click if possible the CountryMore button */
function clickreinforcemore(ctrname){
	try{
		if(Territori[ctrname].jugador==Jugador['jugador'+Turn.turn]){
			document.getElementById(ctrname+'More').click();
		}
	}
	catch (err){}
}

/*function clicktreinforceless will click if possible the CountryLess button */
function clickreinforceless(ctrname){
	try{
		if(Territori[ctrname].jugador==Jugador['jugador'+Turn.turn]){
			document.getElementById(ctrname+'Less').click();
		}
	}
	catch (err){}
}

/* function setonclick3 will set the onclick=clickmoveadd() and oncontextmenu=clickmovetake() attributes
 * for all the image objects in Board*/
function setonclick3(){
	var i, n, str;
	for (var i in Board.children){
		n=i.length;
		str=i.slice(-3, n);
		if (str=="Img"){
			str=i.slice(0, -3);
			Board.children[i].setAttribute("onclick", "clickmoveadd('"+str+"')");
			Board.children[i].setAttribute("oncontextmenu", "javascript:clickmovetake('"+str+"'); return false;");
		}
	}
}

/*function clickmoveadd will click if possible the Countrynore button */
function clickmoveadd(ctrname){
	try{
		if(Territori[ctrname].jugador==Jugador['jugador'+Turn.turn]){
			document.getElementById(ctrname+'more').click();
		}
	}
	catch (err){}
}

/*function clickmovetake will click if possible the Countryless button */
function clickmovetake(ctrname){
	try{
		if(Territori[ctrname].jugador==Jugador['jugador'+Turn.turn]){
			document.getElementById(ctrname+'less').click();
		}
	}
	catch (err){}
}

/* function setonclick2 will set the onclick=selectattackdefense() attribute for all the image objects in Board*/
function setonclick2(){
	var i, n, str;
	for (var i in Board.children){
		n=i.length;
		str=i.slice(-3, n);
		if (str=="Img"){
			str=i.slice(0, -3);
			Board.children[i].setAttribute("onclick", "selectattackdefense('"+str+"')");
		}
	}
}

/*function selectattackdefense will select if possible the attacker or defender country*/
function selectattackdefense(ctrname){
	var i, n;
	escaattackdefense:
	if(Territori[ctrname].jugador==Jugador['jugador'+Turn.turn]){
		n=document.MyTurn.Attacker.options.length;
		for (i=0; i<n; i++){
			if (MyTurn.Attacker.options[i].value==ctrname){
				MyTurn.Attacker.selectedIndex=i;
				Turn.attackdefense=1;
				defend(Turn.turn);
				break escaattackdefense;
			}
		}
	}
	else{
		n=document.MyTurn.Defender.options.length;
		for (i=0; i<n; i++){
			if (MyTurn.Defender.options[i].value==ctrname){
				MyTurn.Defender.selectedIndex=i;
				Turn.attackdefense=0;
				break escaattackdefense;
			}
		}
	}
}

/* function counttroups will return the number of reinforcement troups that a player should have*/
function counttroups(i){
	var j;
	for (var j in Territori){
		if (Territori[j].jugador==Jugador["jugador"+i]){
			Reinforce[j]=Number(Territori[j].tropes);
		}
	}
	Reinforce.troup=0;
	cardtroups(i);
}

/* function cardtroups will check if the player can use his cards, will force him to do so if he has already 5 cards and will
 * give him the option to use them if hi has less than that number, after that it will execute function territoritroups*/
function cardtroups(i){
	if (Jugador["jugador"+i].cards.length==5){
		playcards();
	}
	else if (Jugador["jugador"+i].cards.length>2){
		var name, soldiers=0, horses=0, cannons=0, all=0, joker=0, j;
		for (j=0; j<Jugador["jugador"+i].cards.length; j++){
			name=Jugador['jugador'+i].cards[j];
			if (Cards[name]==0){
				if (soldiers==0){
					all++;
				}
				soldiers++;
			}
			else if (Cards[name]==1){
				if (horses==0){
					all++;
				}
				horses++;
			}
			else if (Cards[name]==2){
				if (cannons==0){
					all++;
				}
				cannons++;
			}
			else if (Cards[name]==3){
				joker++;
			}
		}
		joker=2-joker;
		if (soldiers>joker || horses>joker || cannons>joker || all>joker){
			cards=confirm(Jugador["jugador"+i].name+" vols utilitzar alguna combinaci\363 de cartes?");
			if (cards==true){
				playcards();
			}
			else{
				territoritroups(i);
			}
		}
		else{
			territoritroups(i);
		}
	}
	else{
		territoritroups(i);
	}
}

/*function territoritroups will count the troups in each territori and add reinforcement troups depending on that*/
function territoritroups(i){
	var troups;
	troups=Jugador["jugador"+i].territoris;
	troups=troups/3;
	troups=Math.floor(troups);
	if (troups<3){
		troups=3;
	}
	if (Jugador["jugador"+i].Europa==7){
		troups+=5;
	}
	if (Jugador["jugador"+i].Asia==12){
		troups+=7;
	}
	if (Jugador["jugador"+i].Africa==6){
		troups+=3;
	}
	if (Jugador["jugador"+i].AmericaDelSud==4){
		troups+=2;
	}
	if (Jugador["jugador"+i].AmericaDelNord==9){
		troups+=5;
	}
	if (Jugador["jugador"+i].Oceania==4){
		troups+=2;
	}
	Reinforce.troup+=troups;
	writetroups(i);
}

/*playcards will return the number of troups that a given player should recive because of his cards*/
function playcards(){
	window.open("./PlayCards.html", "Usar cartes", "width=1000, height=500");
}

/* function writetroups changes the html code so the player can decide where to place the reinforcement troups*/
function writetroups(i){
	var text, j;
	text="<center>\n";
	text+='Turn del jugador '+Jugador["jugador"+i].name+', esculli on posar les seves '+Reinforce.troup+' tropes<br><br>';
	text+='<table style="width:80%">\n';
	for (var j in Territori){
		if (Territori[j].jugador==Jugador["jugador"+i]){
			text+='<tr>\n';
			text+='<td>\n<input class="sqrbtn" style="color:red" type="button" name="'+j+'Less" id="'+j+'Less" value="-" onclick="taketroup('+i+', \''+j+'\')">\n</td>\n';
			if (Territori[j].tropes==Reinforce[j]){
				text+='<td align="center">'+Territori[j].name+'</td>\n<td>'+Territori[j].tropes+'</td>\n';	
			}
			else{
				text+='<td align="center">'+Territori[j].name+' + '+(Territori[j].tropes-Reinforce[j])+'</td>\n<td>'+Territori[j].tropes+'</td>\n';
			}
			text+='<td align="right">\n<input class="sqrbtn" style="color:red" type="button" name="'+j+'More" id="'+j+'More" value="+" onclick="addtroup('+i+', \''+j+'\')">\n</td>\n';
			text+='</tr>\n';
		}
	}
	text+='</table>\n';
	text+='<br><input type="button" name="Accept" Id="Accept" value="Acceptar"><br>';
	text+='</center>';
	document.getElementById("MyTurn").innerHTML=text;
}

/*function movetroups is very similar to writetroups function but instead of placing new troups it just moves them and also alerts
 *the player if he is supposed to pick up a card*/
 function movetroups(i){
	var text, j, next;
	next=i;
	next++;
	if (next>Jugador.nombre){
		next=1;
	}
 	if (Turn.territories>0){
 		var rand, card;
 		if (Turn.territories==1){
 			alert(Jugador["jugador"+i].name+' has conquistat un territori, reculls una carta.');
 		}
 		else{
 			alert(Jugador["jugador"+i].name+' has conquistat '+Turn.territories+' territoris, reculls una carta.');
 		}
 		rand=Math.random()*Cards.list.length;
 		rand=Math.floor(rand);
 		if (rand==(Cards.list.length-1)){
 			card=Cards.list.pop();
 		}
 		else{
 			card=Cards.list[rand];
 			Cards.list[rand]=Cards.list.pop();
 		}
 		Jugador["jugador"+i].cards.push(card);
 		Turn.territories=0;
 	}
	text="<center>\n";
	text+='Turn del jugador '+Jugador["jugador"+i].name+' escull on moure les teves '+Turn.troup+' tropes<br><br>';
	text+='<table style="width:80%">\n';
	for (var j in Territori){
		if (Territori[j].jugador==Jugador["jugador"+i]){
			text+='<tr>\n';
			text+='<td>\n<input class="sqrbtn" style="color:red" type="button" name="'+j+'less" id="'+j+'less" value="-" onclick="lesstroup('+i+', \''+j+'\')">\n</td>\n';
			text+='<td align="center">'+Territori[j].name+'</td>\n<td>'+Territori[j].tropes+'</td>\n';	
			text+='<td align="right">\n<input class="sqrbtn" style="color:red" type="button" name="'+j+'more" id="'+j+'more" value="+" onclick="moretroup('+i+', \''+j+'\')">\n</td>\n';
			text+='</tr>\n';
		}
	}
	text+='</table>\n';
	text+='<br><input type="button" name="Next" Id="Next" value="Passar turn" onclick="eraseturn(); reinforcementtroups('+next+');"><br>';
	text+='</center>';
	document.getElementById("MyTurn").innerHTML=text;
 }

/* function lesstroup takes a trpoup off of a given territori and player if possible*/
function lesstroup(i, j){
	if (Territori[j].tropes>1){
		Territori[j].tropes--;
		document.getElementById("h"+Territori[j].identification).innerHTML=Territori[j].tropes;
		Jugador["jugador"+i].tropes--;
		Turn.troup++;
		movetroups(i);
		document.MyTurn.Next.removeAttribute("onclick");
	}
}

/* function moretroup adds a trpoup of a given territori and player if possible*/
function moretroup(i, j){
	if (Turn.troup>0){
		Territori[j].tropes++;
		document.getElementById("h"+Territori[j].identification).innerHTML=Territori[j].tropes;
		Jugador["jugador"+i].tropes++;
		Turn.troup--;
		movetroups(i);
	}
	if (Turn.troup==0){
		var next;
		next=i;
		next++;
		if (next>Jugador.nombre){
			next=1;
		}
		document.MyTurn.Next.setAttribute("onclick", "eraseturn(); reinforcementtroups("+next+");");
	}
	else{
		document.MyTurn.Next.removeAttribute("onclick");
	}
}

/* function taketroup takes a trpoup off of a given territori and player if possible*/
function taketroup(i, j){
	if (Territori[j].tropes>Reinforce[j]){
		Territori[j].tropes--;
		document.getElementById("h"+Territori[j].identification).innerHTML=Territori[j].tropes;
		Jugador["jugador"+i].tropes--;
		Reinforce.troup++;
		writetroups(i);
	}
}

/* function addtroup adds a trpoup of a given territori and player if possible*/
function addtroup(i, j){
	if (Reinforce.troup>0){
		Territori[j].tropes++;
		document.getElementById("h"+Territori[j].identification).innerHTML=Territori[j].tropes;
		Jugador["jugador"+i].tropes++;
		Reinforce.troup--;
		writetroups(i);
	}
	if (Reinforce.troup==0){
		document.MyTurn.Accept.setAttribute("onclick", "erasereinforce(); attac("+i+"); setonclick2();");
	}
}

/* function erasereinforce delates the object Reinforce*/
function erasereinforce(){
	delete Reinforce;
}

/* function eraseturn delates the object Turn*/
function eraseturn(){
	delete Turn;
}

/* function attac will permit a given player to attac from one of his territories to one of the surraunding terrotories*/
function attac(i){
	var text, j, k, ctrname;
	text='<center><table style="width:80%"> <tr> <td> Pais atacant </td> <td> Pais defensor </td> <td> '+Jugador["jugador"+i].name+' </td></tr>';
	text+='<tr><td><select name="Attacker" id="Attacker" onchange="defend('+i+'); MyTurn.attackdefense=1">\n';
	for (var j in Territori){
		if (Territori[j].jugador==Jugador["jugador"+i]){
			if (Territori[j].tropes>1){
				out:
				for (k=0; k<Territori[j].veins.length; k++){
					ctrname=Territori[j].veins[k];
					if (Territori[ctrname].jugador!=Jugador["jugador"+i]){
						text+='<option value="'+j+'">'+Territori[j].name+'</option>\n';
						break out;
					}
				}
			}
		}
	}
	text+='</select> </td>\n';
	text+='<td> <select name="Defender" id="Defender">\n';
	text+='</select> </td>\n';
	text+='<td> <input type="button" name="attackbtn" id="attackbtn" value="Atacar" onclick="popup()"> </td> </tr>';
	text+='</table><br><br>';
	text+='<input type="button" name="movetroupsbtn" id="movetroupsbtn" value="Moure tropes" onclick="movetroups('+i+'); setonclick3();"><br><br>';
	document.MyTurn.innerHTML=text;
	defend(i);
}

/* function defend will permit to select one of the surrounding territories to attac*/
function defend(i){
	var j, attacker, ctrname, text='';
	try{
		j=MyTurn.Attacker.selectedIndex;
		attacker=MyTurn.Attacker.options[j].value;
		attacker=Territori[attacker];
		for (j=0; j<attacker.veins.length; j++){
			ctrname=attacker.veins[j];
			if (Territori[ctrname].jugador!=Jugador["jugador"+i]){
				text+='<option value="'+ctrname+'">'+Territori[ctrname].name+'</option>\n';
			}
		}
	}
	catch (err){
		text='';
	}
	finally{
		document.MyTurn.Defender.innerHTML=text;
	}
}

/* popup() opens a new window where the attac will be developed*/
function popup(){
	battle=window.open("./batalla.html", "Batalla", "width=1000, height=500");
}