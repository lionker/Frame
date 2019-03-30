import React, {Component} from 'react'
import Search from './components/search/index';
import List from './components/list/index';

export default class App extends Component {
    state = {
        searchName: ''
    }

    upDataSearchName = (searchName) => {
        this.setState({searchName})
    }
    render() {
        const { searchName } = this.state  //将搜索值传递给子组件,由它发送请求,结果直接由它处理,减少数据传递
        return (
            <div className="container">
                <Search upDataSearchName={this.upDataSearchName}/>
                <List searchName={searchName}/>  
            </div> 
        )
    }
}