const Joke = document.querySelector(".jokeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchCoordinatesEnd;
let touchElement;
let touchParentElement;
let deleteButton = window.screen.width * 0.4;

document.querySelector('main').addEventListener('touchstart', (e) => {
    touchElement = e.target;
    touchCoordinatesStart = e.touches[0].clientX;
    console.log(e.target.parentElement.id);

    touchElement.addEventListener("touchmove", (e) => {
        //console.log(e.touches[0].clientX);
        touchCoordinatesMove = Math.floor(e.touches[0].clientX);
        if (touchCoordinatesMove < touchCoordinatesStart && 
            touchCoordinatesMove > touchCoordinatesStart - deleteButton) {
    
            touchElement.style.transform = `translateX(${touchCoordinatesMove - touchCoordinatesStart}px)`;
        }
        //Joke.style.transform = 'translateX(-100px)'
    
    });
    
    touchElement.addEventListener('touchend', (e) => {
        touchCoordinatesEnd = Math.floor(e.changedTouches[0].clientX);
        if (touchCoordinatesEnd < touchCoordinatesStart - deleteButton / 2 ) {
            //console.log("test");
            touchElement.style.transform = `translateX(-${deleteButton}px)`
        }
        else {
            touchElement.style.transform = `translateX(0px)`
        }
    });

    document.querySelector(".deleteItem").addEventListener("click", () => {
      document.querySelector(".wrapper__div").classList.add("animate__animated");
      document.querySelector(".wrapper__div").classList.add("animate__fadeOutLeft");
      setTimeout(() => {
          document.querySelector(".wrapper__div").classList.add("collapsed");
      }, 800);
    
      setTimeout(() => {
        document.querySelector(".wrapper__div").remove();
      }, 900);
});
 






    /* Joke.addEventListener("touchstart", (e) => {
    //console.log(e.touches[0].clientX);
    touchCoordinatesStart = e.touches[0].clientX; */
});
 
