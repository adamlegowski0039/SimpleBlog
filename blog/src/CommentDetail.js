import React from 'react';
import faker from 'faker';

const CommentDetail = (props) =>{
    console.log(props);
    return (
      <div className="comment">
        <a className="avatar" alt="avatar" href="/">
          <img src={faker.image.avatar()} alt="/" />
        </a>
        <div className="content">
          <a className="author" alt="author" href="/">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">{props.message}</div>
        </div>
      </div>
    );
};

export default CommentDetail;