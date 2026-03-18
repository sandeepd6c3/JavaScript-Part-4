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

// let inp=document.querySelector("input");

// function throttle(fnc,delay){
// let timer=0;
// return function(...args){
//     let now=Date.now();
//     if(now-timer>=delay){
//         timer=now
//         fnc(...args);
//     }
// }

// }

// inp.addEventListener("input",throttle(function(){
//     console.log("hui hui");
    
// }, 1000));


//  --------- Intersection Observer --------


// img-card aur empty-card dono select karo
let cards = document.querySelectorAll(".img-card, .empty-card");

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {

            // "visible" class — CARD pe lagao, img pe nahi!
            entry.target.classList.add("visible");

            // Agar card ke andar img hai — lazy load karo
            const img = entry.target.querySelector("img");
            if (img && img.dataset.src) {
                img.src = img.dataset.src;
            }

            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.1  // 0.8 bahut zyada tha — 0.1 rakhna better hai
});

cards.forEach(function(card) {
    observer.observe(card);
});