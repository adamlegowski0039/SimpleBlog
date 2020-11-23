import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from './CommentDetail'


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Jan" message="Pierwszy wpis" />
      <CommentDetail author="Ania" message="Drugi wpis" />
      <CommentDetail author="Karol" message="Trzeci wpis" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
