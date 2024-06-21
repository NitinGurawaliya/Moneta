// import axios from "axios"
// import { useEffect, useState } from "react"

// export function Balance(){
    
//     const [balance,setBalance]= useState("")

//     const getBalance = async()=>{

//        const token=  localStorage.getItem("token")
//        console.log(token)
        
//         const response = await axios.get("https://localhost:3002/api/v1/user/balance",{
//             headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         });
//         setBalance(response.data.balance);

//     }

//     useEffect(()=>{
//         getBalance()
//     },[])

//     return <div className="flex">
//     <div className="font-bold text-lg mt-4">
//         Your balance Rs
//     </div>


//     <div className="font-semibild ml-4 text-lg mt-4">
//             {balance}  </div>
//     </div>

// }

import axios from "axios";
import { useEffect, useState } from "react";

export function Balance() {
  const [balance, setBalance] = useState("");
  const [error, setError] = useState(null);

  const getBalance = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3002/api/v1/user/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBalance(response.data.balance);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <div className="font-bold text-lg mt-4">
        Your balance Rs
      </div>
      <div className="font-semibold ml-4 text-lg mt-4">
        {balance}
      </div>
    </div>
  );
}
