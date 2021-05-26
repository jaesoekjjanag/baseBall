const start = document.querySelector('#start');
const score= document.querySelector('#scoreboard')
const input = document.querySelector('#input');
const numbers1 = document.querySelector('#numbers1');
const numbers2 = document.querySelector('#numbers2');
const numbers3 = document.querySelector('#numbers3');
const insert = document.querySelector('#result');
const init = document.querySelector('.init')
const front = document.querySelector('.front')
const lan = document.querySelector('.lan')
const en = document.querySelector('#en')
const kr = document.querySelector('#kr')
const uz = document.querySelector('#uz')

let randList = []
let inpList = []
let strike = 0;
let ball = 0;
let startTime;
score.value = '0스트라이크 0볼';

const changeLan = (event) =>{
  if(event.target === en){
   document.querySelector('#korean').style.display = 'none'
   document.querySelector('#uzbekistan').style.display = 'none'
   document.querySelector('#english').style.display = 'block'
  }else if(event.target === kr){
    document.querySelector('#korean').style.display = 'block'
    document.querySelector('#uzbekistan').style.display = 'none'
    document.querySelector('#english').style.display = 'none'
  }else{
    document.querySelector('#korean').style.display = 'none'
   document.querySelector('#uzbekistan').style.display = 'block'
   document.querySelector('#english').style.display = 'none'
  }
}
const startGame = () => {
  for (i=0; i<3; i++) {
    randomNum = Math.ceil(Math.random() * 9)
    if (randList.indexOf(randomNum) === -1) {
      randList.push(randomNum)
    } else {
      i--
    }
  }console.log(randList)
  front.style.display = 'none';
  document.querySelector('section').style.display = 'block'
  startTime = new Date();
};

const save = (event) =>{
  inpList.push(event.target.value);
  console.log(inpList)
}

const addList = (event) =>{
  if(inpList.length <4){
  inpList.push(event.target.textContent);
  };
}

const check = () =>{
    for (i of [0,1,2]){
      if (Number(inpList[i]) === randList[i]){
        strike += 1;
      }else if (randList.includes(Number(inpList[i]))){
        ball += 1;
      };
    }

    if (strike == 3){
      endTime = new Date();
      alert('3스트라이크~ 아웃!!');
      alert(`${(endTime - startTime)/1000}초 만에 풀었습니다.`);
      
    }else{
      input.value = ''
    }
   
    score.value = `${strike}스트라이크 ${ball}볼`;
    inpList = [];
    strike = 0;
    ball = 0;
    
    }

const addInput= (event) =>{
  input.value  = `
  ${inpList[0]}  ${inpList[1] ? inpList[1]: ''}  ${inpList[2] ? inpList[2] : ''}
  `
}

const reset = () =>{
  strike = 0;
  ball = 0;
  inpList = [];
  randList = [];
  input.value = '';
  score.value = `${strike}스트라이크 ${ball}볼`;
  startGame();
}


start.addEventListener('click', startGame);
insert.addEventListener('click', check);
numbers1.addEventListener('click', addList);
numbers1.addEventListener('click', addInput);
numbers2.addEventListener('click', addList);
numbers2.addEventListener('click', addInput);
numbers3.addEventListener('click', addList);
numbers3.addEventListener('click', addInput);
init.addEventListener('click', reset);
lan.addEventListener('click', changeLan);
// en.addEventListener('click',)
// kr.addEventListener('click')
// uz.addEventListener('click')