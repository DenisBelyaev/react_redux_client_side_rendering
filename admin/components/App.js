"use strict"

import React, {Component} from 'react';
import Menu from './Menu';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('componentWillMount App');
    }

    render(){
        return (
            <div>
                <div>
                    <Menu />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}

module.exports = App;