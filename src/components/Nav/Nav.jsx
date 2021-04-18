import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css'
import NavBarFriends from './NavBarFriends/NavBarFriends';

function Nav(props) {
  // console.log(props)

let friendsDataArr = props.state.friendsData.map(friend => {
  return <NavBarFriends friendName={friend.name}/>
})


    return (
      <nav className={style.nav}>
        <div className={style.item}>
          <NavLink to='/profile' activeClassName={style.active}>Profile </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/dialogs' activeClassName={style.active}>Messages </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/news' activeClassName={style.active}> News </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/music' activeClassName={style.active}> Music </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/friends' activeClassName={style.active}> Friends </NavLink>
        </div>
        <div className={style.flex}>

          { friendsDataArr}
          {/* <NavBarFriends friendsData={props.state.friendsData}/> */}
          {/* <div className={style.inline}>
            <img className={style.friends} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42IVYWYNhr75v0ZLSvHT5Sby1KpcXXlrlj-g60XC4xLR58_78KFpRgirYpgm8-yrVFd8&usqp=CAU" alt="profile"/>
            <p>Angela</p>
          </div>
          <div className={style.inline}>
            <img className={style.friends} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42IVYWYNhr75v0ZLSvHT5Sby1KpcXXlrlj-g60XC4xLR58_78KFpRgirYpgm8-yrVFd8&usqp=CAU" alt="profile"/>
            <p>Alexa</p>
          </div> */}
        </div>
      </nav>
    )
}

export default Nav;
