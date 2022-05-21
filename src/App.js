import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <HelmetProvider>
    <div >
        <h1>Hello World</h1>
        <ToastContainer></ToastContainer>
      </div>
      </HelmetProvider>
  );
}

export default App;
