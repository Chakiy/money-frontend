import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './DialogItem.module.css'

function DialogItem(props){
    return (
    
    <div className={style.dialog + ' ' + style.active}>
          <img className={ style.photo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoaKLEoep5ixyN_VhVIt0OGTAqPZS5NPWEE78Tt8MvsD7HBeoPKditNtr5uHGooe9WQ&usqp=CAU' alt='avatar'></img>
          <NavLink to={`/dialogs/${props.id}`} className={style.name}>{props.name}</NavLink>
    </div>
    
)}

export default DialogItem