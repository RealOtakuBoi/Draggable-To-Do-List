const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
const todoSubmit = document.querySelector("#todo_submit");
const closeBtn = document.querySelectorAll(".close");
// const no_status = document.querySelector("#no_status");

let draggableTodo = null;

todos.forEach((todo) => {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});



btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};



todoSubmit.addEventListener("click", createTodo);




function dragStart() {
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    },0)
}

function dragEnd() {
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    },0)
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    this.style.border = "1px dashed #ccc";
}

function dragLeave() {
    this.style.border = "none";
}

function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo);
}


function createTodo(){
    const todoDiv = document.createElement("div");
    const inputVal = document.querySelector("#todo_input").value;
    const txt = document.createTextNode(inputVal);

    todoDiv.appendChild(txt);
    todoDiv.classList.add("todo");
    todoDiv.setAttribute("draggable","true");

    const span = document.createElement("span");
    span.classList.add("close");
    const spanText = document.createTextNode("\u00D7");
    span.appendChild(spanText);

    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    });


    todoDiv.appendChild(span);

    todoDiv.addEventListener("dragstart", dragStart);
    todoDiv.addEventListener("dragend", dragEnd);
    document.getElementById("todo_input").value = "";

    no_status.appendChild(todoDiv);
    span.appendChild(spanText);   
                           //ID`s can now directly be used
    todo_form.classList.remove("active");
    overlay.classList.remove("active");
}










closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

