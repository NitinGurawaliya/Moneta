import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"

export const Signin = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate= useNavigate()
  const SigninHandler = async () => {
    try {
      const response = await axios.post("http://localhost:3002/api/v1/user/signin", { // Using HTTP for local development
        username,
        password
      });
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        console.error("Token not found in response", response);
      }
    } catch (error) {
      console.error("Error during sign in", error);
    }
  };
  




    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">  
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <Subheading  label={"Enter your info to access your account"} />

        <InputBox  onChange={(e)=>{
          setUsername(e.target.value)
        }} placeholder="nitin@gmail.com" label={"Email"} />

        <InputBox onChange={(e)=>{
          setPassword(e.target.value)
        }} placeholder="@#$%^&" label={"Password"} />
        <div className="pt-4">
          <Button onClick={SigninHandler} label={"Sign up"} />
        </div>
        <BottomWarning label={"Didn't have an account?"} buttonText={"Sign up"} to={"/signup"} />

      </div>
    </div>
  </div>





}

