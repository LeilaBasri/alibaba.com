import './App.css';
import './Responsive.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
