import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BlogSite from './components/BlogSite';
import BlogPreview from './components/BlogPreview';
import PasswordForm from './components/PasswordForm';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<BlogSite/>}/>
        <Route path="/preview" element={<BlogPreview/>} />
        <Route path="/createpassword" element={<PasswordForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
