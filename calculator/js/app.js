const btn = document.querySelectorAll('button')
const screen = document.querySelector('.screen')
const clear = document.querySelector('.clear')




btn.forEach((b)=>{
    b.addEventListener('click',()=>{
        if (b.innerText === 'C'){
            screen.innerText = '.'
        }
        
        else if (b.innerText === '='){
            screen.innerText = eval(screen.innerText)
        }
        else if(screen.innerText === '.'){

    
            screen.innerText = b.innerText
        }
        else if(b.innerText === '+/-')
        {
            screen.innerText += '-'
        }
        else{
            screen.innerText += b.innerText
        }


    })
})