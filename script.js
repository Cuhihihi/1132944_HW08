console.log("JS loaded");

const boardEl = document.getElementById("board");
const turnEl = document.getElementById("turn");
const stateEl = document.getElementById("state");
const scoreEl = document.getElementById("score");
const roundSel = document.getElementById("roundSelect");
const resetGame = document.getElementById("resetGame");
const resetAll = document.getElementById("resetAll");

let cells = [];
let board, current, active;
let scoreX = 0, scoreO = 0, drawCount = 0; // 平手統計
let targetWins = 2; // 三戰兩勝（預設）

const WIN_LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// 創建棋盤
function createBoard() {
    boardEl.innerHTML = "";
    cells = [];

    for (let i = 0; i < 9; i++) {
        const btn = document.createElement("button");
        btn.className = "cell";
        btn.dataset.idx = i;

        // dataset 綁定點擊事件，避免 W083 警告
        btn.addEventListener("click", function(e) {
            const idx = parseInt(e.target.dataset.idx);
            playerMove(idx);
        });

        cells.push(btn);
        boardEl.append(btn);
    }
}

// 初始化本局（重新開始）
function init(){
  board = Array(9).fill("");   
  current = "X";               
  active = true;               
  cells.forEach(c=>{
    c.textContent="";          
    c.className="cell";        
    c.disabled=false;          
  });
  turnEl.textContent = current; 
  stateEl.textContent = "";     
}

// 玩家移動
function playerMove(idx){
  if(!active || board[idx]) return;
  place(idx);
}

// 放置棋子
function place(idx){
  if(!active) return;
  board[idx] = current;
  const c = cells[idx];
  c.textContent = current;
  c.classList.add(current.toLowerCase());

  const result = evaluate();
  if(result.finished){ 
      endGame(result); 
  } else {
      switchTurn();
  }
}

// 切換玩家
function switchTurn(){
  current = current==="X" ? "O" : "X";
  turnEl.textContent = current;
}

// 判斷勝負
function evaluate(){
  for(const line of WIN_LINES){
    const [a,b,c] = line;
    if(board[a] && board[a]===board[b] && board[a]===board[c]){
      return {finished:true, winner:board[a], line};
    }
  }
  if(board.every(v=>v)) return {finished:true, winner:null}; // 平手
  return {finished:false};
}

// 遊戲結束
function endGame({winner,line}){
  active=false;

  if(winner){
    stateEl.textContent = winner + " 勝利！";
    line.forEach(i=> cells[i].classList.add("win")); // 勝利格子
    if(winner==="X") scoreX++; else scoreO++;
  } else {
    stateEl.textContent = "平手";
    drawCount++; // 累計平手
  }

  updateScore();

  if(scoreX===targetWins || scoreO===targetWins){
    stateEl.textContent += " 🎉 系列戰結束！";
    cells.forEach(c=>c.disabled=true);
  }
}

// 更新分數顯示
function updateScore(){
  scoreEl.textContent = `X：${scoreX}　O：${scoreO}　平手：${drawCount}`;
}

// 重新開始本局
resetGame.onclick = () => init();

// 重置全部分數
resetAll.onclick = ()=>{
  scoreX=0; scoreO=0; drawCount=0;
  updateScore(); 
  init();
};

// 選擇系列戰
roundSel.onchange = ()=>{
  let total = Number(roundSel.value);
  targetWins = Math.floor(total/2)+1;  
  scoreX=0; scoreO=0; drawCount=0;
  updateScore();
  init();
};

// 初始化棋盤
createBoard();
init();
