let playerWin = 0;
let computerWin = 0;

function choose(userChoice) {
  const choices = ['Камень', 'Ножницы', 'Бумага','Вода','Воздух','Губка','Огонь','Пистолет','Молния','Демон','Дракон','Волк','Дерево','Человек','Змея'];
  const computerChoice = choices[Math.floor(Math.random() * 15)];

  let result;
 
  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === 'Камень' && computerChoice === 'Ножницы')||

    (userChoice === 'Ножницы' && computerChoice === 'Бумага')||

    (userChoice === 'Бумага' && computerChoice === 'Камень')||
    (userChoice === 'Вода' && computerChoice === 'Камень')||
    (userChoice === 'Воздух' && computerChoice === 'Камень')||
    (userChoice === 'Пистолет' && computerChoice === 'Камень')||
    (userChoice === 'Молния' && computerChoice === 'Камень')||
    (userChoice === 'Демон' && computerChoice === 'Камень')||
    (userChoice === 'Дракон' && computerChoice === 'Камень')||

    (userChoice === 'Бумага' && computerChoice === 'Вода')||
    (userChoice === 'Воздух' && computerChoice === 'Вода')||
    (userChoice === 'Губка' && computerChoice === 'Вода')||
    (userChoice === 'Волк' && computerChoice === 'Вода')||
    (userChoice === 'Дерево' && computerChoice === 'Вода')||
    (userChoice === 'Человек' && computerChoice === 'Вода')||
    (userChoice === 'Змея' && computerChoice === 'Вода')||

    (userChoice === 'Волк' && computerChoice === 'Воздух')||
    (userChoice === 'Дерево' && computerChoice === 'Воздух')||
    (userChoice === 'Человек' && computerChoice === 'Воздух')||
    (userChoice === 'Змея' && computerChoice === 'Воздух')||
    (userChoice === 'Бумага' && computerChoice === 'Воздух')||
    (userChoice === 'Губка' && computerChoice === 'Воздух')||
    (userChoice === 'Ножницы' && computerChoice === 'Воздух')||

    (userChoice === 'Волк' && computerChoice === 'Бумага')||
    (userChoice === 'Змея' && computerChoice === 'Бумага')||
    (userChoice === 'Человек' && computerChoice === 'Бумага')||
    (userChoice === 'Дерево' && computerChoice === 'Бумага')||
    (userChoice === 'Губка' && computerChoice === 'Бумага')||
    (userChoice === 'Огонь' && computerChoice === 'Бумага')||

    (userChoice === 'Волк' && computerChoice === 'Губка')||
    (userChoice === 'Дерево' && computerChoice === 'Губка')||
    (userChoice === 'Человек' && computerChoice === 'Губка')||
    (userChoice === 'Змея' && computerChoice === 'Губка')||
    (userChoice === 'Ножницы' && computerChoice === 'Губка')||
    (userChoice === 'Огонь' && computerChoice === 'Губка')||
    (userChoice === 'Камень' && computerChoice === 'Губка')||
    
    (userChoice === 'Огонь' && computerChoice === 'Ножницы')||
    (userChoice === 'Пистолет' && computerChoice === 'Ножницы')||
    (userChoice === 'Молния' && computerChoice === 'Ножницы')||
    (userChoice === 'Демон' && computerChoice === 'Ножницы')||
    (userChoice === 'Дракон' && computerChoice === 'Ножницы')||
    (userChoice === 'Вода' && computerChoice === 'Ножницы')||
    
    (userChoice === 'Пистолет' && computerChoice === 'Огонь')||
    (userChoice === 'Молния' && computerChoice === 'Огонь')||
    (userChoice === 'Демон' && computerChoice === 'Огонь')||
    (userChoice === 'Дракон' && computerChoice === 'Огонь')||
    (userChoice === 'Камень' && computerChoice === 'Огонь')||
    (userChoice === 'Вода' && computerChoice === 'Огонь')||
    (userChoice === 'Воздух' && computerChoice === 'Огонь')||
    
    (userChoice === 'Молния' && computerChoice === 'Пистолет')||
    (userChoice === 'Демон' && computerChoice === 'Пистолет')||
    (userChoice === 'Дракон' && computerChoice === 'Пистолет')||
    (userChoice === 'Вода' && computerChoice === 'Пистолет')||
    (userChoice === 'Воздух' && computerChoice === 'Пистолет')||
    (userChoice === 'Бумага' && computerChoice === 'Пистолет')||
    (userChoice === 'Губка' && computerChoice === 'Пистолет')||

    (userChoice === 'Волк' && computerChoice === 'Молния')||
    (userChoice === 'Демон' && computerChoice === 'Молния')||
    (userChoice === 'Дракон' && computerChoice === 'Молния')||
    (userChoice === 'Вода' && computerChoice === 'Молния')||
    (userChoice === 'Воздух' && computerChoice === 'Молния')||
    (userChoice === 'Бумага' && computerChoice === 'Молния')||
    (userChoice === 'Губка' && computerChoice === 'Молния')||

    (userChoice === 'Волк' && computerChoice === 'Демон')||
    (userChoice === 'Дерево' && computerChoice === 'Демон')||
    (userChoice === 'Дракон' && computerChoice === 'Демон')||
    (userChoice === 'Вода' && computerChoice === 'Демон')||
    (userChoice === 'Воздух' && computerChoice === 'Демон')||
    (userChoice === 'Бумага' && computerChoice === 'Демон')||
    (userChoice === 'Губка' && computerChoice === 'Демон')||

    (userChoice === 'Волк' && computerChoice === 'Дракон')||
    (userChoice === 'Дерево' && computerChoice === 'Дракон')||
    (userChoice === 'Человек' && computerChoice === 'Дракон')||
    (userChoice === 'Вода' && computerChoice === 'Дракон')||
    (userChoice === 'Воздух' && computerChoice === 'Дракон')||
    (userChoice === 'Бумага' && computerChoice === 'Дракон')||
    (userChoice === 'Губка' && computerChoice === 'Дракон')||

    (userChoice === 'Пистолет' && computerChoice === 'Волк')||
    (userChoice === 'Дерево' && computerChoice === 'Волк')||
    (userChoice === 'Человек' && computerChoice === 'Волк')||
    (userChoice === 'Змея' && computerChoice === 'Волк')||
    (userChoice === 'Ножницы' && computerChoice === 'Волк')||
    (userChoice === 'Огонь' && computerChoice === 'Волк')||
    (userChoice === 'Камень' && computerChoice === 'Волк')||

    (userChoice === 'Пистолет' && computerChoice === 'Дерево')||
    (userChoice === 'Молния' && computerChoice === 'Дерево')||
    (userChoice === 'Человек' && computerChoice === 'Дерево')||
    (userChoice === 'Змея' && computerChoice === 'Дерево')||
    (userChoice === 'Ножницы' && computerChoice === 'Дерево')||
    (userChoice === 'Огонь' && computerChoice === 'Дерево')||
    (userChoice === 'Камень' && computerChoice === 'Дерево')||

    (userChoice === 'Пистолет' && computerChoice === 'Человек')||
    (userChoice === 'Молния' && computerChoice === 'Человек')||
    (userChoice === 'Демон' && computerChoice === 'Человек')||
    (userChoice === 'Змея' && computerChoice === 'Человек')||
    (userChoice === 'Ножницы' && computerChoice === 'Человек')||
    (userChoice === 'Огонь' && computerChoice === 'Человек')||
    (userChoice === 'Камень' && computerChoice === 'Человек')||

    (userChoice === 'Пистолет' && computerChoice === 'Змея')||
    (userChoice === 'Молния' && computerChoice === 'Змея')||
    (userChoice === 'Демон' && computerChoice === 'Змея')||
    (userChoice === 'Дракон' && computerChoice === 'Змея')||
    (userChoice === 'Ножницы' && computerChoice === 'Змея')||
    (userChoice === 'Огонь' && computerChoice === 'Змея')||
    (userChoice === 'Камень' && computerChoice === 'Змея')

    
    
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