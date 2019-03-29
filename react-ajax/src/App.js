// 为什么要引入React，因为jsx语法会被编译成React.createElement
import React, {Component} from 'react';

/*
    import React from 'react';
    import {Compoennt} from 'react';
*/
import Header from './components/header/index';
import Content from './components/content/index';


export default class App extends Component {
    render() {
        return <div>
            <Header />
            <Content />
        </div>
    }
}
