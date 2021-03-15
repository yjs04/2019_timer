window.onload=function(){
	let status = "";
	let time = 0;
	let timer;

	function setTimer(hour,minute,second){
		document.querySelector("#second").innerHTML=second;
		document.querySelector("#minute").innerHTML=minute;
		document.querySelector("#hour").innerHTML=hour;
	}

	function setButtons(type){
		document.querySelector("#btn_start").style.display = type == "start" ? "none" : "block";
		document.querySelector("#btn_stop").style.display = type == "start" ? "block" : "none";
		document.querySelector("#btn_reset").style.display = type == "start" || type == "" || type == "reset" ? "none" : "block";
		console.log(type == "start" , type , time ,time < 1)
	}

	function startTimer(){
		timer = setInterval(()=>{
			time++;
			let minute = Math.floor(time/60);
			let hour = Math.floor(minute/60);
			let second = Math.floor(time%60);
			minute = Math.floor(minute%60);

			hour = hour < 10 ? "0"+hour : hour;
			minute = minute < 10 ? "0"+minute : minute;
			second = second < 10 ? "0"+second : second;

			setTimer(hour,minute,second);
		},1000);
	}

	// addEvent

	// start
	document.querySelector("#btn_start").addEventListener("click",()=>{
		setButtons("start");
		startTimer();
	});

	// stop
	document.querySelector("#btn_stop").addEventListener("click",()=>{
		setButtons("stop");
		clearInterval(timer);
	});

	// reset
	document.querySelector("#btn_reset").addEventListener("click",()=>{
		setButtons("reset");
		time = 0;
		setTimer("00","00","00");
	});

	setButtons(status);
}