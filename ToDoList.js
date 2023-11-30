const todo=document.querySelector("#task");
const add=document.querySelector("#add");
const todoContainer=document.querySelector(".todoslist");
const date=document.getElementById('date')
const time=document.getElementById('time')
const open=document.getElementById('open')
const complete=document.getElementById('completed')

let count1 =0;
let count2=0;


    let dates=new Date()

  
window.onload=()=>{
    date.innerHTML=dates.toDateString()
    setInterval(() => {
        let d=new Date()
        time.innerHTML=d.toLocaleTimeString()
         
      },1000);
    
}

add.addEventListener("click",() => {
    if(todo.value.trim().length==" "){
        alert("enter a task....")
    }
    else{
        
    const tododiv=document.createElement('div');
    tododiv.classList.add('todo-list-item');
     todoContainer.appendChild(tododiv);

     const tododiv1=document.createElement('div');
    tododiv1.classList.add('div-for-check');
     tododiv.appendChild(tododiv1);

    const checkbox=document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.classList.add('checkbox')
    tododiv1.appendChild(checkbox)
    
    const todoText=document.createElement('p');
    todoText.id='todo-text';
    todoText.innerText=todo.value;
    tododiv1.appendChild(todoText);

    checkbox.addEventListener('change',(e)=>{
        if(checkbox.checked){
        todoText.classList.add('line-through');
        eButton.setAttribute("disabled","disabled")
        eButton.style.visibility="hidden"
        eimg.style.borderRadius='5px'
        
        }
        else {
            todoText.classList.remove('line-through');
            eButton.removeAttribute("disabled"," ")
            eimg.style.backgroundColor='white'
            eButton.style.visibility="visible"
            
        }
       
    })

   
    //create buttons
    const tododiv2=document.createElement('div');
     tododiv2.classList.add('buttons');
     tododiv.appendChild(tododiv2);

  //edit button
    const eButton=document.createElement('button');
    eButton.classList.add('button');
    const eimg=document.createElement('img');
     eimg.id='edit';
     eimg.src='edit.png'
    eButton.appendChild(eimg)
     tododiv2.appendChild(eButton)

     eButton.addEventListener("click",()=>{
        todo.value=todoText.innerText;
        const parent=eButton.parentElement;
        const parentButton=parent.parentElement;
        parentButton.remove();
    })
 
     //delete button
     const dbutton=document.createElement('button')
     dbutton.classList.add('button');
     const dimg=document.createElement('img');
      dimg.id="delete"
      dimg.src='delete.png'
      dbutton.appendChild(dimg)
      tododiv2.appendChild(dbutton)

      dbutton.addEventListener('click',()=>{
        const parent=dbutton.parentElement.parentElement;
       parent.remove()
       
      })
     
    }
    todo.value=" "
   
})

