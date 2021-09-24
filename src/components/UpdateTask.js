import { useEffect, useState } from "react"
import TaskService from "../services/TaskService"

function UpdateTask(props){
    const updateTaskObj={
        taskId:props.match.params.taskId,
        taskName:''
    }

    const [update,setUpdate]=useState(updateTaskObj)

    useEffect(()=>{
        const taskId=props.match.params.taskId
        TaskService.getTaskById(taskId).then((res)=>{
            let task_list=res.data;
            setUpdate({taskName: task_list.taskName})
        })
    },[])

    const changeTaskNameHandle=(event)=>{
        setUpdate({...update,[event.target.name]:event.target.value})
    }
    
    const updateT=(event)=>{
        const taskId=props.match.params.taskId
        console.log(taskId);
        event.preventDefault();
        let task_list={taskName: update.taskName}
        console.log('task_list => '+JSON.stringify(task_list));

        TaskService.updateTask(task_list,taskId).then(res=>{
            props.history.push('/viewtask')
        })
    }

    return(
        <div className="centerTask" style={{border:"1px solid black",borderRadius:"10px",marginLeft:"400px",marginTop:"100px",marginRight:"400px",paddingLeft:"0px"}}>
            <div className="edittask-heading">
                <h3>Update Task</h3>
            </div>
            <div className="edittask-text">
                <input type="text" placeholder="Enter your task" name="taskName" value={update.taskName} onChange={changeTaskNameHandle} />
            </div>
            <div className="edittask-submit">
                <input className="btn btn-primary" type="submit" value="Update" onClick={updateT} />
            </div>
        </div>
    )
}

export default UpdateTask