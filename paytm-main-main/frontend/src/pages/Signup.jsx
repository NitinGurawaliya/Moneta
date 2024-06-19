import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"
import axios from "axios"

export const Signup = () => {
  // const navigate = useNavigate()
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <Subheading label={"Enter your infromation to create an account"} />

        <InputBox onChange={e=>{
          setFirstName(e.target.value)
        }} placeholder="Nitin" label={"First Name"} />

        <InputBox onChange={e=>{
          setLastName(e.target.value)
        }} placeholder="Gurawaliya" label={"Last Name"} />

        <InputBox onChange={(e)=>{
          setUsername(e.target.value)
        }} placeholder="Nitin@gmail.com" label={"Email"} />

        <InputBox onChange={(e)=>{
          setPassword(e.target.value)
        }} placeholder="@#$%^&" label={"Password"} />
        <div className="pt-4">

          <Button onClick={HandlerSignup} label={"Sign up"} />
        </div>

        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>

    </div>
  </div>

  
async function HandlerSignup(){
  const response =await axios.post("http://localhost:3002/api/v1/user/signup",{
    firstName,
    lastName,
    username,
    password
    
  });
  if(response.data.token){
    navigate("/dashboard")
    localStorage.setItem("token",response.data.token)
  }
  else{
    alert(response.data.msg)
  }
}
};
