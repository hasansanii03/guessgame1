let add=document.getElementById('add')
let min=document.getElementById('min')
let number=document.getElementById('number')
let guess=document.getElementById('guess')
let target=document.getElementById('target')
let computerG=document.getElementById('computer-guess')
let round=document.getElementById('round')
let score=document.getElementById('score1')
let score1=document.getElementById('score')
let roundnum=document.getElementById('roundnum')

let result=0
const addnum=()=>{
    result+=1
    
    number.innerText=result
}
const minnum=()=>{
    if(result>0){
        result-=1
     
        number.innerText=result
    }else{
        result=0
    }
}
let addn=0

const changeall=()=>{
let randomnum=Math.floor(Math.random()*9)
target.innerHTML=randomnum
let computer=Math.floor(Math.random()*9)
computerG.innerHTML=computer
console.log()
let c=randomnum-result;
let b=randomnum-computer
if(b <= c   ){
 console.log('computer win') 
 guess.disabled=true  
 guess.style.backgroundColor='grey'
 guess.style.color='red'
 guess.innerHTML='You lose'
 addn+=1
 score1.innerText=addn
 let win=document.getElementById('win').innerHTML='Computer win'
}
else{
    console.log('human win')
    guess.disabled=true 
    guess.style.backgroundColor='grey'
    guess.style.color='red'
    guess.innerHTML='You win'
    addn+=1
    score.innerText=addn
}
}
let rand=0
const next=()=>{
    let randomnum=Math.floor(Math.random()*9)
    let computer=Math.floor(Math.random()*9)
    rand+=1
    roundnum.innerText=rand
    result=0
    number.innerText=result
    target.innerHTML='?'
    computerG.innerHTML='?'
    let c=randomnum-result;
let b=randomnum-computer
    if(b <= c ){
        console.log('computer win') 
        guess.disabled=false
        guess.style.backgroundColor='blue'
        guess.style.color='white'
        guess.innerHTML='Make a Guess'
        let win=document.getElementById('win').innerHTML=''
        }else{
        guess.disabled=false
        guess.style.backgroundColor='blue'
        guess.style.color='white'
        guess.innerHTML='Make a Guess'
       }
}
round.addEventListener('click',next)
add.addEventListener('click',addnum);
guess.addEventListener('click',changeall)

min.addEventListener('click',minnum);