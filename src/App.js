import React, { Component } from 'react';
import './styles/css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
