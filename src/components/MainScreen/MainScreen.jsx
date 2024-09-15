import "./MainScreen.css";
import { Title } from "../Title/Title";
import { UserList } from "../UserList/UserList";
import { useState } from "react";
import { TaskList } from "../TaskList/TakList";
export function MainScreen(){
    const[Mapusers1,setUsers]=useState({"value":{}});
    const [selectUser,setSelectedUser]=useState("");
    let Mapusers=Mapusers1["value"]
    return (<div className="main-screen">
    <div className="center-card">
        <Title />
        <UserList Mapusers={Mapusers} setMapUsers={setUsers} setSelectedUser={setSelectedUser} curUserSelect={selectUser} />
        {selectUser!=""?<TaskList userName={selectUser} setMapUser={setUsers} userMap={Mapusers}/>:<></>}
    </div>
    </div>);
}