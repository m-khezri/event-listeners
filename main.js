const toDoInputElem = document.getElementById('ToDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoBottomElem = document.getElementById('submitToDoButtom');

const deleteButton = document.getElementsByClassName('deleteButtom');

const activateDeletes = () => {
    const deleteButton = document.getElementsByClassName ('deleteButton');
    
    console.log(deleteButton);

    for ( let i=0; i< deleteButton.length; i++){
        const element = deleteButton[i];
        element.addEventListener("click", (e) => {

            // card that the buttom was on
            const buttonClicked = e.target;
            const cardToDelete = buttonClicked.parentNode.parentNode;
            cardToDelete.remove();

            console.log ("they clicked delete!!!");
        })
    }
}


const printToDom = (stringToPrint, whereToPrint) => {
document.getElementById(whereToPrint).innerHTML += stringToPrint;

}


const buildNewToDoCard = (toDo, notes) => {
let domString = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${toDo}</h5>
  <p class="card-text">${notes}</p>
  <button href="#" class="btn btn-danger deleteButton">Remove</button>
</div>
</div>`;

    printToDom(domString, 'toDoCards'); 
    activateDeletes();
 
}

submitToDoBottomElem.addEventListener("click", (e) =>  { 
e.preventDefault();


buildNewToDoCard(toDoInputElem.value,notesInputElem.value);


// console.log('toDo: ', toDoInputElem.value);
// console.log('notes: ', notesInputElem.value);
});