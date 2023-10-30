import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./Pages/Home";
import DLogin from "./Pages/DLogin";
import PLogin from "./Pages/PLogin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/" element={<PLogin/>}/>
        <Route path= "/" element={<DLogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
