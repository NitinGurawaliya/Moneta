

import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config"


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
      const response = await axios.get(`${BACKEND_URL}api/v1/account/balance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBalance(response.data.balance);
    } catch (error) {
      setError(error.message);
    }

  };

  // useEffect(() => {
  //   getBalance();
  // }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <div className="flex md:mt-2 md:ml-2 mt-1 ml-1">
    
      <button onClick={getBalance} type="button" className="text-white bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    Check Balance
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
      </button>
      {balance && (
  <div>
   
    <div className="font-semibold p-1 ml-4 text-lg">
     Rs {balance}
    </div> 
</div>
)}




    </div>
  );
}



