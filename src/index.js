//prettier-ignore
const colors = ['#ff0000','#ffff00','#ff8800',
                '#00ff00','#ff00ff','#00ffff',
                '#0000ff','#000000','#ffffff',
                '#ce00ff','#14930a','#0af89d'];


const cardsBox = document.querySelector('.cards-box')
const pickerBox = document.querySelector('.picker-box')

function createCards(){  
    const cardsShow = 3

    for(let i = 1; i <= cardsShow; i++){
        const card = `<div class="card" style="background-color:white"><div/>`
        cardsBox.innerHTML += card
    }
}
createCards() 


function createColorPicker(){
    for(const color of colors){
        const picker = `<div class="picker" style="background-color:${color}"><div/>`
        pickerBox.innerHTML += picker
    }
}
createColorPicker()


function random(max, min = 0){
    return min + Math.round(Math.random() * (max - min));
}


const cardsNodeList = document.querySelectorAll('.card') 
const cards = [...cardsNodeList]


function randomColor(card){
    const randomColor = random(colors.length - 1)
    card.style.backgroundColor = colors[randomColor]
}


function showCardsColors (){
    for (const card of cards){
        randomColor(card)
        setTimeout(() => {
            card.style.backgroundColor = 'white';
          }, "3000")
        

    }
}
showCardsColors()


function showPickers(){
    let index = 0
    const arr = cards.map(card => {
        return window.getComputedStyle(card).backgroundColor
    })

    setTimeout(() => {
        cards[index].classList.add('marked-card');
      }, "3000")

  

    pickerBox.addEventListener('click',(event)=>{

        if(index <= 2){
            const colorPicked =  event.target
            const compBackgroundColor = window.getComputedStyle(colorPicked ).backgroundColor;
            const color = cards[index].style.backgroundColor = compBackgroundColor
            
            if(arr[index] === color){
                index ++ 
                console.log(index)
                cards[index-1].classList.add('unmarked-card')
                
                if(index === 2 )cards[index].classList.add('marked-card')

                if(index === 3){
                    const winAnswer = window.confirm('YOU WON!! Wanna play again?')
                    if(winAnswer) location.reload()
                    else{
                        window.alert(`Good Bye :)`)
                        location.href =  'http://make-everything-ok.com//';
                    }
                }
            }else {
                const loseAnswer = window.confirm('Worng asnwer, Want to play again?')
                console.log(loseAnswer)
                if(loseAnswer){
                    location.reload()
                }else{
                    window.alert(`Good Bye :)`)
                    location.href =  'http://make-everything-ok.com//';
                }
                
            }
        }
    })
}
showPickers() 



