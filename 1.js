const userInput = +prompt("Enter text");
typeof userInput === 'number' && !isNaN(userInput) ? userInput%2 === 0 ? console.log('чётное') : console.log('нечётное') : console.log('Упс, кажется, вы ошиблись');
