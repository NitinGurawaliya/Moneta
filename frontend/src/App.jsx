import {BrowserRouter,Route,Routes} from "react-router-dom"

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/Sendmoney";
import {Success} from "./pages/Success";
import { Failed } from "./pages/Failed";




function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/sendMoney" element={<SendMoney />} />
           <Route path="/success" element={<Success />} />
           <Route path="/failed" element={<Failed />} />


           
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;