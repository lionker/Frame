import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class AddComment extends Component {
    //限制祖先组件传入的值
    static propTypes = {
        updataComment: PropTypes.func.isRequired
    }
    state={
        username: '',
        content: ''
    }
    //添加方法给父组件传值
    addComment = () => {
        //收集用户数据
        const {username, content} = this.state;
        //判断用户是否有输入数据
        if (!username || !content) {
            alert('评论和用户名不能为空');
            return
        }
        console.log(this.props)
        this.props.updataComment({username, content})
        console.log('222')
        this.setState ({
            username: '',
            content: ''
        })
    }
    // 更新本组件状态,在传值给祖先组件之前
    change = (name) => {
       return (e) => {
            this.setState({
                [name] : e.target.value
            })
        } 
    }
    render() {
        const {username, content} = this.state
       
        return (
            <div className="col-md-6">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={username} onChange={this.change('username')} />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.change('content')} />
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}