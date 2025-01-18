import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.postNumber}. {props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <MyButton onClick={() => props.remove(props.post)} className='post__button'>Delete</MyButton>
        </div>    
    )
}

export default PostItem;