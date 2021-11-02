const Joke = document.querySelector(".jokeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchCoordinatesEnd;
let deleteButton = window.screen.width * 0.4;

document.querySelector(".deleteItem").addEventListener("click", () => {
    document.querySelector(".wrapper__div").classList.add("animate__fadeOutLeft");
    setTimeout(() => {

        document.querySelector('.wrapper__div').remove();
    }, 800);
})

Joke.addEventListener("touchstart", (e) => {
    //console.log(e.touches[0].clientX);
    touchCoordinatesStart = e.touches[0].clientX;
});

Joke.addEventListener("touchmove", (e) => {
    //console.log(e.touches[0].clientX);
    touchCoordinatesMove = Math.floor(e.touches[0].clientX);
    if (touchCoordinatesMove < touchCoordinatesStart && 
        touchCoordinatesMove > touchCoordinatesStart - deleteButton) {

        Joke.style.transform = `translateX(${touchCoordinatesMove - touchCoordinatesStart}px)`;
    }
    //Joke.style.transform = 'translateX(-100px)'

});

Joke.addEventListener('touchend', (e) => {
    touchCoordinatesEnd = Math.floor(e.changedTouches[0].clientX);
    if (touchCoordinatesEnd < touchCoordinatesStart - deleteButton / 2 ) {
        //console.log("test");
        Joke.style.transform = `translateX(-${deleteButton}px)`
    }
    else {
        Joke.style.transform = `translateX(0px)`
    }
});