import './App.css';
import './body/body.css';
import './header/header.css';
import Header from './header/header.jsx';
import Navigation from './navigation/navigation.jsx';
import Body from './body/body.jsx';
import Footer from './footer/footer.jsx';
import React from 'react';

const App = (props) => {

  return (
      <div className='App'>
        <div className='header'><Header/></div>
        <div className='navigation'><Navigation/></div>
        <div className='body'>
            <Body
                dialogs={props.state.dialogs}
                messages={props.state.messages}
                addPost={props.addPost}
                posts={props.state.posts}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.state.newPostText}
            />
        </div>
        <div className='footer'><Footer/></div>
      </div>
  );
}

export default App;
