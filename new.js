//Кнопка уведомлений
let checkElements;

let zAlert = true;
notifications();

let dBody = document.querySelector('body');

let alButton = document.createElement('div');
alButton.className = 'buttonC alS';

alButton.addEventListener("click", function (e) {
 zAlert = alButton.classList.toggle('alS');
 
 if(zAlert == true) {
 		notifications();
 } else {
 		clearInterval(checkElements);
 }
});

dBody.appendChild(alButton);


	

function notifications() {
	checkElements = setInterval(() => {
	
	const resultBlock = document.querySelector("#resultBlock");
    const parentElement = document.querySelector("#totalStatus");
    
    if (parentElement && resultBlock.innerHTML === "") {
    	document.getElementById('reloadList').click();
  		const asd = document.querySelector(".totalPrintList > .in b");
      console.log(asd.textContent);

				if (asd.textContent >= 10) {
          console.log("Больше 10 заказов!");
              var audio = new Audio('https://btones.b-cdn.net/fetch/02/02a7bc8c845ecccfd014776de3010b31.mp3');
              audio.play();
          } else if (asd.textContent >= 5) {
              console.log("Больше 5 заказов!");
              var audio = new Audio('https://btones.b-cdn.net/fetch/73/7380ac19fc79ea4705ff6d5d5b16d8ad.mp3');
              audio.play();
          } else {
              console.log("Меньше 5 заказов!");
          }
			 
			
    } else {
    	console.log("Страница заказа");
    }
}, 180000);
}
