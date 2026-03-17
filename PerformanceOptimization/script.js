//                   Performance Optimization
//  1. ------------ Debouncing ----------


// let inp=document.querySelector("input");

// function debounce(fnc,delay){
// let timer;
// return function(...args){
//     clearTimeout(timer);
//     timer=setTimeout(()=>{
//         fnc(...args);
//     },delay);
// }

// }

// inp.addEventListener("input",debounce(function(){
//     console.log("hui hui");
    
// }, 1000));


//    -------------- Throttle -----------

let inp=document.querySelector("input");

function throttle(fnc,delay){
let timer=0;
return function(...args){
    let now=Date.now();
    if(now-timer>=delay){
        timer=now
        fnc(...args);
    }
}

}

inp.addEventListener("input",throttle(function(){
    console.log("hui hui");
    
}, 1000));