let txtColor = document.getElementById('play')

let chgColor = ()=>{
    txtColor.style.background='yellow'
}

txtColor.addEventListener('mouseup',chgColor)
txtColor.addEventListener('mousedown',()=>{
    txtColor.style.background='#CCCC00'
})
