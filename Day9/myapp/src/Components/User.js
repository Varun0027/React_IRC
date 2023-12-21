import React, { useEffect, useState } from "react";
import { getuser } from "../API/Api";
function User() {
    const [user,setuser]=useState([]);
    const fetchData=async()=>{
        try{
           const res= await getuser()
           console.log(res.data)
           setuser(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <>
            <table className="table-n">
                <thead>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user)=>(
                      <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>
                          <button className='edit-btn'>Edit</button>
                      </td>
                      <td>
                          <button className='del-btn'>Delete</button>
                      </td>
                  </tr>
  
                    ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default User;

