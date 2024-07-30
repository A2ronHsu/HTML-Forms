const input = document.querySelector("#input");
const list = document.querySelector("ul");
const addButton =  document.querySelector(".add");
const delButton = document.querySelector(".delete");
addButton.addEventListener("click",addItem);
delButton.addEventListener("click",deleteItem);
let id = 0

function addItem(){
   const item = document.createElement("li");
   item.setAttribute("id",id)

   const delButton = document.createElement("button");
   delButton.setAttribute("class","delete");
   delButton.setAttribute("id",id);
   delButton.textContent = "Delete";
   
   item.textContent = input.value;
   item.appendChild(delButton);
   list.appendChild(item);
   
   id++;
}

function deleteItem(){
   
}