/* fem una funció que ens permeti establir les condicions inicials de la partida*/
function condicionsinicials(){
	var jugadors;
	introduirdiferencies();
	setboard();
	introduirpaisos();
	introduircartes();
	jugadors=introduirnoms();
	Jugador.nombre=jugadors;
	tensiontime=1500;
	window.open("./ChoseColors.html", "Escollir colors", "width=1000, height=500");
}

/* function introduirdiferencies will create an object with multiple attributes that will lead to images*/
function introduirdiferencies(){
	Differences=new Object();
	Differences.ChineseA=new Object();
	Differences.ChineseA.name='You bring great dishonor attacker';
	Differences.ChineseA.where='attack';
	Differences.ChineseA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/Chinese.jpg';
	Differences.ChineseD=new Object();
	Differences.ChineseD.name='You bring great dishonor defender';
	Differences.ChineseD.where='defense';
	Differences.ChineseD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/Chinese.jpg';
	Differences.DiceProblemA=new Object();
	Differences.DiceProblemA.name='Intenta cambiar dau atacant';
	Differences.DiceProblemA.where='attack';
	Differences.DiceProblemA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/DiceProblem.jpg';
	Differences.DiceProblemD=new Object();
	Differences.DiceProblemD.name='Intenta cambiar dau defensor';
	Differences.DiceProblemD.where='defense';
	Differences.DiceProblemD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/DiceProblem.jpg';
	Differences.DicesA=new Object();
	Differences.DicesA.name='Has perdut atacant';
	Differences.DicesA.where='attack';
	Differences.DicesA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/Dices.jpg';
	Differences.DicesD=new Object();
	Differences.DicesD.name='Has perdut defensor';
	Differences.DicesD.where='defense';
	Differences.DicesD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/Dices.jpg';
	Differences.EncontradoTusSeisA=new Object();
	Differences.EncontradoTusSeisA.name='Has perdut els teus sisos atacant';
	Differences.EncontradoTusSeisA.where='attack';
	Differences.EncontradoTusSeisA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/EncontradoTusSeis.jpg';
	Differences.EncontradoTusSeisD=new Object();
	Differences.EncontradoTusSeisD.name='Has perdut els teus sisos defensor';
	Differences.EncontradoTusSeisD.where='defense';
	Differences.EncontradoTusSeisD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/EncontradoTusSeis.jpg';
	Differences.MeRioEnTuCaraGatoA=new Object();
	Differences.MeRioEnTuCaraGatoA.name='Un gat es riu a la teva cara atacant';
	Differences.MeRioEnTuCaraGatoA.where='attack';
	Differences.MeRioEnTuCaraGatoA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/MeRioEnTuCaraGato.jpg';
	Differences.MeRioEnTuCaraGatoD=new Object();
	Differences.MeRioEnTuCaraGatoD.name='Un gat es riu a la teva cara defensor';
	Differences.MeRioEnTuCaraGatoD.where='defense';
	Differences.MeRioEnTuCaraGatoD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/MeRioEnTuCaraGato.jpg';
	Differences.MeRioEnTuCaraPerroA=new Object();
	Differences.MeRioEnTuCaraPerroA.name='Un gos es riu a la teva cara atacant';
	Differences.MeRioEnTuCaraPerroA.where='attack';
	Differences.MeRioEnTuCaraPerroA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/MeRioEnTuCaraPerro.jpg';
	Differences.MeRioEnTuCaraPerroD=new Object();
	Differences.MeRioEnTuCaraPerroD.name='Un gos es riu a la teva cara defensor';
	Differences.MeRioEnTuCaraPerroD.where='defense';
	Differences.MeRioEnTuCaraPerroD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/MeRioEnTuCaraPerro.jpg';
	Differences.NelsonA=new Object();
	Differences.NelsonA.name='Ha Ha atacant';
	Differences.NelsonA.where='attack';
	Differences.NelsonA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/Nelson.jpg';
	Differences.NelsonD=new Object();
	Differences.NelsonD.name='Ha Ha defensor';
	Differences.NelsonD.where='defense';
	Differences.NelsonD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/Nelson.jpg';
	Differences.NoobAmericaA=new Object();
	Differences.NoobAmericaA.name='You are a noob attacker';
	Differences.NoobAmericaA.where='attack';
	Differences.NoobAmericaA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/NoobAmerica.jpg';
	Differences.NoobAmericaD=new Object();
	Differences.NoobAmericaD.name='You are a noob defender';
	Differences.NoobAmericaD.where='defense';
	Differences.NoobAmericaD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/NoobAmerica.jpg';
	Differences.NoobSensorA=new Object();
	Differences.NoobSensorA.name='I sense a high noob disturbance attacker';
	Differences.NoobSensorA.where='attack';
	Differences.NoobSensorA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/NoobSensor.jpg';
	Differences.NoobSensorD=new Object();
	Differences.NoobSensorD.name='I sense a high noob disturbance defender';
	Differences.NoobSensorD.where='defense';
	Differences.NoobSensorD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/NoobSensor.jpg';
	Differences.NoobVegetaA=new Object();
	Differences.NoobVegetaA.name='It\'s over 9000 noob points attacker';
	Differences.NoobVegetaA.where='attack';
	Differences.NoobVegetaA.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/NoobVegeta.jpg';
	Differences.NoobVegetaD=new Object();
	Differences.NoobVegetaD.name='It\'s over 9000 noob points defender';
	Differences.NoobVegetaD.where='defense';
	Differences.NoobVegetaD.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/NoobVegeta.jpg';
	Differences.SeanBean=new Object();
	Differences.SeanBean.name='Objectiu superar en Sean Bean';
	Differences.SeanBean.where='defense';
	Differences.SeanBean.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/SeanBean.jpg';
	Differences.SeanBeanRieEnTuCara=new Object();
	Differences.SeanBeanRieEnTuCara.name='Sean Bean es riu de tu';
	Differences.SeanBeanRieEnTuCara.where='defense';
	Differences.SeanBeanRieEnTuCara.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/SeanBeanRieEnTuCara.jpg';
	Differences.SerQuerido=new Object();
	Differences.SerQuerido.name='Tragica mort de un esser que estimes';
	Differences.SerQuerido.where='defense';
	Differences.SerQuerido.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/SerQuerido.jpg';
	Differences.MaldiceAlDestino=new Object();
	Differences.MaldiceAlDestino.name='Roronoa Zoro';
	Differences.MaldiceAlDestino.where='attack';
	Differences.MaldiceAlDestino.direction='file:///home/marco/Baixades/ProgramesEnJavaScript/Risk/Images/Defeat/MaldiceAlDestino.png';
}

/*continuem amb la funció anterior després d'haver deixat que els jugadors escullissin els colors*/
function continuecondicionsinicials(jugadors){
	makeplayerimage();
	mostrarterritoris();
	mostrarcates();
	makedifferent();
	colocartropa((Territori.nombre%jugadors)+1, jugadors);
	makelegend(jugadors);
	setonclick();
}

/* makeplayerimage will make a div object on the left of the board to be filled with the player image*/
function makeplayerimage(){
	var text;
	text='<div style="position:absolute; left:5px; top:5px;"><img height="150px" name="PlayerColor" id="PlayerColor"></div>';
	document.getElementById('Board').innerHTML+=text;
}

/* function loadplayerimage will load the player image on the PlayerColor image*/
function loadplayerimage(i){
	document.getElementById('PlayerColor').src="Images/Colors/"+Jugador["jugador"+i].troupcolor+".png";
}

/* function setonclick will set the onclick=selectcountryplayer attribute for all the image objects in Board*/
function setonclick(){
	var i, n, str;
	for (var i in Board.children){
		n=i.length;
		str=i.slice(-3, n);
		if (str=="Img"){
			str=i.slice(0, -3);
			Board.children[i].setAttribute("onclick", "selectcountryplayer('"+str+"')");
		}
	}
}

/* function selectattackdefense will select if possible the country where the player wishes to put his troups and will
 * click the 'acceptar' button*/
function selectcountryplayer(ctrname){
	var i, n, selection;
	selection=document.getElementById('paisos_jugador');
	n=selection.options.length;
	esccountryplayer:
	for (i=0; i<n; i++){
		if (selection.options[i].value==ctrname){
			selection.selectedIndex=i;
			document.getElementById('acceptar').click();
			break esccountryplayer;
		}
	}
}

/*function setboard loads the risk board and shows it*/
function setboard(){
	text='<img src="Images/taulell.PNG" name="BoardImage" id="BoardImage" style="position: absolute; left:235px;">';
	text+='<img name="AfganistanImg" id="AfganistanImg" height="30px" style="position: absolute; left:735px; top:195px;">';
	text+='<p name="hAfganistan" id="hAfganistan" style="position: absolute; left:735px; top:150px; color: black; left:735px; top:165px;"></p>';
	text+='<img name="AfricaDelNordImg" id="AfricaDelNordImg" height="30px" style="position: absolute; left:574px; top:255px;">';
	text+='<p name="hAfricaDelNord" id="hAfricaDelNord" style="position: absolute; color: black; left:574px; top:271px;"></p>';
	text+='<img name="AfricaDelSudImg" id="AfricaDelSudImg" height="30px" style="position:absolute; left:602px; top:401px;">';
	text+='<p name="hAfricaDelSud" id="hAfricaDelSud" style="position: absolute; color: black; left:630px; top:401px;"></p>';
	text+='<img name="AfricaOrientalImg" id="AfricaOrientalImg" height="30px" style="position:absolute; left:645px; top:298px;">';
	text+='<p name="hAfricaOriental" id="hAfricaOriental" style="position: absolute; color: black; left:668px; top:303px;"></p>';
	text+='<img name="AlaskaImg" id="AlaskaImg" height="30px" style="position: absolute; left:270px; top:85px;">';
	text+='<p name="hAlaska" id="hAlaska" style="position: absolute; color: black; left:295px; top:75px;"></p>';
	text+='<img name="AlbertaImg" id="AlbertaImg" height="30px" style="position:absolute; left:335px; top:119px;">';
	text+='<p name="hAlberta" id="hAlberta" style="position: absolute; color: black; left:360px; top:104px;"></p>';
	text+='<img name="AmericaCentralImg" id="AmericaCentralImg" height="30px" style="position:absolute; left:372px; top:224px;">';
	text+='<p name="hAmericaCentral" id="hAmericaCentral" style="position: absolute; color: black; left:393px; top:223px;"></p>';
	text+='<img name="ArgentinaImg" id="ArgentinaImg" height="30px" style="position:absolute; left:419px; top:417px;">';
	text+='<p name="hArgentina" id="hArgentina" style="position: absolute; color: black; left:411px; top:434px;"></p>';
	text+='<img name="AustraliaOccidentalImg" id="AustraliaOccidentalImg" height="30px" style="position:absolute; left:862px; top:388px;">';
	text+='<p name="hAustraliaOccidental" id="hAustraliaOccidental" style="position: absolute; color: black; left:840px; top:387px;"></p>';
	text+='<img name="AustraliaOrientalImg" id="AustraliaOrientalImg" height="30px" style="position:absolute; left:920px; top:417px;">';
	text+='<p name="hAustraliaOriental" id="hAustraliaOriental" style="position: absolute; color: black; left:940px; top:417px;"></p>';
	text+='<img name="BrasilImg" id="BrasilImg" height="30px" style="position:absolute; left:464px; top:311px;">';
	text+='<p name="hBrasil" id="hBrasil" style="position: absolute; color: black; left:464px; top:328px;"></p>';
	text+='<img name="ChinaImg" id="ChinaImg" height="30px" style="position:absolute; left:828px; top:205px;">';
	text+='<p name="hChina" id="hChina" style="position: absolute; color: black; left:848px; top:205px;"></p>';
	text+='<img name="CongoImg" id="CongoImg" height="30px" style="position:absolute; left:615px; top:340px;">';
	text+='<p name="hCongo" id="hCongo" style="position: absolute; color: black; left:634px; top:340px;"></p>';
	text+='<img name="EgipteImg" id="EgipteImg" height="30px" style="position:absolute; left:635px; top:250px;">';
	text+='<p name="hEgipte" id="hEgipte" style="position: absolute; color: black; left:615px; top:248px;"></p>';
	text+='<img name="EscandinaviaImg" id="EscandinaviaImg" height="30px" style="position:absolute; left:618px; top:97px;">';
	text+='<p name="hEscandinavia" id="hEscandinavia" style="position: absolute; color: black; left:618px; top:68px;"></p>';
	text+='<img name="EstatsUnitsDelEstImg" id="EstatsUnitsDelEstImg" height="30px" style="position:absolute; left:410px; top:189px;">';
	text+='<p name="hEstatsUnitsDelEst" id="hEstatsUnitsDelEst" style="position: absolute; color: black; left:412px; top:160px;"></p>';
	text+='<img name="EstatsUnitsDelOestImg" id="EstatsUnitsDelOestImg" height="30px" style="position:absolute; left:373px; top:162px;">';
	text+='<p name="hEstatsUnitsDelOest" id="hEstatsUnitsDelOest" style="position: absolute; color: black; left:362px; top:179px;"></p>';
	text+='<img name="EuropaDelNordImg" id="EuropaDelNordImg" height="30px" style="position:absolute; left:606px; top:154px;">';
	text+='<p name="hEuropaDelNord" id="hEuropaDelNord" style="position: absolute; color: black; left:626px; top:154px;"></p>';
	text+='<img name="EuropaDelSudImg" id="EuropaDelSudImg" height="30px" style="position:absolute; left:605px; top:202px;">';
	text+='<p name="hEuropaDelSud" id="hEuropaDelSud" style="position: absolute; color: black; left:635px; top:200px;"></p>';
	text+='<img name="EuropaOccidentalImg" id="EuropaOccidentalImg" height="30px" style="position:absolute; left:570px; top:185px;">';
	text+='<p name="hEuropaOccidental" id="hEuropaOccidental" style="position: absolute; color: black; left:560px; top:200px;"></p>';
	text+='<img name="GranBretanyaImg" id="GranBretanyaImg" height="30px" style="position:absolute; left:566px; top:130px;">';
	text+='<p name="hGranBretanya" id="hGranBretanya" style="position: absolute; color: black; left:573px; top:145px;"></p>';
	text+='<img name="GroenlandiaImg" id="GroenlandiaImg" height="30px" style="position:absolute; left:538px; top:28px;">';
	text+='<p name="hGroenlandia" id="hGroenlandia" style="position: absolute; color: black; left:538px; top:43px;"></p>';
	text+='<img name="IndiaImg" id="IndiaImg" height="30px" style="position:absolute; left:752px; top:239px;">';
	text+='<p name="hIndia" id="hIndia" style="position: absolute; color: black; left:762px; top:254px;"></p>';
	text+='<img name="IndonesiaImg" id="IndonesiaImg" height="30px" style="position:absolute; left:830px; top:319px;">';
	text+='<p name="hIndonesia" id="hIndonesia" style="position: absolute; color: black; left:860px; top:319px;"></p>';
	text+='<img name="IrkutskImg" id="IrkutskImg" height="30px" style="position:absolute; left:856px; top:120px;">';
	text+='<p name="hIrkutsk" id="hIrkutsk" style="position: absolute; color: black; left:880px; top:120px;"></p>';
	text+='<img name="IslandiaImg" id="IslandiaImg" height="30px" style="position:absolute; left:556px; top:94px;">';
	text+='<p name="hIslandia" id="hIslandia" style="position: absolute; color: black; left:555px; top:105px;"></p>';
	text+='<img name="JapoImg" id="JapoImg" height="30px" style="position:absolute; left:927px; top:179px;">';
	text+='<p name="hJapo" id="hJapo" style="position: absolute; color: black; left:935px; top:194px;"></p>';
	text+='<img name="KamchatkaImg" id="KamchatkaImg" height="30px" style="position:absolute; left:964px; top:77px;">';
	text+='<p name="hKamchatka" id="hKamchatka" style="position: absolute; color: black; left:970px; top:90px;"></p>';
	text+='<img name="MadagascarImg" id="MadagascarImg" height="30px" style="position:absolute; left:689px; top:400px;">';
	text+='<p name="hMadagascar" id="hMadagascar" style="position: absolute; color: black; left:689px; top:425px;"></p>';
	text+='<img name="MongoliaImg" id="MongoliaImg" height="30px" style="position:absolute; left:868px; top:158px;">';
	text+='<p name="hMongolia" id="hMongolia" style="position: absolute; color: black; left:895px; top:158px;"></p>';
	text+='<img name="NovaGuineaImg" id="NovaGuineaImg" height="30px" style="position:absolute; left:937px; top:334px;">';
	text+='<p name="hNovaGuinea" id="hNovaGuinea" style="position: absolute; color: black; left:937px; top:349px;"></p>';
	text+='<img name="OntarioImg" id="OntarioImg" height="30px" style="position:absolute; left:405px; top:110px;">';
	text+='<p name="hOntario" id="hOntario" style="position: absolute; color: black; left:410px; top:121px;"></p>';
	text+='<img name="OrientMigImg" id="OrientMigImg" height="30px" style="position:absolute; left:680px; top:224px;">';
	text+='<p name="hOrientMig" id="hOrientMig" style="position: absolute; color: black; left:705px; top:224px;"></p>';
	text+='<img name="PeruImg" id="PeruImg" height="30px" style="position:absolute; left:399px; top:356px;">';
	text+='<p name="hPeru" id="hPeru" style="position: absolute; color: black; left:425px; top:355px;"></p>';
	text+='<img name="QuebecImg" id="QuebecImg" height="30px" style="position:absolute; left:465px; top:118px;">';
	text+='<p name="hQuebec" id="hQuebec" style="position: absolute; color: black; left:490px; top:118px;"></p>';
	text+='<img name="SiamImg" id="SiamImg" height="30px" style="position:absolute; left:830px; top:266px;">';
	text+='<p name="hSiam" id="hSiam" style="position: absolute; color: black; left:860px; top:273px;"></p>';
	text+='<img name="SiberiaImg" id="SiberiaImg" height="30px" style="position:absolute; left:799px; top:82px;">';
	text+='<p name="hSiberia" id="hSiberia" style="position: absolute; color: black; left:799px; top:97px;"></p>';
	text+='<img name="TerritoriDelNoroestImg" id="TerritoriDelNoroestImg" height="30px" style="position: absolute; left:380px; top:82px;">';
	text+='<p name="hTerritoriDelNoroest" id="hTerritoriDelNoroest" style="position: absolute; color: black; left:355px; top:60px;"></p>';
	text+='<img name="UcraniaImg" id="UcraniaImg" height="30px" style="position:absolute; left:680px; top:109px;">';
	text+='<p name="hUcrania" id="hUcrania" style="position: absolute; color: black; left:680px; top:124px;"></p>';
	text+='<img name="UralImg" id="UralImg" height="30px" style="position:absolute; left:750px; top:95px;">';
	text+='<p name="hUral" id="hUral" style="position: absolute; color: black; left:750px; top:110px;"></p>';
	text+='<img name="VenezuelaImg" id="VenezuelaImg" height="30px" style="position:absolute; left:389px; top:270px;">';
	text+='<p name="hVenezuela" id="hVenezuela" style="position: absolute; color: black; left:389px; top:285px;"></p>';
	text+='<img name="YakutskImg" id="YakutskImg" height="30px" style="position:absolute; left:875px; top:74px;">';
	text+='<p name="hYakutsk" id="hYakutsk" style="position: absolute; color: black; left:900px; top:74px;"></p>';
	document.getElementById('Board').innerHTML=text;
}

/* function introduircartes will create an object called Card with information of the figure related to every country
 * 0=soldier, 1=horse, 2=cannon, 3=joker*/
function introduircartes(){
	var j;
	Cards= new Object();
	Cards.list=[];
	for (var j in Territori){
		if (j!='nombre'){
			Cards.list.push(j);
		}
	}
	Cards.list.push('Joker1');
	Cards.list.push('Joker2');
	Cards.Afganistan=0;
	Cards.AfricaDelNord=0;
	Cards.AfricaDelSud=2;
	Cards.AfricaOriental=2;
	Cards.Alaska=0;
	Cards.Alberta=0;
	Cards.AmericaCentral=1;
	Cards.Argentina=0;
	Cards.AustraliaOccidental=2;
	Cards.AustraliaOriental=0;
	Cards.Brasil=2;
	Cards.China=1;
	Cards.Congo=1;
	Cards.Egipte=0;
	Cards.Escandinavia=2;
	Cards.EstatsUnitsDelEst=2;
	Cards.EstatsUnitsDelOest=0;
	Cards.EuropaDelNord=1;
	Cards.EuropaDelSud=1;
	Cards.EuropaOccidental=0;
	Cards.GranBretanya=1;
	Cards.Groenlandia=1;
	Cards.India=0;
	Cards.Indonesia=1;
	Cards.Irkutsk=0;
	Cards.Islandia=0;
	Cards.Japo=0;
	Cards.Kamchatka=1;
	Cards.Madagascar=0;
	Cards.Mongolia=2;
	Cards.NovaGuinea=1;
	Cards.Ontario=1;
	Cards.OrientMig=2;
	Cards.Peru=1;
	Cards.Quebec=2;
	Cards.Siam=2;
	Cards.Siberia=2;
	Cards.TerritoriDelNoroest=2;
	Cards.Ucrania=2;
	Cards.Ural=1;
	Cards.Venezuela=2;
	Cards.Yakutsk=1;
	Cards.Joker1=3;
	Cards.Joker2=3;
}

/* makelegend will write a legend on the right of the board*/
function makelegend(n){
	var text, i, top=0;
	text='';
	for (i=1; i<=n; i++){
		text+='<div name="jugador'+i+'Div" id="jugador'+i+'Div" id="" style="position:absolute; left:1050px; top:'+(1*top+1*2)+'px;"></div>';
		text+='<div style="position:absolute; left:1150px; top:'+(top+2)+'px;">';
		text+='<img height="20px" name="jugador'+i+'Color" id="jugador'+i+'Color"></div>\n';
		top=1*top+1*50;
	}
	document.getElementById('Board').innerHTML+=text;
	for (i=1; i<=n; i++){
		document.getElementById('jugador'+i+'Color').src="Images/Colors/"+Jugador["jugador"+i].troupcolor+".png";
		document.getElementById('jugador'+i+'Div').innerHTML=Jugador["jugador"+i].name;
	}
}

/* fem una funcio per crear un jugador amb un nom, un nombre de territoris, el nombre de tropes
 * i el nombre de territoris de un continent*/ 
function crearjugador (jugador, turn){
	this.name=jugador;
	this.turn=turn;
	this.territoris=0;
	this.tropes=0;
	this.handicap=0;
	this.cards=[];
	this.troupcolor='';
	this.attackdifferent=[];
	this.defensedifferent=[];
	this.equal=[];
	for (var i in Differences){
		this.equal.push(i);
	}
	this.Europa=0;
	this.Asia=0;
	this.Africa=0;
	this.AmericaDelSud=0;
	this.AmericaDelNord=0;
	this.Oceania=0;
}

/* fem una funció per crear un territori amb un nom, el nombre de soldats
 * en el territori, el proprietari del territori, el seu continent i els territoris adjacents*/
function crearterritori (territori, Continent, truename){
	this.name=territori;
	this.tropes=0;
	this.jugador=null;
	this.continent=Continent;
	this.veins=[];
	this.identification=truename;
}

/*fem una funció que que crei un objecte per a cada territori del taulell de risk*/
function introduirpaisos(){
	Territori=new Object();
	Territori.nombre=42;
	Territori.Afganistan= new crearterritori("Afganistan", "Asia", "Afganistan");
	Territori.AfricaDelNord= new crearterritori("\300frica del nord", "Africa", "AfricaDelNord");
	Territori.AfricaDelSud= new crearterritori("\300frica del sud", "Africa", "AfricaDelSud");
	Territori.AfricaOriental= new crearterritori("\300frica oriental", "Africa", "AfricaOriental");
	Territori.Alaska=new crearterritori("Alaska", "AmericaDelNord", "Alaska");
	Territori.Alberta=new crearterritori("Alberta", "AmericaDelNord", "Alberta");
	Territori.AmericaCentral=new crearterritori("Am\350rica central", "AmericaDelNord", "AmericaCentral");
	Territori.Argentina=new crearterritori("Argentina", "AmericaDelSud", "Argentina");
	Territori.AustraliaOccidental= new crearterritori("Australia occidental", "Oceania", "AustraliaOccidental");
	Territori.AustraliaOriental= new crearterritori("Australia oriental", "Oceania", "AustraliaOriental");
	Territori.Brasil=new crearterritori("Brasil", "AmericaDelSud", "Brasil");
	Territori.China= new crearterritori("China", "Asia", "China");
	Territori.Congo= new crearterritori("Congo", "Africa", "Congo");
	Territori.Egipte= new crearterritori("Egipte", "Africa", "Egipte");
	Territori.Escandinavia= new crearterritori("Escandinavia", "Europa", "Escandinavia");
	Territori.EstatsUnitsDelEst=new crearterritori("Estats units del est", "AmericaDelNord", "EstatsUnitsDelEst");
	Territori.EstatsUnitsDelOest=new crearterritori("Estats units del oest", "AmericaDelNord", "EstatsUnitsDelOest");
	Territori.EuropaDelNord= new crearterritori("Europa del nord", "Europa", "EuropaDelNord");
	Territori.EuropaDelSud= new crearterritori("Europa del sud", "Europa", "EuropaDelSud");
	Territori.EuropaOccidental= new crearterritori("Europa occidental", "Europa", "EuropaOccidental");
	Territori.GranBretanya= new crearterritori("Gran bretanya", "Europa", "GranBretanya");
	Territori.Groenlandia=new crearterritori("Groenlandia", "AmericaDelNord", "Groenlandia");
	Territori.India= new crearterritori("India", "Asia", "India");
	Territori.Indonesia= new crearterritori("Indonesia", "Oceania", "Indonesia");
	Territori.Irkutsk= new crearterritori("Irkutsk", "Asia", "Irkutsk");
	Territori.Islandia= new crearterritori("Islandia", "Europa", "Islandia");
	Territori.Japo= new crearterritori("Jap\363", "Asia", "Japo");
	Territori.Kamchatka= new crearterritori("Kamchatka", "Asia", "Kamchatka");
	Territori.Madagascar= new crearterritori("Madagascar", "Africa", "Madagascar");
	Territori.Mongolia= new crearterritori("Mongolia", "Asia", "Mongolia");
	Territori.NovaGuinea= new crearterritori("Nova Guinea", "Oceania", "NovaGuinea");
	Territori.Ontario=new crearterritori("Ontario", "AmericaDelNord", "Ontario");
	Territori.OrientMig= new crearterritori("Orient mig", "Asia", "OrientMig");
	Territori.Peru=new crearterritori("Peru", "AmericaDelSud", "Peru");
	Territori.Quebec=new crearterritori("Quebec", "AmericaDelNord", "Quebec");
	Territori.Siam= new crearterritori("Siam", "Asia", "Siam");
	Territori.Siberia= new crearterritori("Siberia", "Asia", "Siberia");
	Territori.TerritoriDelNoroest=new crearterritori("Territori del Noroest", "AmericaDelNord", "TerritoriDelNoroest");
	Territori.Ucrania= new crearterritori("Ucrania", "Europa", "Ucrania");
	Territori.Ural= new crearterritori("Ural", "Asia", "Ural");
	Territori.Venezuela=new crearterritori("Venezuela", "AmericaDelSud", "Venezuela");
	Territori.Yakutsk= new crearterritori("Yakutsk", "Asia", "Yakutsk");
	Territori.Alaska.veins=["Alberta", "Kamchatka", "TerritoriDelNoroest"];
	Territori.TerritoriDelNoroest.veins=["Alaska", "Alberta", "Groenlandia", "Ontario"];
	Territori.Groenlandia.veins=[ "Islandia", "Ontario", "Quebec", "TerritoriDelNoroest"];
	Territori.Alberta.veins=["Alaska", "EstatsUnitsDelOest", "Ontario", "TerritoriDelNoroest"];
	Territori.Ontario.veins=["Alberta", "EstatsUnitsDelEst", "EstatsUnitsDelOest", "Groenlandia", "Quebec", "TerritoriDelNoroest"];
	Territori.Quebec.veins=[ "EstatsUnitsDelEst", "Groenlandia", "Ontario"];
	Territori.EstatsUnitsDelOest.veins=["Alberta", "AmericaCentral", "EstatsUnitsDelEst", "Ontario"];
	Territori.EstatsUnitsDelEst.veins=["AmericaCentral", "EstatsUnitsDelOest", "Ontario", "Quebec"];
	Territori.AmericaCentral.veins=["EstatsUnitsDelEst", "EstatsUnitsDelOest", "Venezuela"];
	Territori.Venezuela.veins=["AmericaCentral", "Brasil", "Peru"];
	Territori.Peru.veins=["Argentina", "Brasil", "Venezuela"];
	Territori.Brasil.veins=["AfricaDelNord", "Argentina", "Venezuela", "Peru"];
	Territori.Argentina.veins=["Brasil", "Peru"];
	Territori.Islandia.veins=["Escandinavia", "GranBretanya", "Groenlandia"];
	Territori.Escandinavia.veins=["EuropaDelNord", "GranBretanya", "Islandia", "Ucrania"];
	Territori.Ucrania.veins=["Afganistan", "Escandinavia", "EuropaDelSud", "EuropaDelNord", "OrientMig", "Ural"];
	Territori.GranBretanya.veins=["Islandia", "Escandinavia", "EuropaDelNord", "EuropaOccidental"];
	Territori.EuropaDelNord.veins=["Escandinavia", "EuropaDelSud", "EuropaOccidental", "GranBretanya", "Ucrania"];
	Territori.EuropaOccidental.veins=["AfricaDelNord", "EuropaDelNord", "EuropaDelSud", "GranBretanya"];
	Territori.EuropaDelSud.veins=["AfricaDelNord", "Egipte", "EuropaDelNord", "EuropaOccidental", "OrientMig", "Ucrania"];
	Territori.AfricaDelNord.veins=["AfricaOriental", "Brasil", "Congo", "Egipte", "EuropaDelSud", "EuropaOccidental"];
	Territori.Egipte.veins=["AfricaDelNord", "AfricaOriental", "EuropaDelSud", "OrientMig"];
	Territori.Congo.veins=["AfricaDelNord", "AfricaDelSud", "AfricaOriental"];
	Territori.AfricaOriental.veins=["AfricaDelNord", "AfricaDelSud", "Congo", "Egipte", "Madagascar", "OrientMig"];
	Territori.AfricaDelSud.veins=["AfricaOriental", "Congo", "Madagascar"];
	Territori.Madagascar.veins=["AfricaDelSud", "AfricaOriental"];
	Territori.Siberia.veins=["China", "Irkutsk", "Mongolia", "Ural", "Yakutsk"];
	Territori.Yakutsk.veins=["Irkutsk", "Kamchatka", "Siberia"];
	Territori.Kamchatka.veins=["Alaska", "Irkutsk", "Japo", "Mongolia", "Yakutsk"];
	Territori.Ural.veins=["Afganistan", "China", "Siberia", "Ucrania"];
	Territori.Irkutsk.veins=["Kamchatka", "Mongolia", "Siberia", "Yakutsk"];
	Territori.Japo.veins=["Kamchatka", "Mongolia"];
	Territori.Afganistan.veins=["China", "India", "OrientMig", "Ucrania", "Ural"];
	Territori.China.veins=["Afganistan", "India", "Mongolia", "Siam", "Siberia", "Ural"];
	Territori.Mongolia.veins=["Irkutsk", "Kamchatka", "Siberia"];
	Territori.OrientMig.veins=["Afganistan", "AfricaOriental", "Egipte", "EuropaDelSud", "India", "Ucrania"];
	Territori.India.veins=["Afganistan", "China", "OrientMig", "Siam"];
	Territori.Siam.veins=["China", "India", "Indonesia"];
	Territori.Indonesia.veins=["AustraliaOccidental", "NovaGuinea", "Siam"];
	Territori.NovaGuinea.veins=["AustraliaOccidental", "AustraliaOriental", "Indonesia"];
	Territori.AustraliaOccidental.veins=["AustraliaOriental", "Indonesia", "NovaGuinea"];
	Territori.AustraliaOriental.veins=["AustraliaOccidental", "NovaGuinea"];
}
/*fem una funció que permeti variar el codi HTML*/
function changeHTML(idubicacio, text){
	document.getElementById(idubicacio).innerHTML=text;
}

/*fem una funció que doni la opció de veure les cartes de cada jugador i les mostri al fer
 click en un botó*/
function mostrarcates() {
	var boto, i;
	Codi1=new Object(); 
	Codi1.VeureCartes1='<center><p>De quin jugador vols veure les cartes?</p>\n<br></br>\n';
	for (var i in Jugador){
		if (i!='nombre'){
			boto='<input type="button" name="Boto_'+i+'" id="Boto_'+i+'" value="'+Jugador[i].name+'" onclick="mostrarcartesjugador(Jugador[\''+i+'\'])"></input> &nbsp \n';
			Codi1.VeureCartes1=Codi1.VeureCartes1+boto;
		}
	}
	boto='<input type="button" name="Amagar" id="Amagar" value="Amagar" onclick="changeHTML(\'MostrarCartes\', Codi1.VeureCartes )"></input>\n</center>\n';
	Codi1.VeureCartes1=Codi1.VeureCartes1+boto+'</center><br>';
	Codi1.VeureCartes='<input type="button" name="Veure_cartes" id="Veure_cartes" value="Veure cartes" onclick="changeHTML(\'MostrarCartes\' , Codi1.VeureCartes1)"></input>';
	changeHTML("MostrarCartes", Codi1.VeureCartes);
}

/* fem una funcio que ens mostri totes les cartes de un jugador*/
function mostrarcartesjugador (player){
	var i, name, text='<center><table style="width:80%">\n<tr>';
	if (player.cards.length==0){
		text+='<br>El jugador '+player.name+' no te cap carta.';
	}
	else{
		text+='<tr>Cartes del jugador '+player.name+'</tr>';
		for (i=0; i<player.cards.length ; i++){
			name=player.cards[i];
			text+='<td align="center"><img name="Card'+name+'" id="Card'+name+'" height="300px" src="Images/Lands/'+name+'.png"></td>\n';
		}
	}
	text+='</tr></table>\n</center>';
	text=Codi1.VeureCartes1+text;
	changeHTML("MostrarCartes", text);
}

/*fem una funció que doni la opció de veure els territoris de cada jugador i els mostri al fer
 click en un botó*/
function mostrarterritoris() {
	var boto, i;
	Codi=new Object(); 
	Codi.VeureTerritoris1='<center><p>De quin jugador vols veure els territoris?</p>\n<br></br>\n';
	for (var i in Jugador){
		if (i!='nombre'){
			boto='<input type="button" name="Boto_'+i+'" id="Boto_'+i+'" value="'+Jugador[i].name+'" onclick="mostrarterritorisjugador(Jugador[\''+i+'\'])"></input> &nbsp \n';
			Codi.VeureTerritoris1=Codi.VeureTerritoris1+boto;
		}
	}
	boto='<input type="button" name="Amagar" id="Amagar" value="Amagar" onclick="changeHTML(\'MostrarTerritoris\', Codi.VeureTerritoris )"></input>\n</center>\n<br>';
	Codi.VeureTerritoris1=Codi.VeureTerritoris1+boto;
	Codi.VeureTerritoris='<input type="button" name="Veure_territoris" id="Veure_territoris" value="Veure territoris" onclick="changeHTML(\'MostrarTerritoris\' , Codi.VeureTerritoris1)"></input><br></br>';
	changeHTML("MostrarTerritoris", Codi.VeureTerritoris);
}

/* fem una funcio que ens mostri tots els territoris de un jugador*/
function mostrarterritorisjugador (player){
	var i, text='<center><table style="width:80%"> \n';
	text+='<tr>Cartes del jugador '+player.name+'</tr>';
	for (var i in Territori){
		if (Territori[i].jugador==player){
			text+='<tr> \n <td>'+Territori[i].name+'</td> \n <td>'+Territori[i].tropes+'</td> \n </tr> \n';
		}
	}
	text+='</table> \n';
	text+=' <p> El jugador '+player.name+' te un total de '+player.territoris+' territoris i '+player.tropes+' tropes. </p></center>';
	text=Codi.VeureTerritoris1+text;
	changeHTML("MostrarTerritoris", text);
}

/* fem una funció que donat un jugador li deixi escollir on colocar una tropa i si
 *  encara en queden per colocar inicii la funció per al següent jugador*/
function colocartropa(turn, jugadors){
	var text, i, player, seguent;
	loadplayerimage(turn);
	player=Jugador["jugador"+turn];
	text='<center><p><font size="5" color="black"> Turn del jugador <b>'+player.name+'</b> seleccioni el pa\355s on colocar\340 la seva tropa i faci click en acceptar.</font></p> \n';
	text+='<select name="paisos_jugador" id="paisos_jugador">\n';
	for (var i in Territori){
		if (Territori[i].jugador==player){
			text+='<option value="'+i+'">'+Territori[i].name+'</option> \n';
		}
	}
	text+='</select> \n';
	seguent=turn+1;
	if (seguent>jugadors){
		seguent=1;
	}
	if (turn==jugadors && Jugador["jugador"+jugadors].tropes==5*(10-jugadors)-1){
		text+='<input type="button" value="acceptar" name="acceptar" id="acceptar" onclick="afegirtropa(); reinforcementtroups(1);"> \n';
	}
	else{
		text+='<input type="button" value="acceptar" name="acceptar" id="acceptar" onclick="afegirtropa(); colocartropa('+seguent+', '+jugadors+')"> \n';
	}
	document.getElementById("ColocarTropes").innerHTML=text;
}

/* fem una funció que s'encarregui de llegir el pais escollit per afegir la
 * tropa i l'afegeixi*/
function afegirtropa(){
	var i, pais;
	i=document.ColocarTropes.paisos_jugador.selectedIndex;
	pais=document.ColocarTropes.paisos_jugador.options[i].value;
	pais=Territori[pais];
	pais.tropes++;
	pais.jugador.tropes++;
	document.getElementById("h"+pais.identification).innerHTML=pais.tropes;
	document.getElementById("ColocarTropes").innerHTML="";
}

/* fem una funció que asigni aleatoriament els territoris als jugadors. En altres
 * paraules que modifiqui el atribut jugador de un territori per asignar-lo a un
 * jugador*/
function asignarpaisos (jugadors) {
	var i, paisos=[], j=1, pais, random;
	for (var i in Territori){
		if (i!='nombre'){
			paisos.push(i);
		}
	}
	while (paisos.length>0){
		random=Math.floor(Math.random()*paisos.length);
		pais=paisos[random];
		if (random==paisos.length-1){
			paisos.pop();
		}
		else{
			paisos[random]=paisos.pop();
		}
		Territori[pais].jugador=Jugador["jugador"+j];
		document.getElementById(Territori[pais].identification+'Img').src="Images/Colors/"+Jugador["jugador"+j].troupcolor+".png";
		/*Apuntem també que ha augmentat el nombre de tropes del jugador, el nombre de territoris
		 * del jugador, el nombre de territoris en el continent i el nombre de tropes en el
		 *  territori*/
		Jugador["jugador"+j].tropes++;
		Jugador["jugador"+j].territoris++;
		Jugador["jugador"+j][Territori[pais].continent]++;
		Territori[pais].tropes++;
		document.getElementById("h"+Territori[pais].identification).innerHTML=Territori[pais].tropes;
		j++;
		if (j>jugadors){
			j=1;
		}
	}
	continuecondicionsinicials(jugadors);
}

/* function setonclick4 will set the onclick=selectcountry attribute for all the image objects in Board and will also
 * load a blank image form all of them*/
function setonclick4(){
	var i, n, str;
	for (var i in Board.children){
		n=i.length;
		str=i.slice(-3, n);
		if (str=="Img"){
			str=i.slice(0, -3);
			Board.children[i].setAttribute("src", "Images/Colors/Empty.png");
			Board.children[i].setAttribute("onclick", "selectcountry('"+str+"')");
		}
	}
}

/* function selectcountry will select a country from the ChosenTerritori select, will remove the onclick attribute
 * of the country image and will click the "acceptar" button*/
 function selectcountry(ctrname){
 	var i, n, selection;
 	selection=document.getElementById('ChosenTerritori');
 	n=selection.options.length;
 	esccountry:
 	for (i=0; i<n; i++){
 		if (selection.options[i].value==ctrname){
 			selection.selectedIndex=i;
 			Board.children[ctrname+'Img'].removeAttribute("onclick");
 			document.getElementById("acceptar").click();
 			break esccountry;
 		}
 	}
 }

/* fem una funció que permeti escollir els territoris als jugadors. En altres
 * paraules que permeti modificar per pantalla el atribut jugador de un territori per asignar-lo a un
 * jugador*/
function escollirpais (turn) {
	var i, player, jugadors, text, seguent=0;
	loadplayerimage(turn);
	jugadors=Jugador.nombre;
	player=Jugador["jugador"+turn];
	text='<center><p><font size="5" color="black"> Turn del jugador <b>'+player.name+'</b> seleccioni el pa\355s on colocar\340 la seva tropa i faci click en acceptar.</font>&nbsp\n';
	text+='<select name="ChosenTerritori" id="ChosenTerritori">\n';
	for (var i in Territori){
		if (i!="nombre"){
			if (Territori[i].jugador==null){
				text+='<option value="'+i+'">'+Territori[i].name+'</option> \n';
				seguent++;
			}
		}
	}
	text+='</select>&nbsp\n';
	if (seguent==1){
		text+='<input type="button" value="acceptar" name="acceptar" id="acceptar" onclick="afegirpais('+turn+'); continuecondicionsinicials('+jugadors+');"> \n';
	}
	else{
		seguent=turn+1;
		if (seguent>jugadors){
			seguent=1;
		}
		text+='<input type="button" value="acceptar" name="acceptar" id="acceptar" onclick="afegirpais('+turn+'); escollirpais('+seguent+')"> \n';
	}
	text+='</p></center>'
	document.getElementById("ColocarTropes").innerHTML=text;
}

/* fem una funció que llegeixi el país escollit i per un jugador donat i liasigni aquell pais al jugador*/
function afegirpais(turn){
	var i, pais;
	pais=document.ColocarTropes.ChosenTerritori.selectedIndex;
	pais=document.ColocarTropes.ChosenTerritori.options[pais].value;
	Territori[pais].jugador=Jugador["jugador"+turn];
	document.getElementById(Territori[pais].identification+'Img').src="Images/Colors/"+Jugador["jugador"+turn].troupcolor+".png";
	/*Apuntem també que ha augmentat el nombre de tropes del jugador, el nombre de territoris
	 * del jugador, el nombre de territoris en el continent i el nombre de tropes en el
	 *  territori*/
	Jugador["jugador"+turn].tropes++;
	Jugador["jugador"+turn].territoris++;
	Jugador["jugador"+turn][Territori[pais].continent]++;
	Territori[pais].tropes++;
	document.getElementById("h"+Territori[pais].identification).innerHTML=Territori[pais].tropes;
}


/*fem una funció que demani per pantalla el nombre de jugadors, el nom de cada jugador i crei un
 *  objecte anomenat jugador1, jugador2, etc... amb aquest nom com a proprietat, aquests objecte
 * serà introduit en un objecte mes gran anomenat Jugador*/
function introduirnoms (){
	var jugadors, i, text, colors;
	Jugador= new Object();
	do {
		jugadors=prompt("Cuants jugadors sereu?\nEl nombre de jugadors ha d'estar compr\350s entre 3 i 7.","3");
		jugadors=Math.floor(Number(jugadors));
		if (jugadors<3 || jugadors>7 || isNaN(jugadors)){
			if (isNaN(jugadors)){
				alert("Seria aconsellable que intentessis introduir un n\372mero.");
			}
			else if (jugadors<3){
				alert("Jugadors insuficients truca a mes amics o en cas de que no en tinguis mes compre'n alguns, a l'Ikea estan de oferta pero els venen per peces i els has de construir tu.");
			}
			else{
				alert("Hi ha massa gent em fa vergonya funcionar");
			}
		}
	}
	while (jugadors<3 || jugadors>7 || isNaN(jugadors));
	for (i=1; i<=jugadors; i++){
		nom=prompt("Introdueix el nom del jugador"+i, "jugador"+i);
		if (nom==null){
			alert("Pues ara per graci\363s et poso jo el nom."+"\n"+"Encantat de coneixe't Primo"+i+".");
			nom="Primo"+i;
		}
		Jugador["jugador"+i]=new crearjugador(nom, i);
	}
	return jugadors;
}

/* function makedifferent will create a button wich will open different.html page when clicked*/
function makedifferent(){
	document.getElementById("MakeDifferent").innerHTML='<p><input type="button" name="Discriminate" id="Discriminate" value="Discriminar" onclick="discrimine()"></p>';
}

/* function discrimen will open different.html page*/
function discrimine(){
	window.open("./different.html", "Favoritismes", "width=1000, height=500");
}

/* function refresh will reload all the player images on the Board div*/
function refresh(){
	var i, str, player;
	for (var i in Board.children){
		str=i.slice(-3, i.length);
		if (str=='Img'){
			str=i.slice(0,-3);
			player=Territori[str].jugador;
			document.getElementById(i).src="Images/Colors/"+player.troupcolor+".png";
		}
	}
	makelegend(Jugador.nombre);
}