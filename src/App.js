import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';

function App() {
  return (
    <HelmetProvider>
    <div >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </div>
      </HelmetProvider>
  );
}

export default App;
