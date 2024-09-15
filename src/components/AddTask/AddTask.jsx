import { useEffect, useState } from "react";
import "./AddTask.css";
function onChangeTaskText(taskText,setTaskText ){
   setTaskText(taskText);
}
function onClickAddTask(taskText,selectedUser,setUserMap,userMap,setTaskText){
    //console.log(userMap[selectedUser].find(taskText));
    if(userMap[selectedUser].indexOf(taskText)!=-1){
        return;
    }
    onChangeTaskText("",setTaskText)
    userMap[selectedUser].push(taskText);
    setUserMap({"value":userMap});
}
export function AddTask({selectedUser,setUserMap,userMap}){
    //console.log("bell");
    const [taskText,setTaskText] = useState("");
    
    useEffect(()=>{
        //console.log("killer");
        
        setTaskText("");
    },[selectedUser])
    return (<>
    <div className="add-task-part">
        <div>
        <input className="add-task-input" value={taskText} type="text" placeholder="Add New User"
        onChange={(e)=>{
            onChangeTaskText(e.target.value,setTaskText);
        }}/>
        </div>
        <button className="add-task-btn"
        onClick={()=>{
            //console.log(taskText);
            onClickAddTask(taskText,selectedUser,setUserMap,userMap,setTaskText);
        }}
        >Add Task</button>
    </div>
    </>);
}