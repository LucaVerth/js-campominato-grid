const play = document.querySelector('#play');
play.addEventListener('click', function(){
  gameStart();
});


function gameStart() {
  const gameLvl = parseInt(document.getElementById('lvlSelect').value);
  const gameGrid = [100, 81, 49];

  let cellNum;
  let cellRow;
  switch (gameLvl) {
    case 1:
      cellNum = gameGrid[0];
      cellRow = 10;
      break;  
    case 2:
      cellNum = gameGrid[1];
      cellRow = 9;
      break;  
    case 3:
      cellNum = gameGrid[2];
      cellRow = 7;
      break;  
  }
  console.log(cellNum);
  console.log(cellRow);

  document.querySelector('.box').innerHTML = '';
  gridGenerator();
  
  function gridGenerator(){
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 1; i < (cellNum + 1); i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.innerHTML = `<span>${i}</span>`;
      const cellSq = `calc(100% / ${cellRow})`;
      cell.style.width = cellSq;
      cell.style.height = cellSq;
      cell.addEventListener('click', function(){
        cell.classList.add('clickable')
      });
      grid.append(cell);
    }
    document.querySelector('.box').append(grid);
  }
}

function randomGeneratorInt(min, max) {
  return Math.floor(Math.random () * (max - min + 1) + min);
}