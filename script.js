const text = document.querySelector(".text");
const creatBtn = document.querySelector(".button_input");
const container = document.querySelector("#container");
const taskcount = document.querySelector("h4");
const newDiv =  document.createElement('div');
newDiv.id = "task";
container.append(newDiv);
let list = [];
if (localStorage.getItem("todo")) {
    list =  JSON.parse(localStorage.getItem("todo"))
    creat();
}
creatBtn.addEventListener("click",()=>{
    let toDoarr = {
        todo:text.value,
    };
    list.push(toDoarr);
    localStorage.setItem('todo', JSON.stringify(list))
    creat();
});
function creat () {
    let html = "";
    list.forEach(function(item,i){
        html+=  `<p>${item.todo}</p>
         `;
    })
        newDiv.innerHTML = html;  
}
taskcount.innerHTML = list.length+1;









    
   





