import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

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

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //Получение post из дочернего компонента

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  // 2 const [title, setTitle] = useState('');
  // 2 const [article, setArticle] = useState('');
  // 1 const bodyInputRef = useRef();



  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список постов:' />
        : <h2 style = {{textAlign: 'center'}}>No post here</h2>
      }
    </div>
  );
}

export default App;
