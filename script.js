const pieces = {
  'r':'♜','n':'♞','b':'♝','q':'♛','k':'♚','p':'♟',
  'R':'♖','N':'♘','B':'♗','Q':'♕','K':'♔','P':'♙'
};

let board = [];
let selected = null;

function initBoard() {
  board = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    [null,null],
    [null,null],
    [null,null],
    [null,null],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R']
  ];
  drawBoard();
}

function drawBoard() {
  const boardDiv = document.getElementById('board');
  boardDiv.innerHTML = '';

  for(let r=0; r<8; r++) {
    for(let c=0; c<8; c++) {
      const sq = document.createElement('div');
      sq.className = 'square ' + ((r+c)%2==0? 'light' : 'dark');
      sq.dataset.r = r;
      sq.dataset.c = c;

      if(board[r][c]) sq.textContent = pieces[board[r][c]];

      sq.onclick = () => handleClick(r, c);
      boardDiv.appendChild(sq);
    }
  }
}

function handleClick(r, c) {
  if(selected) {
    // move piece - super basic, no rules yet
    board[r][c] = board[selected.r][selected.c];
    board[selected.r][selected.c] = null;
    selected = null;
  } else if(board[r][c]) {
    selected = {r, c};
  }
  drawBoard();
  if(selected) document.querySelector(`[data-r="${r}"][data-c="${c}"]`).classList.add('selected');
}

function showMenu() {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('board').style.display = 'none';
}

function playLocal() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('board').style.display = 'grid';
  initBoard();
}

// Register service worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// Start with menu
showMenu();
