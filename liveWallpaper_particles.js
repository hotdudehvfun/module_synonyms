var canvas,context;
var lettersList=[];
var questionItem={};
var textDir=1;
document.addEventListener("DOMContentLoaded",function()
{
	initCanvas();
});
window.addEventListener("resize",function()
{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});


function initCanvas()
{
	canvas=document.getElementById('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context=canvas.getContext("2d");
	if(context==undefined||context==null)	
	{
		alert("canvas not supported");
	}else
	{
		console.log("supported");
		initLetters();
		drawLetters();
	}
}
function initLetters()
{
	var totalLetters=25;	
	var speed=[0.1,0.2,0.5,0.7];
	var size=[3,4,5,6];
	var layers=4;
	lettersList=[];	
	for (var j = 0; j < layers; j++)
	{
		for (var i = 0; i < totalLetters; i++)
		{
			var letter={};
			//⚫ MEDIUM BLACK CIRCLE 26AB ⬤ BLACK LARGE ...
			letter.char="⚫";//String.fromCharCode(getRandomInt(97,122));
			letter.isRequired=false;
			letter.speed=speed[j];
			letter.color="#555";
			letter.x=getRandomInt(0,canvas.width);
			letter.y=getRandomInt(0,canvas.height);
			letter.size=size[j];
			lettersList.push(letter);
		}			
	}
}
function drawLetters()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	for (var i = 0; i < lettersList.length; i++)
	{
		context.fillStyle=lettersList[i].color;
		context.font=lettersList[i].size+"px sans-serif";
		context.fillText(lettersList[i].char,lettersList[i].x,lettersList[i].y);
		lettersList[i].x+=(lettersList[i].speed*textDir);
		if(lettersList[i].x>canvas.width+10)
		{
			lettersList[i].x=-10;
		}
		if(lettersList[i].x<-10)
		{
			lettersList[i].x=canvas.width+10;
		}
	}	
	requestAnimationFrame(drawLetters);
}