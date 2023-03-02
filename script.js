const buttons=document.getElementsByClassName('button')
const inputField=document.getElementsByClassName('display')

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', (event)=>{
        let m=event.target.innerHTML
    })
}

