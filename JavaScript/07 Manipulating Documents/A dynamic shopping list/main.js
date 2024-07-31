const input = document.querySelector("#input");
const list = document.querySelector("ul");
const addButton =  document.querySelector(".add");
addButton.addEventListener("click",addItem);


function addItem(){
   const item = document.createElement("li");

   const delButton = document.createElement("button");
   delButton.textContent = "Delete";
   delButton.addEventListener("click",deleteItem);
   
   function deleteItem(){
      item.remove();
   }
   
   item.textContent = input.value;
   item.appendChild(delButton);
   list.appendChild(item);
   
   input.value=""
   input.focus();
   
   
}

