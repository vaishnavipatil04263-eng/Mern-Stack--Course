import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Login from './screen/login';
import Register from './screen/register';
import Dashboard from './screen/Dashboard';

const App= () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
