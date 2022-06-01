function creatDivs(num) {
    let getSection = document.getElementById('pixel-board');
    for (let index = 0; index < (num * num); index += 1) {
      let newDivs = document.createElement('div');
      getSection.style.gridTemplateColumns = `repeat(${num}, 40px)`;
      getSection.style.gridTemplateRows = `repeat(${num}, 40px)`;
      getSection.appendChild(newDivs);
      newDivs.classList.add('pixel');
    }
  }
  creatDivs(5);
  
  function changeClass(event) {
    let select = document.querySelector('.selected');
    select.classList.remove('selected');
    event.target.classList.add('selected');
  }
  let palet = document.querySelectorAll('.color');
  for (let index = 0; index < palet.length; index += 1) {
    palet[index].addEventListener('click', changeClass);
  }
  
  function changeColor(event) {
    if (event.target.classList.contains('pixel')) {
      let color = document.querySelector('.selected');
      let background = window.getComputedStyle(color).getPropertyValue('background-color');
      event.target.style.background = background;
    }
  }
  
  function click() {
    let board = document.getElementById('pixel-board');
    board.addEventListener('click', changeColor);
  }
  click();
  
  function clearBoard() {
    let board = document.getElementsByClassName('pixel');
    for (index = 0; index < board.length; index += 1) {
      board[index].style.background = 'white';
    }
  }
  
  let getButton = document.getElementById('clear-board').addEventListener('click', clearBoard);
  
  function changeBoard() {
    const takeButton = document.getElementById('board-size');
    const getBoard = document.querySelector('#pixel-board');
    const value = takeButton.value;
    getBoard.innerHTML = '';
    if (value === '') {
      window.alert('Board inválido!');
    } else if (value <= 5) {
      creatDivs(5);
    } else if (value >= 50) {
      creatDivs(50);
    } else {
      creatDivs(takeButton.value);
    }
  }
  
  const buttonBoard = document.getElementById('generate-board').addEventListener('click', changeBoard);
  
  function randomColors() {
    const getColor = document.querySelectorAll('#id');
    for (let button of getColor) {
      let r = Math.floor(Math.random() * 300);
      let g = Math.floor(Math.random() * 300);
      let b = Math.floor(Math.random() * 300);
      button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  }
  randomColors();
  