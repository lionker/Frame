import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  render() {
    const { comment } = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <button className="btn" style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)', outline: 'none' }}>删除</button>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}