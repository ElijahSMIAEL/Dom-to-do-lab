const addBtn = document.querySelector('#submit-button')
const textInput = document.querySelector('#text-input')
const todoList = document.querySelector('#todo-list')

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
