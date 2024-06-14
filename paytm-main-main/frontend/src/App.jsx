import {BrowserRouter,Routes,Route} from react-router-dom; 

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
