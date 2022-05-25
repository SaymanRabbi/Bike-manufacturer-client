import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Product from './Pages/Home/Product';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Orders from './Pages/Dashboard/Orders';
import Review from './Pages/Dashboard/Review';
import Profile from './Pages/Dashboard/Profile';
import Payment from './Pages/Dashboard/Payment';
import UserupdateForm from './Pages/Dashboard/UserupdateForm';
import Admin from './Pages/Admin/Admin';
import AdminRequireAuth from './Pages/Shared/AdminRequireAuth';
import ManageProducts from './Pages/Admin/ManageProducts';
import AddProduct from './Pages/Admin/AddProduct';
import ManagOrders from './Pages/Admin/ManagOrders';
import MyPortfolio from './Pages/MyPortfolio';

function App() {
  return (
    <HelmetProvider>
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='/product/:id' element={<RequireAuth>
            <Product></Product>
          </RequireAuth>}></Route>

          <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<Profile></Profile>}></Route>
            
              <Route path='orders' element={<Orders></Orders>}></Route>
              <Route path='review' element={<Review></Review>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='profile/:id' element={<UserupdateForm></UserupdateForm>}></Route>
            
                <Route path='admin' element={<AdminRequireAuth>
                  <Admin></Admin>
                </AdminRequireAuth>}></Route>
                <Route path='managesproducts' element={
              <AdminRequireAuth>
                <ManageProducts></ManageProducts>
                  </AdminRequireAuth>
               }></Route>
                <Route path='addproducts' element={
              <AdminRequireAuth>
                <AddProduct></AddProduct>
                  </AdminRequireAuth>
                }></Route>
                <Route path='manageorders' element={
              <AdminRequireAuth>
                <ManagOrders></ManagOrders>
                  </AdminRequireAuth>
                }></Route>
                
  
          </Route>
          
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
      </HelmetProvider>
  );
}

export default App;
