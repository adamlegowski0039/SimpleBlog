# Project Name
> SimpleBlog

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
It's simple React app. Made to show basics of React.js

## Technologies
* React.Js

## Setup
Open directory of app with cmd and run 'npm install' then 'npm start'

## Code Examples


`const CommentDetail = (props) =>{
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
};`

## Status
Project is finished

## Contact
adam.legowski238@gmail.com


## Project made on University of Gdańsk
