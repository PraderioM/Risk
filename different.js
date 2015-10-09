/* function askpassword will give the user the option to write down the password*/
function askpassword(){
	var text;
	text='<input type="password" name="Password" id="Password" placeholder="Contrasenya">&nbsp';
	text+='<input type="submit" name="Accept" id="Accept" value="Acceptar" onclick="checkpassword()">';
	document.getElementById("Options").innerHTML=text;
}

/* function checkpassword will check if the written password is correct and will run differentplayer function
 * if it is correct or will return an error message if it's not*/
function checkpassword(){
	var password;
	password=document.getElementById("Password").value;
	if (password=='Kaede007'){
		differentplayer();
		makechangecolor();
		makechangename();
		makechangehandicap();
		makechangetensiontime();
	}
	else{
		alert("Contrasenya incorrecta");
		document.getElementById("Password").value='';
	}
}

/* function differentplayer will allow the user to select a player and add or erase the selected differences*/
function differentplayer(){
	var text, i;
	text='<center><table style="width:60%"><tr><td align="center" rowspan="2">';
	text+='<select name="Players" id="Players" onchange="playerdifferences()">';
	for (var i in window.opener.Jugador){
		if (i!='nombre'){
			text+='<option value="'+i+'">'+window.opener.Jugador[i].name+'</option>';
		}
	}
	text+='</select></td>';
	text+='<td rowspan="2" align="right"><select multiple name="Different" id="Different"></select></td>';
	text+='<td align="center"><input type="button" style="width:24px" value="->" onclick="erasedifferences()"></td>';
	text+='<td rowspan="2"><select multiple name="Equal" id="Equal"></select></td></tr><tr><td align="center">';
	text+='<input type="button" style="width:24px" value="<-" onclick="adddifferences()"></td></tr>';
	text+='</table></center>';
	document.Options.innerHTML=text;
	playerdifferences();
}

/* function playerdifferences runs functions playerdifferent and playerequal*/
function playerdifferences(){
	playerdifferent();
	playerequal();
}

/* function playerdifferent will fill the Different multiple select*/
function playerdifferent(){
	var text='', i, player;
	player=document.getElementById("Players").selectedIndex;
	player=document.getElementById("Players").options[player].value;
	player=window.opener.Jugador[player];
	for (i=0; i<player.attackdifferent.length; i++){
		text+='<option value="'+player.attackdifferent[i]+'">'+window.opener.Differences[player.attackdifferent[i]].name+'</option>';
 	}
 	for (i=0; i<player.defensedifferent.length; i++){
 		text+='<option value="'+player.defensedifferent[i]+'">'+window.opener.Differences[player.defensedifferent[i]].name+'</option>';
	}
	document.getElementById("Different").innerHTML=text;
}

/* function playerequal will fill the Equal multiple select*/
function playerequal(){
	var text='', i, player;
	player=document.getElementById("Players").selectedIndex;
	player=document.getElementById("Players").options[player].value;
	player=window.opener.Jugador[player];
	for (i=0; i<player.equal.length; i++){
		text+='<option value="'+player.equal[i]+'">'+window.opener.Differences[player.equal[i]].name+'</option>';
	}
	document.getElementById("Equal").innerHTML=text;
}

/*function erasedifferences will erase the selected differences from the seleced player*/
function erasedifferences(){
	var i, n, m, player, difference;
	try{
		player=document.getElementById("Players").selectedIndex;
		player=document.getElementById("Players").options[player].value;
		player=window.opener.Jugador[player];
		n=player.attackdifferent.length;
		m=player.defensedifferent.length;
		i=1*n+1*m-1;
		if (document.getElementById("Different").options[i].selected){
			difference=document.getElementById("Different").options[i].value;
			player.defensedifferent.pop();
			player.equal.push(difference);
		}
		for (i=(1*n+1*m-2); i>=n; i--){
			if (document.getElementById("Different").options[i].selected){
				difference=document.getElementById("Different").options[i].value;
				player.defensedifferent.splice(i-n, 1);
				player.equal.push(difference);
			}
		}
		i=1*n-1
		if (document.getElementById("Different").options[i].selected){
			difference=document.getElementById("Different").options[i].value;
			player.attackdifferent.pop();
			player.equal.push(difference);
		}
		for (i=(1*n-2); i>=0; i--){
			if (document.getElementById("Different").options[i].selected){
				difference=document.getElementById("Different").options[i].value;
				player.defensedifferent.splice(i, 1);
				player.equal.push(difference);
			}
		}
		playerdifferences();
	}
	catch (err){}
}

/* function adddifference will add the selecteddifferences to the selected player*/
function adddifferences(){
	var i, n, player, difference;
	try{
		player=document.getElementById("Players").selectedIndex;
		player=document.getElementById("Players").options[player].value;
		player=window.opener.Jugador[player];
		n=player.equal.length;
		i=n-1;
		if (document.getElementById("Equal").options[i].selected){
			difference=document.getElementById("Equal").options[i].value;
			player.equal.pop();
			if (window.opener.Differences[difference].when=='attack'){
				player.attackdifferent.push(difference);
			}
			else{
				player.defensedifferent.push(difference);
			}
		}
		for (i=n-2; i>=0; i--){
			if (document.getElementById("Equal").options[i].selected){
				difference=document.getElementById("Equal").options[i].value;
				player.equal.splice(i, 1);
				if (window.opener.Differences[difference].where=='attack'){
					player.attackdifferent.push(difference);
				}
				else{
					player.defensedifferent.push(difference);
				}
			}
		}
		playerdifferences();
	}
	catch (err){}
}

/*function makechangecolor will allow to select a player and change his color*/
function makechangecolor(){
	var text, i, n, english, catalan;
	english=['red', 'white', 'yellow', 'black', 'orange', 'green', 'blue', 'Zoro', 'WhiteBeard', 'Luffy', 'Chopper', 'Franky', 'Sanji', 'Brook', 'Nami', 'Robin', 'Usopp', 'Sogeking', 'LunaLovegood', 'Caca', 'AlanTuring', 'GuySensei', 'GuyMotivated', 'GuyReallyMotivated', 'GuyExtremlyMotivated', 'RockLee', 'LeeMotivated', 'Moncasi', 'Sauron', 'SauronEye', 'Auri', 'Kvothe', 'Raruto', 'Zap'];
	catalan=['Targaryen', 'Stark', 'Lannister', 'Baratheon', 'Martell', 'Tyrell', 'Arpy', 'Roronoa Zoro', 'Edward Newgate (Barbablanca)', 'Monkey D Luffy', 'Tony Tony Chopper', 'Cutty Flam (Franky)', 'Kuroashi no Sanji', 'Brook el cantaire', 'Nami la gata ladrona', 'Nico Robin', 'God Usopp', 'Sogeking el rey dels tiradors', 'Luna Lovegood', 'Caca', 'Alan Turing', 'Maito Gai', 'Maito Gai motivat', 'Maito Gai molt motivat', 'Maito Gai extremadament motivat', 'Rock Lee', 'Rock Lee motivat', 'Jaume Solsona Moncasi', 'Sauron', 'Ull de Sauron', 'Auri', 'Kvothe', 'Zumomaki Raruto', 'Zap'];
	text='<br><center><table style="width:60%"><tr>';
	text+='<td><select id="PlayerColor" name="PlayerColor">';
	n=window.opener.Jugador.nombre;
	for (i=1; i<=n; i++){
		text+='<option value="jugador'+i+'">'+window.opener.Jugador['jugador'+i].name+'</option>';
	}
	text+='</select></td><td><select id="SelectedColor" name="SelectedColor">';
	n=english.length;
	for (i=0; i<n; i++){
		text+='<option value="'+english[i]+'">'+catalan[i]+'</option>';
	}
	text+='</select></td><td><input type="button" name="ChangeColor" id="ChangeColor" onclick="changecolor();" value="Cambiar color">';
	text+='</td></tr></table></center>';
	document.getElementById("Colors").innerHTML=text;
}

/* function changecolor will change the image of the selected player for the selected image*/
function changecolor(){
	var player, color;
	player=document.getElementById('PlayerColor').selectedIndex;
	player=document.getElementById('PlayerColor').options[player].value;
	color=document.getElementById('SelectedColor').selectedIndex;
	color=document.getElementById('SelectedColor').options[color].value;
	window.opener.Jugador[player].troupcolor=color;
	window.opener.refresh();
}

/*function makechangename will allow to select a player and change his name*/
function makechangename(){
	var text, i, n;
	text='<br><center><table style="width:60%"><tr>';
	text+='<td><select id="PlayerName" name="PlayerName">';
	n=window.opener.Jugador.nombre;
	for (i=1; i<=n; i++){
		text+='<option value="jugador'+i+'">'+window.opener.Jugador['jugador'+i].name+'</option>';
	}
	text+='</select></td><td><input type="text" id="NewName" name="NewName" placeholder="Nom Nou">';
	text+='</select></td><td><input type="button" name="ChangeName" id="ChangeName" onclick="changename();" value="Cambiar nom">';
	text+='</td></tr></table></center>';
	document.getElementById("Names").innerHTML=text;
}

/* function changename will change the name of the selected player for the selected name*/
function changename(){
	var player, name;
	player=document.getElementById('PlayerName').selectedIndex;
	player=document.getElementById('PlayerName').options[player].value;
	name=document.getElementById('NewName').value;
	window.opener.Jugador[player].name=name;
	window.opener.mostrarcates();
	window.opener.mostrarterritoris();
	window.opener.makelegend(window.opener.Jugador.nombre);
}

/*function makechangehandicap will allow to select a player and change his handicap*/
function makechangehandicap(){
	var text, i, n;
	text='<br><center><table style="width:60%"><tr>';
	text+='<td><select id="PlayerHandicap" name="PlayerHandicap" onchange="selecthandicap()">';
	n=window.opener.Jugador.nombre;
	for (i=1; i<=n; i++){
		text+='<option value="jugador'+i+'">'+window.opener.Jugador['jugador'+i].name+'</option>';
	}
	text+='</select></td><td>';
	text+='<select name="SelectedHandicap" id="SelectedHandicap">';
	for (i=-100; i<101; i++){
		text+='<option value="'+i+'">'+i+'</option>';
	}
	text+='</select></td><td><input type="button" name="ChangeHandicap" id="ChangeHandicap" onclick="changehandicap();" value="Cambiar handicap">';
	text+='</td></tr></table></center>';
	document.getElementById("Handicap").innerHTML=text;
	selecthandicap();
}

/* function changehandicap will change the handicap of the selected player for the selected handicap*/
function changehandicap(){
	var player, handicap;
	player=document.getElementById('PlayerHandicap').selectedIndex;
	player=document.getElementById('PlayerHandicap').options[player].value;
	handicap=document.getElementById('SelectedHandicap').selectedIndex;
	handicap=document.getElementById('SelectedHandicap').options[handicap].value;
	window.opener.Jugador[player].handicap=handicap;
}

/*function selecthandicap will select de handicap value of a given player*/
function selecthandicap(){
	var i, player;
	player=document.getElementById('PlayerHandicap').selectedIndex;
	player=document.getElementById('PlayerHandicap').options[player].value;
	handicap=window.opener.Jugador[player].handicap;
	document.getElementById('SelectedHandicap').selectedIndex=1*handicap+100;
}

/* function makechangetensiontime will allow to change the time that the programs waits from one throwing of
 * dices to the next*/
 function makechangetensiontime(){
 	var text;
 	text="<br><center>Escriu la cuantitat de temps (en segons) entre tirada i tirada de daus &nbsp";
 	text+='<input type="text" placeholder="'+window.opener.tensiontime/1000+'" name="HowMuchWaiting" id="HowMuchWaiting"> &nbsp';
 	text+='<input type="button" value="Cambiar temps" name="ChangeTime" id="ChangeTime" onclick="changetime()">';
 	document.getElementById('WaitTime').innerHTML=text;
 }

 /* function changetime will change the time the program waits from one throwing of dices to the next*/
 function changetime(){
 	var time;
 	time=document.getElementById('HowMuchWaiting').value;
 	time=time*1000;
 	window.opener.tensiontime=time;
 }