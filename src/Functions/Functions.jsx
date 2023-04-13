import React, {useReducer} from 'react'
import { ACTIONS } from '../Functions/Reducer'


const markComplete = (id,taskData, taskType, dispatch, setMyTask, setMarkTaskArr, setTeamMarkTaskArr, markTaskArr, teamMarkTaskArr ) => {

	let mark_task = taskData.filter( task => { return task } )[id]
	
	if(taskType === 'personal'){
		// dispatch( {type: ACTIONS.PERSONAL_TASK_ARR, payload: {
		// 	project_name : mark_task.project_name,   
		// 	task_name: mark_task.task_name,
		// 	due_date: mark_task.due_date,
		// 	completion_date: mark_task.completion_date,
		// 	minutes_logged: mark_task.minutes_logged,
		// 	notes:mark_task.notes
		// }})
		setMarkTaskArr([...markTaskArr,  {
				project_name : mark_task.project_name,   
				task_name: mark_task.task_name,
				due_date: mark_task.due_date,
				completion_date: mark_task.completion_date,
				minutes_logged: mark_task.minutes_logged,
				notes:mark_task.notes  
		}])
	}

	if(taskType === 'team'){
		setTeamMarkTaskArr([...teamMarkTaskArr,  {
				project_name : mark_task.project_name,   
				task_name: mark_task.task_name,
				due_date: mark_task.due_date,
				completion_date: mark_task.completion_date,
				minutes_logged: mark_task.minutes_logged,
				notes:mark_task.notes  
		}])

		// dispatch( {type: ACTIONS.TEAM_TASK_ARR, payload: {
		// 	project_name : mark_task.project_name,   
		// 	task_name: mark_task.task_name,
		// 	due_date: mark_task.due_date,
		// 	completion_date: mark_task.completion_date,
		// 	minutes_logged: mark_task.minutes_logged,
		// 	notes:mark_task.notes
		// }})
	}    
	
	let markTask_remove = taskData.filter( (task,i) => {
		if(id === i){
			return taskData.splice(i,1)
		}
	})
	setMyTask(markTask_remove)

}

const dueDate = ( date, _ = true ) => {
	if(date){
		const data = new Date(date)
		
		const year = data => data.toLocaleString("en-US", { year: "numeric"})
		const month = data => data.toLocaleString("en-US", { month: "long"})
		const day = data => data.toLocaleString("en-US", { day: '2-digit'})
	 
		const tz = data => data.toLocaleString("en-US", { timeZone: 'CET',hour: '2-digit',hour12: false , minute:'2-digit'})
		var newDate = day(data) + ' ' + month(data) + ' ' + year(data) + ' @' + tz(data) + ' CET';
		
		var currDate = new Date(Date.now());
		var nowDate = day(currDate) + ' ' + month(currDate) + ' ' + year(currDate) + ' @' + tz(currDate) + ' CET';

		if( _ ){
			return  <td className={nowDate > newDate ? 'bg-danger text-white' : ''} >
				{newDate}
			</td>
		} 
		return <td>{newDate}</td>
		
	} 
	return( <td> -- </td> )
}


const searchKeys = ["project_id", "project_name", "task_path", "task_name"];
const search = (data, query) => {
	return data.filter((item) => 
		searchKeys.some(  (key) => item[key].toString().toLowerCase().includes(query.toLowerCase()) )
	)
}    

export {search,dueDate,markComplete}