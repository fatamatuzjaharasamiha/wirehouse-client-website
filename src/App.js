import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import ProductInfo from './Pages/ProductInfo/ProductInfo';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import SignIn from './Pages/LogIn/SignIn/SignIn';
import SignUp from './Pages/LogIn/SignUp/SignUp';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import About from './Pages/About/About';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        
        <Route path='/inventory/:myId' element={
          <RequireAuth>
            <ProductInfo></ProductInfo>
          </RequireAuth>
        }></Route>
        {/* <Route path='manageInventory' element={}></Route>/ */}
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
