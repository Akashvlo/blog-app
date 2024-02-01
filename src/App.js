import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
//import {Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import Userdashboard from './pages/Userdashboard';
import Profileinfo from './pages/Profileinfo';
import Privateroute from './pages/Privateroute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostPage from './pages/PostPage';
import UserProvider from './context/UserProvider';
  

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <ToastContainer position='bottom-center' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/posts/:postId" element={<PostPage/>} />


        <Route path="/private" element={<Privateroute/>} >
        <Route path="dashboard" element={<Userdashboard/>} />
        <Route path="profileinfo" element={<Profileinfo/>} />

        </Route>
    

        

    
    
    
    
    
      </Routes>
    
    </BrowserRouter>
    </UserProvider>
  );
};

export default App
