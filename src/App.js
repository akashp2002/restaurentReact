import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist' 
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import ViewRestaurent from './components/ViewRestaurent'
function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Restaurentlist/>} />
        <Route path='view-restaurent/:id' element={<ViewRestaurent/>} />

      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
