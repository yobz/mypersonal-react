import { useEffect, useState, useReducer} from 'react';
import './App.scss';
import data from './tasks.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs ,Table, Button, Modal, Form} from 'react-bootstrap';
import OngoingTask from './components/OngoingTask';
import Completed from './components/Completed';
import { myReducer } from './Functions/Reducer'

const App = () => {
  const [tabKeygentask, initTabKeygentask] = useState('one');
  const [tabKeyteamtask, initTabKeyteamtask] = useState('one');
  
  const [myTask, setMyTask] = useState([]);
  const [teamTask, setTeamTask] = useState([]);
  
  const [markTaskArr, setMarkTaskArr] = useState([])
  const [markTaskData, setmarkTaskData] = useState({
    project_name: "",
    task_name: "",
    due_date: "",
    completion_date: "",
    minutes_logged: "",
    notes: ""
  });
  
  const [teamMarkTaskArr, setTeamMarkTaskArr] = useState([])
  const [teamMarkTaskData, setTeamMarkTaskData] = useState({
    project_name: "",
    task_name: "",
    due_date: "",
    completion_date: "",
    minutes_logged: "",
    notes: ""
  });
  
  // const [state, dispatch] = useReducer(myReducer,[])

  const [show, setShow] = useState(false);
  const [taskNotes, setTaskNotes] = useState('');
  
  const handleShow = (notes) =>{
    setTaskNotes(notes)
    setShow(true);
  }
  
  const handleClose = () =>{ 
    setTaskNotes('');
    setShow(false);
  } 
  
  const [query, setQuery] = useState("");
  
  useEffect(() => {
    setMyTask(data.my_tasks);
    setTeamTask(data.team_tasks);
  }, [myTask,teamTask] )
  
  let {
    project_name,
    task_name,
    due_date,
    completion_date,
    minutes_logged,
    notes
  } = [markTaskData,teamMarkTaskData];

  return (

    <div className="App">

      <div className="d-flex justify-content-end mt-4 mx-5">
        <Form.Control className='w-25' type="search" placeholder="Search Project / Tasks" onChange={ e => setQuery(e.target.value) }  />
      </div>
      <div className="mx-5 pt-2">
        <Tabs className='my-tab' activeKey={tabKeygentask} onSelect={(e) => initTabKeygentask(e)}>
          <Tab eventKey="one" title="My Ongoing Task">
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Project / Tasks</th>
                <th> 
                  <span>Due Date</span>
                </th>
                <th>Total Hours</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className='align-middle'>
              {
                myTask.length === 0 ? <tr><td className='text-center' colSpan={4}>No Ongoing Tasks</td></tr> : 
                <OngoingTask query={query} taskData={myTask} taskType='personal' setMyTask={setMyTask} markTaskArr={markTaskArr} setMarkTaskArr={setMarkTaskArr} />
              }
            </tbody>
            </Table>
          </Tab>
          <Tab eventKey="two" title="My Completed Tasks">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Project / Task</th>
                  <th>Due Date</th>
                  <th>Completion Date</th>
                  <th>Total Hours</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className='align-middle'>
                {
                  markTaskArr.length === 0 ? <tr><td className='text-center' colSpan={5}>Empty</td></tr> : 
                  <Completed taskArr={markTaskArr} handleShow={handleShow} /> 
                }
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      

        <Tabs className='team-tab' activeKey={tabKeyteamtask} onSelect={(e) => initTabKeyteamtask(e)}>
          <Tab eventKey="one" title="My Team Ongoing Task">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Project / Tasks</th>
                  <th>Due Date</th>
                  <th>Total Hours</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='align-middle'>
                {
                  teamTask.length === 0 ? <tr><td className='text-center' colSpan={4}>No Ongoing Tasks</td></tr> : 
                  <OngoingTask query={query} taskData={teamTask} taskType='team' setMyTask={setMyTask} teamMarkTaskArr={teamMarkTaskArr} setTeamMarkTaskArr={setTeamMarkTaskArr}/>
                }
              </tbody>

            </Table>
          </Tab>
          <Tab eventKey="two" title="My Team Completed Task">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Project / Task</th>
                  <th>Due Date</th>
                  <th>Completion Date</th>
                  <th>Total Hours</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className='align-middle'>
                {
                  teamMarkTaskArr.length === 0 ? <tr><td className='text-center' colSpan={5}>Empty</td></tr> : 
                  <Completed taskArr={teamMarkTaskArr} handleShow={handleShow} /> 
                }
              </tbody>
            </Table>
          </Tab>
        
        </Tabs>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><>{taskNotes}</></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default App
