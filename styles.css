:root {
  --bg: #ffd1d1;
  --text: #9a1800;
  --x: #b90000;
  --o: #00a8be;
  --win: #ffe200;
}

body {
  margin:0; 
  font-family:'Noto Sans TC',sans-serif; 
  background: var(--bg);
  color:var(--text); 
  display:grid; 
  place-items:center; 
  height:100vh;
  overflow: hidden;
  position: relative;
}

/* 背景動畫（甜點主題圖案） */
body::before {
  content:"";
  position: absolute;
  top:0; left:0; right:0; bottom:0;
  background-image: url('https://img.ixintu.com/download/jpg/201910/b0cde1adc1fb9af5b08bd47412db7944.jpg!con'); /* 範例甜點圖案 */
  background-size: cover;
  background-repeat: repeat;
  opacity: 0.3; /* 淡化圖案 */
  animation: bgMove 20s linear infinite;
  z-index: -1;
}

@keyframes bgMove {
  0% { background-position: 0 0; }
  100% { background-position: 0 1000px; }
}

.container {
  width:min(720px,95%); 
  text-align:center;
  z-index: 1;
}

/* 棋盤 */
.board {
  display:grid; 
  grid-template-columns:repeat(3,1fr); 
  gap:12px; 
  width:min(400px,90%); 
  margin:auto; 
  padding:12px;
}

/* 一般格子，背景上往下漸層 + 動畫 */
.cell {
  aspect-ratio:1; 
  border-radius:10px; 
  background: linear-gradient(to bottom, #b2b7ff, #121430);
  border:1px solid rgba(255,255,255,0.1); 
  font-size:48px; 
  font-weight:800; 
  display:grid; 
  place-items:center; 
  cursor:pointer; 
  user-select:none;
  line-height:1;
  transition: background 0.3s ease;
  animation: cellGradient 3s ease-in-out infinite alternate;
}

/* 格子漸層動畫 */
@keyframes cellGradient {
  0% { background: linear-gradient(to bottom, #ffa6a6, #ffe9b7); }
  50% { background: linear-gradient(to bottom, #ffa6a6, #ffe9b7); }
  100% { background: linear-gradient(to bottom, #ffa6a6, #ffe9b7); }
}

/* X 和 O 顏色 */
.cell.x { color:var(--x); }
.cell.o { color:var(--o); }

/* 勝利格子 */
.cell.win {
  background: var(--win); /* 單色背景 */
  /* 保留 X 或 O 顏色，不改文字顏色 */
  animation: none; /* 停止漸層動畫 */
}

/* 控制按鈕與選單 */
.controls, .rounds {
  margin-top:16px;
}

button {
  padding:8px 12px; 
  border-radius:10px; 
  border:0; 
  cursor:pointer; 
  background:#ffffff; 
  color:var(--text);
}

.score {
  margin-top:12px; 
  font-size:18px;
}
