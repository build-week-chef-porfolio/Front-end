import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <HomePageContainer />
      <Footer />
    </div>
  );
}

export default App;
