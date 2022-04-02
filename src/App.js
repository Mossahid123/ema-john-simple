import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';


function App() {
  return (
    <div className="">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Shop></Shop>}></Route>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/orders' element={<Orders></Orders>}></Route>
       <Route path='/Inventory' element={<Inventory></Inventory>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
