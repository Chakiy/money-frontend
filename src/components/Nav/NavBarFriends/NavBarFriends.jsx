import React from 'react'
import style from './NavBarFriends.module.css'

function NavBarFriends(props) {
    // console.log(props)
    return (
        <div className={style.inline}>
            <img className={style.friends} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42IVYWYNhr75v0ZLSvHT5Sby1KpcXXlrlj-g60XC4xLR58_78KFpRgirYpgm8-yrVFd8&usqp=CAU" alt="profile"/>
            <p>{props.friendName}</p>
        </div>
    )
}

export default NavBarFriends
