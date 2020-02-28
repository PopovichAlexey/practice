let reLoAd = () =>{

}

let state = {
  dialogs : [
    {id:1, name: 'Sudar'},
    {id:2, name: 'Reception'},
    {id:3, name: 'Poland'},
    {id:4, name: 'Proscowya'},
    {id:5, name: 'Xiaomi'},
    {id:6, name: 'Ios'}
  ],
  messages : [
    {id:1, message: 'fmsbfbjdsbfjsd'},
    {id:2, message: 'Receptiondsfsdfsdfsdfsd'},
    {id:3, message: 'Polandsfddfsfdfsdfsdf'},
    {id:4, message: 'Proscowyasdfsdfsdfsd'},
    {id:5, message: 'Xiaomisdfsdfsdfsdfsd'},
    {id:6, message: 'Iosdsfsdfsdfsdf'}
  ],
  posts : [
    {name:'Пижма', id:'1', message:'central voczal'},
    {name:'Свобода', id:'2', message:'конкатинация vocal'},
    {name:'Портер', id:'3', message:'пересвет voczal'},
    {name:'Пен', id:'4',message:' Excepteur sint occaecat  voczal'},
    {name:'Конкатинация', id:'5', message:'tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa'},
    {name:'Почвавед', id:'6', message:'sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa '},
    {name:'Пристук', id:'7', message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
  ],
  newPostText : 'привет'
}

  window.state = state;

export const addPost = () => {

  //эта штука создает новый пост
  let newPost = {
    name: 'Протвино',
    id: '8',
    message: state.newPostText
  };

  //эта штука задвигает новый пост в массив
  state.posts.push(newPost);

  //эта штука должна перегружать страницу с новыми данными
  reLoAd(state);
}

export const updateNewPostText = (newText) => {
  state.newPostText = newText;
  reLoAd(state);
}

export const subscriber = (observer) => {
  reLoAd = observer;
}

export default state;
