import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    
    const [post, setPost] = useState({title: '', description: ''});

    const addNewPost = (e) => {
        e.preventDefault();     
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', description: ''}) 
    
        // 1 console.log(bodyInputRef.current.value);
      }

    return(
        <form>
        {/*Управляемый компонент*/}

        <MyInput onChange={events => setPost({...post, title: events.target.value})} value={post.title} type="text" placeholder="Post Name"/>
        <MyInput onChange={events => setPost({...post, description: events.target.value})} value={post.description} type="text" placeholder="Post Description"/>

        {/* 1 Неуправляемый/Неконтролируемый компонент
        <MyInput ref={bodyInputRef} type="text" placeholder="Post Description"/> */}

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
    )
}

export default PostForm;