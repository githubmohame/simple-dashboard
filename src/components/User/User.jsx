import { useState } from "react";
import "./User.css"
export function User({name,Mapusers,setMapUsers,setSelectedUser ,curUserSelect}){
    function onDelete(){
        //console.log(name);
        delete Mapusers[`${name}`];
        if(curUserSelect==name){
            setSelectedUser("");
        }
        //console.log(Mapusers);
        setMapUsers({"value":Mapusers});
    }
    function onSelectUser(){
        setSelectedUser(name);
    }
    return (<>
    <div className="user-part">
        <span><strong>{name}</strong></span>
        <div>
        <button className="btn-user" onClick={onSelectUser}>Select</button>
        <button className="btn-user" onClick={onDelete}>Delete</button>
        </div>
    </div>
    
    </>);
}