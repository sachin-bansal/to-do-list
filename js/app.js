
//Show todays date
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// if ('serviceWorker' in navigator) {     
//   navigator.serviceWorker  
//   .register('./sw.js').then(() =>{
//   console.log('Service Worker Registered');
//   })
// }

const app = document.querySelector('to-do-list');
const input = document.getElementById('input');
document.getElementById('button').addEventListener("click", addTodo);

function addTodo(e){
  e.preventDefault();
  const toDo = input.value;
  if(toDo){
    app.addTodo(toDo);        
  }
  input.value = "";
}




