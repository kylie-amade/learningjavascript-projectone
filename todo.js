"use strict ";

let toDo = [""];

document.querySelector(".add-task").addEventListener('click',()=>{
   addList();

});

 function addList(){
    const inputElement = document.querySelector(".name-input");
    const name = inputElement.value;
    toDo.push(name);
    inputElement.value = "";
    renderToDo();

 }



  function renderToDo(){
    let toDoHtml =" ";
    for (i= 1 ;i < toDo.length ; i++) {
        let toDoList = toDo[i];

        const html = `<p>
        ${toDoList}
        <button onclick=" 
        toDo.splice(${i},1);
        renderToDo();
         ">Delete</button>
        </p>`;
        toDoHtml+= html;
    }

    document.querySelector('.list-update').innerHTML = toDoHtml;

  }