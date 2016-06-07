$(document).ready(function(){

	var lienzo1 = document.getElementById('lienzo1');
	var miLienzo1 = lienzo1.getContext('2d');

	miLienzo1.fillRect(1,1,80,80);
	miLienzo1.strokeRect(100,1,80,80);
	//miLienzo1.clearRect(50,1,80,40);

	var lienzo2 = $('#lienzo2');
	var miLienzo2 = lienzo2[0].getContext('2d');

	var gradLineal = miLienzo2.createLinearGradient(1,20, 25, 50);
	gradLineal.addColorStop(1,"DarkOrange");
	gradLineal.addColorStop(0.5,"DarkRed");
	miLienzo2.fillStyle = gradLineal;
	miLienzo2.fillRect(1,1,80,80);

	var gradRad = miLienzo2.createRadialGradient(120,120,10, 130, 150,100);
	gradRad.addColorStop(1,"DarkOrange");
	gradRad.addColorStop(0.5,"DarkRed");
	miLienzo2.fillStyle = gradRad;
	miLienzo2.fillRect(120,1,80,80);

	miLienzo2.beginPath();
	miLienzo2.moveTo(100,100);
	miLienzo2.lineTo(100,150);
	miLienzo2.lineTo(150,150);
	miLienzo2.lineTo(150,100);
	miLienzo2.closePath();
	miLienzo2.fill();

	miLienzo2.beginPath();
	miLienzo2.moveTo(100,150);
	miLienzo2.lineTo(100,200);
	miLienzo2.lineTo(150,200);
	miLienzo2.closePath();
	miLienzo2.fill();

	miLienzo2.beginPath();
	miLienzo2.arc(200,170,10,0,360);
	miLienzo2.closePath();
	miLienzo2.fill();


	var lienzo3 = $('#lienzo3');
	var miLienzo3 = lienzo3[0].getContext('2d');

	miLienzo3.beginPath();
	miLienzo3.moveTo(25,100);
	miLienzo3.strokeStyle="orange";
	miLienzo3.lineWidth=20;
	miLienzo3.lineCap="Round";
	miLienzo3.lineTo(75,100);
	miLienzo3.closePath();
	miLienzo3.stroke();

	miLienzo3.font="15px Verdana";
	miLienzo3.textAlign="start";
	miLienzo3.textBaseline="button";
	miLienzo3.fillText("mi texto",25,105);

	miLienzo3.beginPath();
	miLienzo3.strokeStyle="black";
	miLienzo3.lineWidth=2;
	for(var x=5; x<=65; x=x+20){
		miLienzo3.moveTo(x,5);
		miLienzo3.lineTo(x,65);
	}

	for(var y=5; y<=65; y=y+20){
		miLienzo3.moveTo(5,y);
		miLienzo3.lineTo(65,y);
	}

	miLienzo3.closePath();
	miLienzo3.stroke();



});