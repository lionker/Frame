import React, { Component } from 'react';

// 引入样式资源
import './index.css';
import img from './1.jpg';

export default class Header extends Component {
    render() {
        return <header>
            <img className="logo" src={img} alt="img" />
        </header>
    }
}