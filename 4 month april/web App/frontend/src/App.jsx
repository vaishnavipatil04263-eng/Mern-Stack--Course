import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Login from './screen/login';
import Register from './screen/register';
import Item from './screen/Item';
import Dashboard from './screen/Dashboard';
import AuthNavBar from "./components/AuthNavBar"



const App= () => {
  console.log(import.meta.env.VITE_API_URL_BACKED ,"===>")
  return (
    <BrowserRouter>
    <div>
      <AuthNavBar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/item" element={<Item/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
        
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
