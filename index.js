const Joke = document.querySelector(".jokeItem");
let touchCordinatesStart;
let touchCordinatesMove;
Joke.addEventListener("touchstart", (e) => {
    console.log(e.touches[0].clientX);
    touchCordinatesStart = e.touches[0].clientX;
});

Joke.addEventListener("touchmove", (e) => {
    console.log(e.touches[0].clientX);
    touchCordinatesMove = Math.floor(e.touches[0].clientX);
    if (touchCordinatesMove < touchCordinatesStart) {

        Joke.style.transform = `translateX(${touchCordinatesMove - touchCordinatesStart}px)`;
    }
    //Joke.style.transform = 'translateX(-100px)'

});