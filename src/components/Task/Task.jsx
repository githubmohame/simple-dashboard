import "./Task.css"
function onClickDelete(taskText,setMapUser,selectUser,userMap){
    const index = userMap[selectUser].indexOf(taskText);
if (index > -1) { // only splice array when item is found
    userMap[selectUser].splice(index, 1); // 2nd parameter means remove one item only
    setMapUser({"value":userMap});
}

}
export function Task({taskText,setMapUser,selectUser,userMap}){
    return(<div className="task-part">
        <span >{taskText}</span>
        <div>
        <button className="btn-task" onClick={()=>{
            onClickDelete(taskText,setMapUser,selectUser,userMap)
        }}>Delete</button>
        </div>
    </div>);
}