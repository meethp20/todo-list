const inputTask=document.querySelector('.formm');
const AddButton= document.querySelector('.addNew');
const listHead = document.querySelector('.tasks')
const input= document.querySelector('.inpp');


document.querySelector('.formm').addEventListener("submit",(e)=>{
    e.preventDefault();
})


const AddTask = function(){
    if(input.value.trim()==="" ) return ;

    const newTask = document.createElement('li');
    newTask.innerText=input.value.trim();
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML="❌"
    deleteButton.classList.add("deleteBtn")
    newTask.appendChild(deleteButton);
    listHead.appendChild(newTask);
  deleteButton.addEventListener("click",function(){
    listHead.removeChild(newTask)
  })

    input.value="";


}

AddButton.addEventListener('click', AddTask);