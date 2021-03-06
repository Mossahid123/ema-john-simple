import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
import RequireAuth from './components/RequireAuth/RequireAuth';



function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path='/Inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
