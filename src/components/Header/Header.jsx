import React from 'react';
import Classes from './Header.module.css'

function Header() {
    return (
        <header className={Classes.header}>
          <img className={Classes.img} src="https://api.freelogodesign.org/assets/thumb/logo/15050007_400.png" alt='logo'/>
      </header> 
    )
}

export default Header;
