
	window.addEventListener("DOMContentLoaded", init);
	
	function init(){
		document.getElementById("btnAddTask").addEventListener("click",onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click",onBtnRemoveCompletedClick);
		var allTasks = taskStorage.getAll();
		for(var i=0;i<allTasks.length;i++){
			
			addTaskToUi(allTasks[i]);
		}

		document.getElementById("btnYes").addEventListener("click", onBtnYesClick);
		document.getElementById("btnNo").addEventListener("click", onBtnNoClick);


	}
	function onBtnYesClick(){
		window.location.reload();
	}
	function onBtnNoClick(){
		document.getElementById("divCacheUpdate").style.display = "none";
	}
	function onBtnAddTaskClick(){
		
		var taskName = document.getElementById('txtTask').value;
		var task = taskStorage.add(taskName);
		addTaskToUi(task);
	}
	function addTaskToUi(task){
		var newTask = document.createElement("li");
		newTask.setAttribute("task-id", task.taskId);
		newTask.addEventListener("click", onTaskItemClick);
		newTask.innerHTML = task.name;
		document.getElementById("ulTaskList").appendChild(newTask);
	}
	function onTaskItemClick(){
		this.classList.toggle("completed");
	}
	function onBtnRemoveCompletedClick(){
		var taskList = document.getElementById("ulTaskList").children;
		for(var i=taskList.length-1;i>=0;i--)
			if (taskList[i].classList.contains("completed")){
				var taskId = taskList[i].getAttribute("task-id");
				taskStorage.remove(taskId);
				taskList[i].remove();

			}
	}