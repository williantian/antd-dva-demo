import React, { Fragment, useState } from 'react';
import { Button } from 'antd';

const CommentInput = (props) => {
  const [state, setState] = useState({
    username: '',
    content: ''
  });
  const handleUsernameChange = (event) => {
    setState({
      ...state,
      username: event.target.value
    });
  };
  const handleCommentChange = (event) => {
    setState({
      ...state,
      content: event.target.value
    });
  };
  const handleSubmit = () => {
    if (props.onSubmit) {
      const { username, content } = state;
      props.onSubmit({username, content})
    }
    setState({ ...state, content: '' })
  };
  return (
    <Fragment>
      <div className="comment_input">
        <div className="firstLine">
          <span className="username">用户名</span>
          <input className="inputUsername" value={state.username}
                 onChange={handleUsernameChange}/>
        </div>
        <div className="secondLine">
          <span className="comment">评论内容</span>
          <textarea value={state.content}
                    onChange={handleCommentChange}/>
        </div>
        <Button type="primary"
                onClick={handleSubmit}>提交</Button>
      </div>
    </Fragment>
  )
};
export default CommentInput;
