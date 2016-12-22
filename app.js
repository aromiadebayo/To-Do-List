const getInput  = document.querySelector('input');
const getAddButton = document.querySelector('#addItem');
const getList = document.querySelector('ul');
const getDeleteButton = document.querySelector('#removeItem');


/*********************************************
Button Click Events
********************************************/
function addstuff(){
  if(getInput.value == ''){
    alert("Add an Item");
  }else{
    let li = document.createElement('li');
    getList.appendChild(li);
    let button = document.createElement('button');
    getList.appendChild(button);
    button.textContent = "Completed";
    button.className = "finishButton";
    let getListItem = document.querySelector('li');
    li.textContent = getInput.value;
    getInput.value = '';
  }
}

//create list item when button is pressed
getAddButton.addEventListener('click',addstuff);
//delete list item when button is pressed
getDeleteButton.addEventListener('click', () => {
let li = document.querySelector('li');
let but = document.querySelector('button');
getList.removeChild(li) ;
getList.removeChild(but);
});

/**************************************
Mouse Hover Events
***************************************/
/////////////////////
//Buttons//
//////////////////////
function hoverBlueButton(){
  getAddButton.style.opacity = 0.7;

}
function hoverRedButton(){
  getDeleteButton.style.opacity = 0.7;

}
function leaveBlueButton(){
  getAddButton.style.opacity = 1;

}
function leaveRedButton(){
  getDeleteButton.style.opacity = 1;

}
getAddButton.addEventListener('mouseover',hoverBlueButton);
getDeleteButton.addEventListener('mouseover', hoverRedButton);
getAddButton.addEventListener('mouseleave',leaveBlueButton);
getDeleteButton.addEventListener('mouseleave', leaveRedButton);

//////////////////////
//List Items//
////////////////

/*************************
KeyBoard Events
************************/
