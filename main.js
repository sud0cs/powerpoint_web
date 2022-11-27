let num = 1;
let hue = 0;
let buttons = document.getElementsByClassName("button");
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

delay(1000).then(() => console.log('ran after 1 second1 passed'));
async function next(){
	let tdelay = 0.5;
	let ndiv = document.getElementById("d"+(num+1));
	let div = document.getElementById("d"+(num));
	let bg = document.getElementById("bg");
	let elements = ndiv.querySelectorAll("*");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.transitionDelay=tdelay+"s";
		if(elements[i].parentElement.id == ndiv.id){
			elements[i].style.left="6%";
		}
		else{
			elements[i].style.left="0%";
		}
		tdelay+=0.01;
	}
	hue +=20;
	bg.style.filter="blur(5px) brightness(70%) hue-rotate("+hue+"deg)";
	console.log(bg.style.filter);
	displayButtons("none");
	div.style.left = "-100%";
	//div.style.transform = "rotate(-90deg)";
	ndiv.style.left = "0%";
	//ndiv.style.transform = "rotate(0deg)";
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.transitionDelay=tdelay+"s";
		if(elements[i].parentElement.id == ndiv.id){
			elements[i].style.left="6%";
		}
		else{
			elements[i].style.left="0%";
		}
		tdelay+=0.05;
	}
	num++;
	await delay(1000)
	displayButtons("flex");
}
async function prev(){
	if (num>1){
		let pdiv = document.getElementById("d"+(num-1));
		let div = document.getElementById("d"+(num));
		let elements = div.querySelectorAll("*");
		let pelements = pdiv.querySelectorAll("*");
		let bg = document.getElementById("bg");
		let tdelay = 0;
		for (var i = elements.length-1; i >= 0 ; i--) {
			elements[i].style.transitionDelay=tdelay+"s";
			elements[i].style.left="100%";
			tdelay+=0.05;
		}
		hue -=20;
		bg.style.filter="blur(5px) brightness(70%) hue-rotate("+hue+"deg)";
		displayButtons("none");
		div.style.transitionDelay = tdelay+"s";
		div.style.left = "100%";
		//div.style.transform = "rotate(90deg)";
		pdiv.style.transitionDelay = tdelay+"s";
		pdiv.style.left = "0%";
		//pdiv.style.transform = "rotate(0deg)";
		await delay(tdelay*1000);
		div.style.transitionDelay = "0s";
		pdiv.style.transitionDelay = "0s";
		num--;
		await delay(1000);
		displayButtons("flex");
	}
}
function displayButtons(display){
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.display=display;
	}
}
