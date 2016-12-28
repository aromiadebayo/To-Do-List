const addItemButton = document.querySelector('button');
const addInputList = document.querySelector('input');
const body = document.querySelector('body');

addItemButton.addEventListener('click', addWell);
/*********************
BUTTON CLICK EVENTS
********************/

function addWell(){
  if(addInputList.value == ""){
    alert("Insert Item");
  }else{
  const newWell = document.createElement('div');
  body.appendChild(newWell);
  newWell.className = "well well-lg";
  newWell.textContent = addInputList.value;
  const completeButton = document.createElement('button');
  newWell.appendChild(completeButton);
  addInputList.value = "";
  completeButton.textContent = "Completed";
  completeButton.className = "btn btn-default removeItem pull-right";
  completeButton.addEventListener('click', deleteItem);
  function deleteItem(){
    body.removeChild(newWell);
  }
}
}



/*************************
KEYBOARD PRESS EVENTS
*********************/
addInputList.addEventListener('keydown', (event) => {
  if(event.keyCode == 13 || event.which == 13){
    addWell();
    event.preventDefault();
  }
});
