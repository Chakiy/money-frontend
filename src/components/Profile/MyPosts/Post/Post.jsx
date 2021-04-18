import s from './Post.module.css';
import React from 'react';


function Post(props) {
    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src='https://image.flaticon.com/icons/png/512/194/194938.png' alt='avatar'/>
            <div>
            <h1 className={s.postTitle}>{props.title}</h1>
            <p className={s.postText}>this is our learning journey</p> <span>{props.like} like's </span>
            </div>
        </div>
    )
}

export default Post;
