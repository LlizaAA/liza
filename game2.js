let playerWin = 0;
let computerWin = 0;

function choose(userChoice) {
  const choices = ['Камень', 'Ножницы', 'Бумага','Вода','Воздух','Губка','Огонь'];
  const computerChoice = choices[Math.floor(Math.random() * 7)];

  let result;
 
  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === 'Камень' && computerChoice === 'Ножницы')||

    (userChoice === 'Ножницы' && computerChoice === 'Бумага')||

    (userChoice === 'Бумага' && computerChoice === 'Камень')||
    (userChoice === 'Вода' && computerChoice === 'Камень')||
    (userChoice === 'Воздух' && computerChoice === 'Камень')||

    (userChoice === 'Бумага' && computerChoice === 'Вода')||
    (userChoice === 'Воздух' && computerChoice === 'Вода')||
    (userChoice === 'Губка' && computerChoice === 'Вода')||

    (userChoice === 'Бумага' && computerChoice === 'Воздух')||
    (userChoice === 'Губка' && computerChoice === 'Воздух')||
    (userChoice === 'Ножницы' && computerChoice === 'Воздух')||

    (userChoice === 'Губка' && computerChoice === 'Бумага')||
    (userChoice === 'Огонь' && computerChoice === 'Бумага')||

    (userChoice === 'Ножницы' && computerChoice === 'Губка')||
    (userChoice === 'Огонь' && computerChoice === 'Губка')||
    (userChoice === 'Камень' && computerChoice === 'Губка')||
    
    (userChoice === 'Огонь' && computerChoice === 'Ножницы')||
    (userChoice === 'Вода' && computerChoice === 'Ножницы')||
    
    (userChoice === 'Камень' && computerChoice === 'Огонь')||
    (userChoice === 'Вода' && computerChoice === 'Огонь')||
    (userChoice === 'Воздух' && computerChoice === 'Огонь')
    
  ) {
    result = "Вы победили!";
    playerWin++;
  } else {
    result = "Вы проиграли!";
    computerWin++;
  }
 

  const resultDiv = document.getElementById('result');
  const resultSpan = document.createElement('span');
  resultSpan.textContent = result;
 

resultDiv.innerHTML = `Вы выбрали: ${userChoice}&MediumSpace;&MediumSpace;&MediumSpace;&MediumSpace; Компьютер выбрал: ${computerChoice}.
<br><span style="font-size: 72px;">${result}`;
resultDiv.innerHTML += `<br><br><span style="font-size: 20px;">Счёт:<br></span>`;
resultDiv.innerHTML +=`<br><span style="font-size: 25px;">Человек ${playerWin}  `;
resultDiv.innerHTML +=`<br><span style="font-size: 25px;">Компьютер ${computerWin}`;
/*if (result === "Вы победили!") {
  resultSpan.style.color = "green";
} else if (result === "Вы проиграли!") {          типо цвет ответа результата
  resultSpan.style.color = "red";
}*/
}