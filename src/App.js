import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculatorPage/calculator';
import Quotes from './components/quotePage/quote';
import HomePage from './components/homePage/home';
import Navbar from './components/navbarHeading/navbar';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
      </div>
    );
  }
}

export default App;
