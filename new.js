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
	
	document.getElementById('reloadList').click();
		
    const parentElement = document.querySelector("#totalStatus");
    const resultBlock = document.querySelector("#resultBlock");


    if (parentElement) {

        		const asd = document.querySelector(".totalPrintList > .in b");
		        console.log(asd.textContent);
        
								
								if(resultBlock.innerHTML === "") {
									
									
									switch(true) {
									  case (asd.textContent >= 5):
									    console.log("Больше 5 заказов!");
								  		var audio = new Audio('https://btones.b-cdn.net/fetch/73/7380ac19fc79ea4705ff6d5d5b16d8ad.mp3');
								  		audio.play();
									    break;
									
									  case (asd.textContent >= 10):
									    console.log("Больше 10 заказов!");
								  		var audio = new Audio('https://btones.b-cdn.net/fetch/73/7380ac19fc79ea4705ff6d5d5b16d8ad.mp3');
								  		audio.play();
									    break;
									
									  default:
									    console.log("Меньше 5 заказов!");
									    break;
									}
									
								  
								}
								else {
									console.log("не выводим уведомление, страница заказа1");
								}

      
        //clearInterval(checkElements);
    }
}, 2000);
}
