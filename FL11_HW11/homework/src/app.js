let rootNode = document.getElementById("root");

// Your code goes here
// ui variables
const form = document.querySelector('.inputForm');
const taskList = document.querySelector('.todo-list');
const taskInput = document.querySelector('#inputTask');
const addTaskBtn = document.querySelector('.addTaskBtn');
const addTaskButton = document.querySelector('.submit-btn');
const notification = document.querySelector('.notif');
const maxListItems = 10;
// load all event listeners;
loadEventListeners();
// load event listeners
function loadEventListeners() {
  form.addEventListener('input', inputDataCheck);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', checkedBox);
  taskList.addEventListener('click', editItem);
  taskList.addEventListener('click', removeItem);
  taskList.addEventListener('dragstart', dragStart);
  taskList.addEventListener('dragleave', dragLeave);
  taskList.addEventListener('dragover', dragOver);
  taskList.addEventListener('drop', drop);
}
function getLiItemsCount() {
  let liItemsCount = document.getElementsByTagName('li').length;
  return liItemsCount;
}
function inputDataCheck() {
  getLiItemsCount();
  let input = taskInput.value;
  if (getLiItemsCount() >= maxListItems) {
    addTaskBtn.disabled = true;
    addTaskButton.style.color = 'graytext';
    taskInput.disabled = true;
    notification.style.visibility = 'visible';
  } else if (input.length > 0) {
    taskInput.disabled = false;
    addTaskBtn.disabled = false;
    addTaskButton.style.color = 'grey';
  } else if (getLiItemsCount() < maxListItems) {
    taskInput.disabled = false;
    addTaskBtn.disabled = false;
    addTaskButton.style.color = 'grey';
    notification.style.visibility = 'hidden';
  } else {
    addTaskBtn.disabled = true;
    addTaskButton.style.color = 'graytext';
    notification.style.visibility = 'hidden';
  }
  
}
// add task
function addTask(e) {
  e.preventDefault();
  inputDataCheck();

  let num = document.querySelector('.todo-list').children.length;
  num++;
  const li = document.createElement('li');
  li.setAttribute('draggable', 'true');
  li.className = 'list-item';
  // create checkbox, set attributes;
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'todo_item');
  checkbox.setAttribute('id', `checkbox-${num}`);
  li.appendChild(checkbox);
  // create label for checkbox;
  const label = document.createElement('label');
  label.setAttribute('for', `checkbox-${num}`);
  label.innerHTML = taskInput.value;
  li.appendChild(label);
  // create edit and delete btn;
  const edit = document.createElement('i');
  edit.className = 'material-icons';
  edit.innerHTML = 'edit';
  li.appendChild(edit);
  const remove = document.createElement('i');
  remove.className = 'material-icons icn-delete';
  remove.innerHTML = 'delete';
  li.appendChild(remove);
  // append li to ul;
  taskList.appendChild(li);
  // clear input
  taskInput.value = '';
  inputDataCheck();
}

function checkedBox(e) {
  const check = e.target;
  if (check.checked) {
    check.setAttribute('disabled', 'true');
  }
}
// edit item
function editItem(e) {
  let item = e.target.parentNode;
  const saveIcn = item.querySelector('.icn-save');
  const label = item.querySelector('label');
  const editBtn = item.querySelector('.icn-edit');
  const editInp = item.querySelector('.edit-itm');
  editInp.classList.remove('hidden');
  label.classList.add('hidden');
  saveIcn.classList.remove('hidden');
  editBtn.classList.add('hidden');
}
// remove item
function removeItem(e) {
  if (e.target.classList.contains('icn-delete')) {
    e.target.parentElement.remove();
  }
  inputDataCheck();
}
// drag n drop section
let item;
function dragStart(e) {
  item = e.target;
}
function dragLeave(e) {
  e.target.style.transform = '';
}
function dragOver(e) {
  if (e.target.className === 'list-item') {
    e.target.style.transform = 'translateX(20px)';
    e.preventDefault();
  }
}
function drop(e) {
  if(e.target.className === 'list-item'){
    e.preventDefault();
    taskList.insertBefore(item, e.target);
    e.target.style.transform = '';
  }
}

