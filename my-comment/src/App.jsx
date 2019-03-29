// 为什么要引入React，因为jsx语法会被编译成React.createElement
import React, { Component } from 'react';
/*
    import React from 'react';
    import {Compoennt} from 'react';
*/import AddComment from './components/add-comment/index';
import CommentList from './components/comment-list/index';

export default class App extends Component {
   //由于数据需要组件件共享,所以在父组件设置
    state = {
        comments: [
            {username: 'aaron', content: 'I Love rose', id: 1},
            {username: "tylor", content: 'I Love aaron', id: 2},
        ]
    }

    //定义方法接收子组件传值
    updataComment = (newComment) => {
        const {comments} = this.state
        this.setState({
            comments:[{...newComment, id: comments.length+1}, ...comments]
        })
    }
    delComment = (id) => {
        this.setState({
            comments: this.state.comments.filter((item) => item.id !== id) //将不需要的过滤出去
        })
    }
    render() {
        const {comments} = this.state;
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
            <div className="container">
                <AddComment updataComment={this.updataComment} />
                <CommentList comments={comments} delComment={this.delComment}/>
            </div>
        </div>
    }
}
