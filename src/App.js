import './App.css';
import React from 'react';  
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';

function App( props ) {
  // console.log(props)


//   let postsData = [
//     {id: 1, title: "IT Kamasutra", like: 5},
//     {id: 2, title: "Let's learn react", like: 20},
// ]


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Nav state={ props.state.navbarFriends }/>
        {/* <Profile/> */}
        <div className='main'>

            {/* <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music} /> */}


            <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />}/>
            <Route path='/profile' render={() => <Profile state={ props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>} />
       
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
