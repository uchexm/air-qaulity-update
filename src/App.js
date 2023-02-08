import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './components/countries';
import logo from './assets/logo.png';
import Statistics from './components/countryStatistics';

const App = () => (
  <div className="App">
    <div className="header">
      <div className="logoContainer">
        <img
          style={{ width: 220, height: 100 }}
          className="logo"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/statistics/:country" element={<Statistics />} />
      </Routes>
    </Router>
  </div>
);

export default App;
