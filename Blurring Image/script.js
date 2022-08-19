const loadText = document.querySelector('.blur-text')
const bg = document.querySelector('.bg')

let int = setInterval(blurring, 30)
let load =0;
 function blurring(){
    load++

    if (load >99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load , 0, 100, 1,0)
    bg.style.filter = `blur(${scale(load, 0, 100, 25, 0)}px)`
 }

 function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


 