import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Contact from './components/Contact';
import Solutions from './components/Solutions';
import Certifications from './components/Certifications';
import Thanks from './components/Thanks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/solutions' component={ Solutions } />
          <Route path='/certifications' component={ Certifications } />
          <Route path='/thanks' component={ Thanks } />
          <Route component={ Error } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
