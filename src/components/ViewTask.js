import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskService from "../services/TaskService";
import Select from 'react-select';
import users from '../users.jpg'

// const options = [
//     {value: 'chocolate' , label: 'Chocolate'},
//     {value: 'strawberry' , label: 'Strawberry'},
//     { value: 'vanilla', label: 'Vanilla'}
// ];

function ViewTask(props){
    const viewObj={
        task_list:[]
    }

    const [view,setView]=useState(viewObj)
    const [user,setUser]=useState('Anand')
    const[selectedOption, setSelectedOption] = useState(null);
    const[options, setOptions] = useState([])



    useEffect(()=>{
        document.title=`Welcome ${user}`
        TaskService.getTasks().then((res)=>{
            console.log(res);
            if(res.status==200){
                setView({task_list:res.data})
            }
        })
    },[user])

    const handleInputChange=(searchString)=>{
        console.log(searchString);
        TaskService.searchTask(searchString).then((res)=>{
            setOptions(res.data)
            console.log(options);
        })
    }

    const updateTask=(taskId)=>{
        props.history.push(`/update/${taskId}`)
    }

    const deleteTask=(taskId)=>{
        TaskService.deleteTask(taskId).then(res=>{
            setView({task_list: view.task_list.filter(task=>task.taskId!==taskId)})
        })
    }

    return(
        <div className="centerTask">
            <div style={{marginRight:"1300px"}}>
                <Link to="/logout"><button className="btn btn-success">Logout</button></Link>
            </div>

            <div className="logo">
                <img src={users} alt="logo" height="100px" width="100px"/>
                <h1 style={{marginLeft:"550px"}}>Welcome {user}!</h1>
            </div> 

            <div className="navbar-right">
                <Link to="/addtask" style={{textDecoration:"none"}}>Add Task</Link>
            </div>

              {/* <div className="search">
                <input type="text" placeholder="Search" id="search-text-input" />
                <button type="submit">Search<i className="fa fa-search"></i></button>
            </div>  
             */}
            <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  onInputChange={handleInputChange}
           />

            <div className="task-table container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th width="200px">Task Id</th>
                            <th width="500px">Tasks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            view.task_list.map(
                                (task)=>
                                <tr key={task.id}>
                                    <td>{task.taskId}</td>
                                    <td>{task.taskName}</td>
                                    <td>
                                        <button onClick={ ()=>updateTask(task.taskId)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"30px"}} onClick={ ()=> deleteTask(task.taskId)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div> 
            

        </div>
    )
}
export default ViewTask