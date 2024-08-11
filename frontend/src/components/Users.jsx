import { useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { useEffect } from "react"
import {useNavigate} from 'react-router-dom';
import { BACKEND_URL } from "../config"



export const Users = () => {
    
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const[filter,setFilter]= useState("");

    useEffect(()=>{
        axios.get(`${BACKEND_URL}api/v1/user/bulk?filter=`+filter)
        .then(response=>{
            setUsers(response.data.user)
        })
    },[filter])

    return <>
        <div className="font-bold mt-2 px-4 text-lg">
            Users
        </div>
        <div onChange={(e)=>{
            setFilter(e.target.value)
        }} className="my-2">

            <input type="text" placeholder="Search users..." className="w-full px-6 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate= useNavigate();

    return <div className="flex justify-between my-2 px-4">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>
        

        <div className="flex flex-col justify-center h-full">
            <Button onClick={(e)=>{
                navigate("/sendmoney?id="+user._id+"&name= "+user.firstName); 
            }} label={"Send Money"} />
        </div>
    </div>
}