// 为什么要引入React，因为jsx语法会被编译成React.createElement
import React, { Component } from 'react';
/*
    import React from 'react';
    import {Compoennt} from 'react';
*/import AddComment from './components/add-comment/index';
import CommentList from './components/comment-list/index';





export default class App extends Component {
    render() {
        return <div>
            <header className="site-header jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <AddComment />
                <CommentList />
            </div>
        </div>
    }
}
