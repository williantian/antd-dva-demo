import React from 'react';
import Comment from '@/pages/Comment';

const CommentList = (props) => {
  return (
    <div>
      {props.comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
    </div>
  )
};
Comment.defaultProps = {
  comments: []
};
export default CommentList;
