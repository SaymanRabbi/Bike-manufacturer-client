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

function App() {
  return (
    <HelmetProvider>
    <div >
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
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route path='orders' element={<Orders></Orders>}></Route>
            <Route path='review' element={<Review></Review>}></Route>
            <Route index element={<Profile></Profile>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
      </HelmetProvider>
  );
}

export default App;
