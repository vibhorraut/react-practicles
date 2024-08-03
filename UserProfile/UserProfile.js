import { useState } from "react";
import "./UserProfile.css"
import React from 'react';

export function UserProfile(user){
    return <div className="user-profile-container">
        <p>Name: {user.firstName}  {user.lastName}</p>
        <p className="red-color">Age: {user.age}</p>
         {/* <p style={{color: user.isAdmin?"green":"red"}}>Gender: {user.gender}</p> */}
         <p className={user.isAdmin?"admin-class":"non-admin-class"}>
            <React.Fragment>Gender: {user.gender}</React.Fragment>
         </p>
        {user.isAdmin? <p>I am an Admin</p>:<p>I am not an Admin</p>}
        <button onClick={user.onDelete}>Delete</button>
    </div>
}

// Fragment :  <></>  <Fragment></Fragment>