let todoValue=document.querySelector("input")

const getTodoList = () =>{
    return JSON.parse(localStorage.getItem("todolist"))
 } 

let localStoreTodo= getTodoList() || [];

const addtodolist = (element) => {
    const todoItem=document.createElement('div');
    todoItem.className='todo-item'
    todoItem.innerHTML=` <li>${element}</li><button class="delete">Delete</button> `
    // console.log(todoItem)
    document.querySelector('.todos').appendChild(todoItem) 
}



const addTodo=()=>{
   
    const todos=todoValue.value.trim();
    todoValue.value=""
    if(todos!=""){
    localStoreTodo.push(todos);
    localStoreTodo=[...new Set(localStoreTodo)]
    localStorage.setItem("todolist",JSON.stringify(localStoreTodo))
    // console.log(todoValue.value)
    const todoItem=document.createElement('div');
    todoItem.className='todo-item'
    todoItem.innerHTML = `<li>${todos}</li><button class="delete" >Delete</button>`;
    document.querySelector('.todos').appendChild(todoItem) 
    }
}

const showtodolist=()=>{
    // console.log('hi')
    console.log(localStoreTodo)
    localStoreTodo.forEach((element) => {
        addtodolist(element)
    });
}

showtodolist();

const addloacldelete=(localStoreTodo)=>{
    localStorage.setItem("todolist",JSON.stringify(localStoreTodo))
}

const removeTodo=(e)=>{
    e.preventDefault();
   
    let deletetodo=e.target.previousSibling.textContent;
    const parentelem=e.target.parentElement;
    console.log(deletetodo)
    localStoreTodo=localStoreTodo.filter((current)=>{
        return (current != deletetodo)
    })
    console.log(localStoreTodo)
    addloacldelete(localStoreTodo)
    parentelem.remove();
}

const dlt = document.querySelector('.todos')
dlt.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log('click')
    console.log(e.target.classList.contains("delete"))
    if(e.target.classList.contains("delete")){
    removeTodo(e);
    }
})

    
