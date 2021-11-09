axios.get('https://jsonplaceholder.typicode.com/users/')
 .then(response => {
  const users = response.data;

  users.forEach(users => {
      const main = document.querySelector('main');
    
      const wrapper = document.createElement('section');
      wrapper.classList.add("wrapper__div");

      wrapper.setAttribute('id', users.id);
    
      const deleteItem = document.createElement("div");
      deleteItem.classList.add("deleteItem");
    
      const swipeItem = document.createElement("article");
      swipeItem.classList.add("swipeItem");

      const glowItem = document.createElement("div");
      glowItem.classList.add("glowItem");

      const inner = document.createElement("div");
      inner.classList.add("inner");

      const glowItem2 = document.createElement("div");
      glowItem2.classList.add("glowItem2");

      const scanner = document.createElement("div");
      scanner.classList.add("scanner");

      const icon = document.createElement('i');
      icon.classList.add('fas', 'fa-user-friends')

      const trashBin = document.createElement('i');
      trashBin.classList.add('far', 'fa-trash-alt')
      
      
      swipeItem.textContent = users.name;
      wrapper.appendChild(deleteItem)
      wrapper.appendChild(swipeItem)
      swipeItem.appendChild(glowItem);
      glowItem.appendChild(inner)
      glowItem.appendChild(glowItem2)
      inner.appendChild(scanner)
      swipeItem.appendChild(icon);
      deleteItem.appendChild(trashBin);
      main.appendChild(wrapper);
  });

});
 

