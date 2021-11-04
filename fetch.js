axios.get('https://jsonplaceholder.typicode.com/users/')
 .then(response => {
  const users = response.data;

  users.forEach(users => {
      const main = document.querySelector('main');
    
      const wrapper = document.createElement('div');
      wrapper.classList.add("wrapper__div");
      wrapper.setAttribute('id', users.id);
    
      const deleteItem = document.createElement("div");
      deleteItem.classList.add("deleteItem");
    
      const jokeItem = document.createElement("article");
      jokeItem.classList.add("jokeItem");

      const icon = document.createElement('i');
      icon.classList.add('fas', 'fa-user-friends')

      const trashBin = document.createElement('i');
      trashBin.classList.add('far', 'fa-trash-alt')
      
      
      jokeItem.textContent = users.name;
      wrapper.appendChild(deleteItem)
      wrapper.appendChild(jokeItem)
      jokeItem.appendChild(icon);
      deleteItem.appendChild(trashBin);
      main.appendChild(wrapper);
  });

});
 

