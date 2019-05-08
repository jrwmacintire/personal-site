import React, { Component } from 'react';
import About from './About'
import Services from './Services'
import Contact from './Contact'

export default class Main extends Component {
    render() {
        return (
            <div className='Main' >
                <About />
                <Services />
                <Contact />
            </div>
        )
    }
}