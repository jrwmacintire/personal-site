import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Contact from './components/Contact';
import Solutions from './components/Solutions';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/solutions' component={ Solutions } />
          <Route path='/certifications' component={ Services } />
          <Route component={ Error } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
