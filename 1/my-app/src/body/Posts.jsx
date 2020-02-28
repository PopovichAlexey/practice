import React from 'react';
import s from './Posts.module.css';
import Post from './Post.jsx'

const Posts = (props) => {

  let postsElements = props.posts.map( d => <Post name={d.name} id={d.id} message={d.message}/>);

  let plot = React.createRef();

  let addPoster = () => {
      props.addPost();
      props.updateNewPostText('');
  }

  let onTextChange = () => {
      let text = plot.current.value;
      props.updateNewPostText(text);
  }

  return (
    <div className={s.Posts}>
      <div>
        Posts.
      </div>
      <div>
        <textarea ref={plot} onChange={ onTextChange } value={props.newPostText}></textarea>
      </div>
      <div>
        <button onClick = { addPoster } > Add post </button>
      </div>
      <div >
          {postsElements}
      </div>
    </div>
  );
}

export default Posts;
