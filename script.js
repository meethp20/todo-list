const inputTask=document.querySelector('.formm');
const AddButton= document.querySelector('.addNew');
const RemoveButton = document.querySelector('.removeTask');
const listHead = document.querySelector('.tasks')
const input= document.querySelector('.inpp');


document.querySelector('.formm').addEventListener("submit",(e)=>{
    e.preventDefault();
})


const AddTask = function(){
    if(input.value.trim()==="" ) return ;

    const newTask = document.createElement('li');
    newTask.innerText=input.value.trim();
    listHead.appendChild(newTask)
    input.value="";

}
const RemoveList= function(){
    if(document.querySelector('.tasks').lastChild){
        listHead.removeChild(listHead.lastChild);
    }
}
AddButton.addEventListener('click',AddTask);
RemoveButton.addEventListener('click',RemoveList)