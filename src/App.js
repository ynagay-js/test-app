import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "Javascript - язык программирования",
    },
    {
      id: 2,
      title: "JavaScript 2",
      description: "Javascript - язык программирования",
    },
    {
      id: 3,
      title: "JavaScript 3",
      description: "Javascript - язык программирования",
    },
  ]);

  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  // 123 const bodyInputRef = useRef();
  
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      description: article
    }

    console.log(newPost);
    
    setPosts([...posts, newPost])
    setTitle('');    
    setArticle('');

    // 123 console.log(bodyInputRef.current.value);
  }

  return (
    <div className="App">
      <form>
        {/*Управляемый компонент*/}

        <MyInput onChange={events => setTitle(events.target.value)} value={title} type="text" placeholder="Post Name"/>
        <MyInput onChange={events => setArticle(events.target.value)} value={article} type="text" placeholder="Post Description"/>

        {/* 123 Неуправляемый/Неконтролируемый компонент
        <MyInput ref={bodyInputRef} type="text" placeholder="Post Description"/> */}

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title='Список постов:'/>
    </div>
  );
}

export default App;
