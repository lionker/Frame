import React, { Component } from 'react';
import CommentItem from './../comment-item/index';
import { PropTypes } from 'prop-types';

export default class CommentList extends Component {
    //限制夫组件传入数据类型
    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    render() {
        const {comments} = this.props;
        return (
            <div className="col-md-6">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
              {
                  comments.map((item) => <CommentItem comment={item} key={item.id} />)
              }
            </ul>
          </div>
        )
    }
}