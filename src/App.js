import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import BookDetails from './components/BookDetails';
import ContextApi from './components/ContextApi';
function App() {
  return (
    <div className="App">
      <ContextApi>
     <Router>
      <NavbarComp/>
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/books/:id' element={<BookDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      <Footer/>
     </Router>
     </ContextApi>
    </div>
  );
}

export default App;
