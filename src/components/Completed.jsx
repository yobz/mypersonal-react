import React from 'react'
import { Button } from 'react-bootstrap';
import { dueDate } from '../Functions/Functions';

const Completed = ({taskArr,handleShow}) => {
	if(taskArr){
		return(
			
			taskArr.map( (data,i) => {
				let hours = Math.floor(data.minutes_logged / 60);          
				let minutes = data.minutes_logged % 60;
				return <tr key={i}>
					<td>{data.project_name} - {data.task_name}</td>
					{ dueDate(data.due_date) }
					{ dueDate(data.due_date,false) }
					<td>{hours}h {minutes}m</td>
					<td>{ 
							!data.notes ? 'No Notes' : 
							<Button variant="primary" onClick={  (e) => {e.preventDefault(); handleShow(data.notes)}}>
								Show Notes
							</Button>
						}</td>
				</tr>
			} )
		)
	}
}

export default Completed