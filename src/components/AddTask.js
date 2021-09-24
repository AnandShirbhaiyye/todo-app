import { useState } from "react"
import TaskService from "../services/TaskService"

function AddTask(props){
    const addTaskObj={
        taskName:''
    }

    const [add,setAdd]=useState(addTaskObj)

    const changeTaskNameHandle=(event)=>{
        setAdd({...add,[event.target.name]:event.target.value})
    }

    const addTask=(e)=>{
        e.preventDefault()
        let task_list={taskName: add.taskName}
        console.log('task_list => '+JSON.stringify(task_list));

        TaskService.createTask(task_list).then(rees=>{
            props.history.push('/viewtask')
        })
    }
    return(
        <div className="centerTask" style={{border:"1px solid black",
        borderRadius:"10px",marginLeft:"200px",marginTop:"100px",marginRight:"500px",paddingLeft:"0px"}}>
            <div className="addtask-heading">
                <h3>Add Task</h3>
            </div>
            <div className="addtask-text">
                <input type="text" placeholder="Enter your task" name="taskName"
                value={add.taskName} onChange={changeTaskNameHandle}/>
            </div>
            <div className="addtask-submit">
                <input className="btn btn-primary" type="submit" value="Add" onClick={addTask}/>
            </div>
        </div>
    )
}

export default AddTask