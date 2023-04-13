const ACTIONS = {
	PERSONAL_TASK_ARR : 'personal_task_arr',
	TEAM_TASK_ARR : 'team_task_arr',
}

const myTaskArr = (project_name, task_name,due_date,completion_date,minutes_logged,notes) =>{
		return {
			project_name : project_name,   
			task_name: task_name,
			due_date: due_date,
			completion_date: completion_date,
			minutes_logged: minutes_logged,
			notes: notes  
		}
}

const teamTaskArr = (project_name, task_name,due_date,completion_date,minutes_logged,notes) =>{
	return {
		project_name : project_name,   
		task_name: task_name,
		due_date: due_date,
		completion_date: completion_date,
		minutes_logged: minutes_logged,
		notes: notes  
	}
}

const myReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.PERSONAL_TASK_ARR:
			return [...state, myTaskArr(
				action.payload.project_name,   
				action.payload.task_name,
				action.payload.due_date,
				action.payload.completion_date,
				action.payload.minutes_logged,
				action.payload.notes  
			)]
			
		case ACTIONS.TEAM_TASK_ARR:
		  
			return [...state, teamTaskArr(
				action.payload.project_name,   
				action.payload.task_name,
				action.payload.due_date,
				action.payload.completion_date,
				action.payload.minutes_logged,
				action.payload.notes  
			)]
		
		default:
			state;
	}
}

export {ACTIONS, myReducer}