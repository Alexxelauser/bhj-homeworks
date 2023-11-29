let inputBox = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

const removeTask = e => {
	e.target.closest(".task").remove();
}

const addTask = () => {
	tasksList.insertAdjacentHTML("afterbegin", `
		<div class="task">
			<div class="task__title">
				${inputBox.value}
			</div>
			<a href="#" class="task__remove">&times;</a>
		</div>`
		)
		inputBox.value = "";

	tasksList.addEventListener("click", e => {
		if (e.target.classList.contains("task__remove")) {
		e.target.parentElement.remove();
		}
});

	[...(tasksList.getElementsByClassName("task__remove"))].forEach(element => {
			element.addEventListener("click", removeTask)
		});

		e.preventDefault();	
}

let tasksAdd = document.getElementById("tasks__add");
let tasksAddButton = () => {tasksAdd.addEventListener("click", e => {
    e.preventDefault();
		if (inputBox.value.trim().length > 0) {
			addTask() 
		}
	})
}
tasksAddButton();