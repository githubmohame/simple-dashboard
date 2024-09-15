import "./TaskList.css";
import { Task } from "../Task/Task";
import { AddTask } from "../AddTask/AddTask";
function getTask(l1,userName,setMapUser,userMap){
   let taskComponents=[];
   //console.log(l1);
   for(let i=0;i<l1.length;i++){
        //console.log("hell");
        
        taskComponents.push(<Task taskText={l1[i]} key={l1[i]} setMapUser={setMapUser} 
            selectUser={userName} userMap={userMap} />);
   }
   return taskComponents;
}

export function TaskList({userName,setMapUser,userMap}){
    let taskComponents=getTask(userMap[userName]??[],userName,setMapUser,userMap);
    //console.log(taskComponents);
    return(<>
    <h2 className="title-task-list">Task for {userName}</h2>
        {taskComponents}
    <AddTask selectedUser={userName} setUserMap={setMapUser} userMap={userMap}/>
    </>)
}