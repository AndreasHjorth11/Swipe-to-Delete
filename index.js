const swipe = document.querySelector(".swipeItem");
let touchCoordinatesStart;
let touchCoordinatesMove;
let touchCoordinatesEnd;
let touchElement;
let touchParentElement;
let deleteButton = window.screen.width * 0.4;
let deleteStorage = window.localStorage;
let userList = [];
if(localStorage.getItem('deletedItems')){
    userList = JSON.parse(localStorage.getItem('deletedItems'))
}

document.querySelector('main').addEventListener('touchstart', (e) => {
    touchElement = e.target;
    touchParentElement = e.target.parentElement;
    touchCoordinatesStart = e.touches[0].clientX;

    touchElement.addEventListener("touchmove", (e) => {
        //console.log(e.touches[0].clientX);
        touchCoordinatesMove = Math.floor(e.touches[0].clientX);
        if (touchCoordinatesMove < touchCoordinatesStart && 
            touchCoordinatesMove > touchCoordinatesStart - deleteButton) {
    
            touchElement.style.transform = `translateX(${touchCoordinatesMove - touchCoordinatesStart}px)`;
        }
        //touchElement.style.transform = 'translateX(-100px)'
    
    });
    
    touchElement.addEventListener('touchend', (e) => {
        touchCoordinatesEnd = Math.floor(e.changedTouches[0].clientX);
        if (touchCoordinatesEnd < touchCoordinatesStart - deleteButton / 2 ) {
            //console.log("test");
            touchElement.style.transform = `translateX(-${deleteButton}px)`;
        }
        else {
            touchElement.style.transform = `translateX(${e.target.offsetLeft})`;
        }
    });

    touchParentElement.querySelector(".deleteItem").onclick = () => {
      touchParentElement.classList.add("animate__animated");
      touchParentElement.classList.add("animate__fadeOutLeft");
     
      let userObject = {
          id: touchParentElement.id,
          name: touchParentElement.querySelector('.swipeItem').textContent
      }

        userList.push(userObject)
      
      console.log(userList);
      localStorage.setItem('deletedItems', JSON.stringify(userList));
      
       setTimeout(() => {
          touchParentElement.classList.add("collapsed");
      }, 800);
    
      setTimeout(() => {
        touchParentElement.remove();
      }, 900);  
};
 






    /* Joke.addEventListener("touchstart", (e) => {
    //console.log(e.touches[0].clientX);
    touchCoordinatesStart = e.touches[0].clientX; */
});
 
