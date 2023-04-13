import React from 'react'
import { Button } from 'react-bootstrap';
import { search,dueDate,markComplete } from '../Functions/Functions';

const OngoingTask = ({query,taskData,taskType,dispatch,setMyTask,setMarkTaskArr, setTeamMarkTaskArr, markTaskArr, teamMarkTaskArr }) => {
	if(taskData) {

		return(
			search(taskData,query).map((data,i) => {
			let hours = Math.floor(data.minutes_logged / 60);          
			let minutes = data.minutes_logged % 60;

			return <tr key={i}>
			
					<td>{data.project_id} - {data.project_name}  &gt;&gt; {data.task_path[0]} &gt;&gt; {data.task_path[1]} &gt;&gt; {data.task_path[2]} &gt;&gt; {data.task_name} </td>
					{dueDate(data.due_date)}
					<td>
						{hours}h {minutes}m
					</td>
					<td>
							<Button variant="primary" size='sm' onClick={ (e) =>  markComplete(i,taskData,taskType,dispatch,setMyTask,setMarkTaskArr, setTeamMarkTaskArr, markTaskArr, teamMarkTaskArr) }>
								Mark Complete 
							</Button>
					</td>
				</tr>
			})
		)
	}
}

export default OngoingTask