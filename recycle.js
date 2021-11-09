let recycle = JSON.parse(localStorage.getItem('deletedItems'));

recycle.forEach(recycleItem => {
    /* let result = recycleItem; */
    console.log(recycleItem);
    const main = document.querySelector('main');
      const wrapper = document.createElement('section');
      wrapper.classList.add("wrapper__div");

      wrapper.setAttribute('id', recycleItem.id);

      const deleteItem = document.createElement("div");
      deleteItem.classList.add("deleteItem");
    
      const swipeItem = document.createElement("article");
      swipeItem.classList.add("swipeItem");
     
      swipeItem.textContent = recycleItem.name;

      const icon = document.createElement('i');
      icon.classList.add('fas', 'fa-user-slash')

      const trashBin = document.createElement('i');
      trashBin.classList.add('far', 'fa-trash-alt')
  
      
      wrapper.appendChild(deleteItem)
      wrapper.appendChild(swipeItem)
      swipeItem.appendChild(icon);
      deleteItem.appendChild(trashBin);
      main.appendChild(wrapper);
}); 

