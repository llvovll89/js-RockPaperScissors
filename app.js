const item = document.querySelector(".item");
const title = document.querySelector('.title');
let titleOf = '가위 바위 보 잘해?'
const addTitle = [];

// function titleMove(){
//     titleOf.slice(0,1);
//     for(let i = 0; i < titleOf.length; i++){
//         setInterval(() => {
//             addTitle.push(titleOf[i]);
//             title.innerText = `${addTitle}`
//         }, 1500)
//     }
// }

// // titleMove();

//start Btn
const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", () => {
  timeFn();
  startGame();
  item.classList.add("active");
  count.textContent = `승리: ${counts}`;
  if (startBtn.textContent === "게임시작") {
    startBtn.textContent = "다시하기";
  } else if (startBtn.textContent === "다시하기") {
    startBtn.textContent = "게임시작";
  }
});

// count , time
const count = document.querySelector(".count"),
  time = document.querySelector(".time");

let timer = 20;
let counts = 0;
// result 화면
const result = document.querySelector(".result");
// random val
const randomDom = document.querySelector(".random");

// 가위 바위 보
function startGame() {
  const btn = document.querySelectorAll(".btn").forEach((val, id) =>
    val.addEventListener("click", (e) => {
      const random = Math.floor(Math.random() * 3) + 1;
      if (random === 1) {
        randomDom.innerText = "🤜";
      } else if (random === 2) {
        randomDom.innerText = "🤚";
      } else if (random === 3) {
        randomDom.innerText = "✌️";
      }

      if (id + 1 === random) {
        result.innerHTML = "무승부";
      } else if (id + 1 > random || id + 3 === random) {
        result.innerHTML = "이김";
        count.textContent = `승리: ${counts++}`;
      } else {
        result.innerHTML = "졌삼";
      }
    })
  );
}
function timeFn() {
  const a = setInterval(() => {
    time.innerHTML = `Timer: ${timer--}`;
    if (timer === 0 || counts > 20) {
      alert(`게임종료!!`);
      clearInterval(a);
      timer = 0;
      count.innerText = ``;
      time.innerText = ``;
      item.classList.remove('active');
    }
  }, 1000);
}
