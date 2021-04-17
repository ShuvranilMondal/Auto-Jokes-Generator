let txtColor = document.getElementById('play')

let chgColor = ()=>{
    txtColor.style.background='yellow'
}

txtColor.addEventListener('mouseup',chgColor)
txtColor.addEventListener('mousedown',()=>{
    txtColor.style.background='#CCCC00'
})


let result = document.querySelector('#result')
let play = document.querySelector("#play")

let newjokes =()=>{

    let setheader = {
        headers : {
            Accept : "application/json"
        }
    }


    fetch('https://icanhazdadjoke.com/',setheader)
    .then((res)=>res.json())
    .then((data)=>{
        result.innerHTML = data.joke
    }).catch((error)=>{
        console.log(error)
    })
    


}




play.addEventListener('click',function(){
    result.innerHTML = 'Loading your joke...'
    setTimeout(() => {
        newjokes()
    }, 1000);
})
newjokes()