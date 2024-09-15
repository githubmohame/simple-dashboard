import "./UserList.css"
import { User } from "../User/User";
import { useState } from "react";
import { AddUser } from "../AddUser/AddUser";
export function UserList({Mapusers,setMapUsers,setSelectedUser ,curUserSelect}){
   //console.log(Mapusers);
   let userComponents=[];
   //userComponents.push(<User name={key} setMapUsers={setMapUsers} Mapusers={Mapusers}/>);
   let keys=Object.keys(Mapusers);
   for(let i=0;i<keys.length;i++){
    userComponents.push(<User name={keys[i]} key={keys[i]} setMapUsers={setMapUsers} Mapusers={Mapusers} setSelectedUser={setSelectedUser} curUserSelect={curUserSelect}/>);
   }
   //console.log(userComponents)
    return (<>
    <div className="user-list-part">
    <h3 className="user-list-title">Users</h3>
    {userComponents}
    <AddUser setUser={setMapUsers}MapUser={Mapusers}/>
    </div>
    </>);
}