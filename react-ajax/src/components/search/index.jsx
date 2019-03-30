import React, { Component } from 'react'
import PropTypes from 'prop-types'   //处理props属性的模块

export default class Search extends Component{
    static propTypes = {
        upDataSearchName: PropTypes.func
    }

    state={
        searchName: ''
    }

    btn = () => {
        const { searchName } = this.state
        this.props.upDataSearchName(searchName)
    }

    search = (e) => {
        this.setState({
            searchName: e.target.value
        })
    } 
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" onChange={this.search}/>
                    <button onClick={this.btn}>Search</button>
                </div>
            </section>
        )
    }
}