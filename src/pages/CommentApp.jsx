import React, { useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const CommentApp = () => {
  const [state, setState] = useState({
    comments: []
  });
  const handleSubmitComment = (comment) => {
    if (!comment) return;
    if (!comment.username) return alert('请输入用户名');
    if (!comment.content) return alert('请输入评论内容');
    state.comments.push(comment);
    setState({
      comments: state.comments
    })
  };
  return (
    <div className="wrapper">
      <CommentInput onSubmit={handleSubmitComment}/>
      <CommentList comments={state.comments}/>
    </div>
  )
};
export default CommentApp;
