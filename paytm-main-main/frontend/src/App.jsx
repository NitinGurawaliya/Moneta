import {BrowserRouter,Routes,Route} from react-router-dom; 

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup"  element={<Signup />}/>
            <Route path="/signup" element={<Signin />} />
            <Route path="/signup" element={<Dashboard />} />
            <Route path="/signup" element={<Send />}/>

          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
