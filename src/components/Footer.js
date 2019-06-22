import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="Footer fixed-bottom">
                  <p>Designed by John MacIntire</p>
                  <p>&copy; Copyright 2019, John MacIntire</p>
                </footer>
            </div>
        )
    }
}