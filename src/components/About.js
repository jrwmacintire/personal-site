import React, { Component } from 'react';
import Portrait from '../images/kiama-nsw-au.png';

export default class About extends Component {
    render() {
        return (
            <div className="About" >
                <img src={ Portrait } alt='Kiama, New South Wales, Australia' />
            </div>
        )
    }
}