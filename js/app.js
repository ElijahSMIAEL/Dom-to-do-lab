const addBtn = document.querySelector('#submit-button')
const textInput = document.querySelector('#text-input')
const todoList = document.querySelector('#todo-list')
const resetBtn = document.querySelector('#reset-button')

resetBtn.addEventListener('click', resetList)
addBtn.addEventListener('click', addTodo)


function addTodo(evt) {
  const li = document.createElement('li')
  li.textContent = textInput.value
  if (textInput.value !== "") {
  todoList.appendChild(li)
  textInput.value = ""
} else {
  return
}
}
function resetList(evt) {
  todoList.innerHTML = ""
}
