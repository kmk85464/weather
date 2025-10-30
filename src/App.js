import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {WeatherProvider} from './context/weatherContext.js';
import Navbar from './components/Navbar.js';
import WeatherCarrousel from './components/WeatherCarrousel.js';
import CityDetails from './components/CityDetails.js';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
      </header>
    </div>
    <WeatherProvider>
      <Router>
        <Navbar />
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element ={<WeatherCarrousel />}></Route>
            <Route path='/ciudad/:nombre' element={<CityDetails />}></Route>
         </Routes>
      </div>
      </Router>


    </WeatherProvider>




    </>
  );
}

export default App;
