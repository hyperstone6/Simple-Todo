const todoInput = document.getElementById('todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.list')
const clearList = document.querySelector('.clear-button')

todoButton.addEventListener('click', button => {
  button.preventDefault()
  if(todoInput.value !== '') {

    let listGroup = document.createElement('div')
    let listItems = document.createElement('ul')
    let listContent = document.createElement('li')
    let listButton = document.createElement('button')

    listGroup.setAttribute('class', 'list-group')    
    listItems.setAttribute('class', 'list-items')
    listContent.setAttribute('class', 'list-content')
    listButton.setAttribute('class', 'list-button')
    listButton.innerText = 'X'

    todoList.appendChild(listGroup)
    listGroup.appendChild(listItems)
    listItems.appendChild(listContent)
    listItems.appendChild(listButton)

    listButton.addEventListener('click', button => {
      listGroup.remove()
    })

    listContent.innerText = todoInput.value

    listContent.addEventListener('dblclick', text => {
      listContent.style.textDecoration = 'line-through'
      listContent.style.fontWeight = 'normal'
      listContent.style.color = 'grey'
    })

    listContent.addEventListener('mousedown', text => {
      text.preventDefault()
    })

    listContent.addEventListener('click', () => {
      listContent.style.textDecoration = 'none'
      listContent.style.fontWeight = 'bold' 
      listContent.style.color = 'black'
    })
  }
  todoInput.value = ''
})

clearList.addEventListener('click', button => {
  button.preventDefault()
  while(todoList.firstChild) {
    todoList.removeChild(todoList.firstChild)
  }
})