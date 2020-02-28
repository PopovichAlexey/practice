import React from 'react';
import s from './body.css';
import Homepage from './../Homepage/Homepage.jsx';
import Aboutme from './Aboutme.jsx';
import Posts from './Posts.jsx';
import Services from './Services.jsx';
import Contacts from './Contact.jsx';
import Portfolio from './Portfolio.jsx';
import { Route } from 'react-router-dom';
import Dialogs from './Dialogs.jsx'
import Dialog from './Dialog.jsx'


const Body = (props) => {

  return (
    <div className={s.Act}>
      <Route path = '/Homepage' component = { Homepage } activeClassName = { s.active } />
      <Route path = '/Posts' render = { () => < Posts
            addPost = { props.addPost }
            posts = { props.posts }
            updateNewPostText = {props.updateNewPostText}
            newPostText={props.newPostText}
        /> }
      />
      <Route path = '/Aboutme' component = { Aboutme } />
      <Route path = '/Services' component = { Services } />
      <Route path = '/Portfolio' component = { Portfolio } />
      <Route path = '/Contacts' component = { Contacts } />
      <Route exact path = '/dialogs' render = { () =>
          <Dialogs
              dialogs = {props.dialogs}
              messages = {props.messages}
              addPost = {props.addPost}
          />
      }/>
      <Route path = '/dialog/1' component = { Dialog } />
    </div>
);
}

export default Body;
