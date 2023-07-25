const form = document.querySelector('#todo');
const toDoList = document.querySelector('#todo-list')
const input = document.querySelector('#add-todo')

toDoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
         e.target.parentElement.remove()
     }
     else if(e.target.tagName=== 'LI'){
         e.target.classList.add('ntodo')
     }
     e.target.style.textDecoration = "line-through";
    
 })
 
 
 form.addEventListener('submit', function(e){
     e.preventDefault();
     const newtodo = document.createElement('li');
     const removeBTn = document.createElement('button');
     removeBTn.innerText= 'remove';
     newtodo.innerText= input.value;
     newtodo.appendChild(removeBTn);
 
     input.value = '';
     toDoList.appendChild(newtodo);
 })


