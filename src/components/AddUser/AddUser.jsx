import { useState } from "react";
import "./AddUser.css"
export function AddUser({setUser,MapUser}){
    const [userName,setUserName]=useState("");
    function onChangeUserName(e){
        setUserName(e.target.value);
    }
    function addUserFunc(){
        if(MapUser[userName]!=null){
            return;
        }
        MapUser[userName]=[];
        setUserName("");
        setUser({"value":MapUser});
    }
    return (<>
    <div className="add-user-part">
        <div>
        <input className="add-user-input" type="text" value={userName} onChange={onChangeUserName} placeholder="Add New User"/>
        </div>
        <button className="add-user-btn" onClick={addUserFunc}>Add User</button>
    </div>
    </>);
}