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

function App() {
  return (
    <HelmetProvider>
    <div >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
      </HelmetProvider>
  );
}

export default App;
