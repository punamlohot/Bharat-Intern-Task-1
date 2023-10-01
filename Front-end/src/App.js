import './App.css';
import Navbar from './Components/Nav';
import Body from './Components/Body'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './Components/SignIn';
import Footer from './Components/Footer';
import Login from './Components/Login';
import WriteBlog from './Components/WriteBlog';
import PrivateComponent from './Components/PrivateComponent';
import MyBlogs from './Components/MyBlogs';

function App() {
  return (
    <>
    <div className="App">
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element ={<PrivateComponent/>}>
      <Route path="/WriteBlog" element={<WriteBlog/>}></Route>
      <Route path="/explore" element={<h1>Hello I am Explore More Component</h1>}></Route>
      <Route path="/Myblogs" element={<MyBlogs/>}></Route>
      </Route>
      <Route path="/" element={<Body/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
