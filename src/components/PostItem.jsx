import React from "react";

const PostItem = (props) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <button className='post__button'>Delete</button>
        </div>    
    )
}

export default PostItem;