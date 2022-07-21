

const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");

let draggableTodo = null;






todos.forEach(todo => {
    todo.addEventListener("dragstart",dragStart);
    todo.addEventListener("dragend",dragEnd);

});



all_status.forEach(status => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop",dragDrop);
});





function dragStart(){
    draggableTodo = this;
}

function dragEnd(){
    draggableTodo = null;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(){

}

function dragLeave(){

}


function dragDrop(){
    this.appendChild(draggableTodo);
}




