class Task {
	constructor(description) {
		this.description = description;
		this.completed = false;
	}

	toggleCompleted() {
		this.completed = !this.completed;
	}
}

class ToDoList {
	constructor() {
		this.tasks = [];
	}

	addTask(description) {
		const task = new Task(description);
		this.tasks.push(task);
	}

	removeTask(index) {
		this.tasks.splice(index, 1);
	}

	displayTasks() {
		const taskListElement = document.getElementById('taskList');
		taskListElement.innerHTML = '';

		this.tasks.forEach((task, index) => {
			const listItem = document.createElement('li');
			listItem.innerHTML = `
        <span>${task.description}</span>
        <button class="qwe" onclick="removeTask(${index})">Remove</button>
      `;
			listItem.style.textDecoration = task.completed ? 'line-through' : 'none';
			taskListElement.appendChild(listItem);
		});
	}
}

const todoList = new ToDoList();

function addTask() {
	const taskInput = document.getElementById('taskInput');
	const taskDescription = taskInput.value.trim();

	if (taskDescription !== '') {
		todoList.addTask(taskDescription);
		taskInput.value = '';
		todoList.displayTasks();
	}
}

function removeTask(index) {
	todoList.removeTask(index);
	todoList.displayTasks();
}

function toggleTask(index) {
	todoList.tasks[index].toggleCompleted();
	todoList.displayTasks();
}

todoList.displayTasks();
