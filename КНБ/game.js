let playerWin = 0;
let computerWin = 0;

function choose(userChoice) {
  const choices = ['Камень', 'Ножницы', 'Бумага'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result;
 
  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === 'Камень' && computerChoice === 'Ножницы') ||
    (userChoice === 'Ножницы' && computerChoice === 'Бумага') ||
    (userChoice === 'Бумага' && computerChoice === 'Камень')
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