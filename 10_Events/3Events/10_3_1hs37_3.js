// console.log("Hello")

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo_list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //* It prevent to reload the page
    // const newTodoText = console.log(todoInput.value); //* Print the input value
    const newTodoText = todoInput.value; //* It will Store the input value 
    const newLi = document.createElement("li");
    const newLiInnerHtml = 
        `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    };
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration= "line-through";
    };
    
})