import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    delComment: PropTypes.func.isRequired
  }

  delComment = () => {
    const {id, username} = this.props.comment;

    //事件确认
    if(window.confirm(`你确认要删除${username}的评论么`)){
      //确认删除
      this.props.delComment(id);
    }

  }
  render() {
    const { comment } = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <button className="btn" style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)', outline: 'none' }} onClick={this.delComment} >删除</button>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}