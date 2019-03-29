import React, { Component } from 'react';
import CommentItem from './../comment-item/index';
import { PropTypes } from 'prop-types';

export default class CommentList extends Component {
    //限制祖先组件传入数据类型
    static propTypes = {
        comments: PropTypes.array.isRequired,
        delComment: PropTypes.func.isRequired
    }
    render() {
        const {comments, delComment} = this.props;
        const isDisplay = comments.length ? "none" : "block";
        return (
            <div className="col-md-6">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{display: isDisplay}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
              {
                  comments.map((item) => <CommentItem comment={item} key={item.id} delComment={delComment}/>)
              }
            </ul>
          </div>
        )
    }
}