import React, { Component } from 'react';
import Solutions from './Solutions'
import Services from './Services'
import Contact from './Contact'

export default class Main extends Component {
    render() {
        return (
            <div className='Main' >
                <Contact />
                <Solutions />
                <Services />
            </div>
        )
    }
}