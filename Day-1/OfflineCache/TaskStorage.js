var taskStorage = {
		getAll: function(){
			var result = [];
			for(var i=0;i<window.localStorage.length;i++){
				var taskId = window.localStorage.key(i);
				var taskName = window.localStorage.getItem(taskId);
				result.push({taskId : taskId, name : taskName});
			}
			return result;
		},
		add : function(taskName){
			var taskId = new Date().getTime().toString();
			window.localStorage.setItem(taskId, taskName);
			return {taskId : taskId, name : taskName};
		},
		remove : function(taskId){
			window.localStorage.removeItem(taskId);
		}
	}