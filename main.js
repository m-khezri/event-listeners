const toDoInputElem = document.getElementById('ToDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoBottomElem = document.getElementById('submitToDoButtom');


const printToDom = (stringToPrint, whereToPrint) => {
document.getElementById(whereToPrint).innerHTML += stringToPrint;

}


const buildNewToDoCard = (toDo, notes) => {
let domString = `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${toDo}</h5>
  <p class="card-text">${notes}</p>
  <a href="#" class="btn btn-danger">Remove</a>
</div>
</div>`;


    printToDom(domString, 'toDoCards');  
}

submitToDoBottomElem.addEventListener("click", (e) =>  { 
e.preventDefault();


buildNewToDoCard(toDoInputElem.value,notesInputElem.value);


// console.log('toDo: ', toDoInputElem.value);
// console.log('notes: ', notesInputElem.value);
});