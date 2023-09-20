
import React, { useState } from 'react';

import { ReactComponent as BellIcon} from './icons/bell.svg';
import { ReactComponent as CaretIcon} from './icons/caret.svg';
import { ReactComponent as ChevronIcon} from './icons/chevron.svg';
import { ReactComponent as CogIcon} from './icons/cog.svg';
import { ReactComponent as MessengerIcon} from './icons/messenger.svg';
import { ReactComponent as PlusIcon} from './icons/plus.svg';
import { ReactComponent as ProfileIcon} from './icons/profile.svg';

import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <Navitem icon={ < PlusIcon />} />
      <Navitem icon={ < BellIcon />} />
      <Navitem icon={ < MessengerIcon />} />
      <Navitem icon={ < CaretIcon />}>
        <DropdownMenu />
      </Navitem>
    </Navbar>

  );
}

function DropdownMenu () {
  const [activeMenu, setActiveMenu] = useState('main');


  function DropdownItem (props) {
    return (
      <a href='#' className='menu-item' onClick={() => props.goToMenu}>
        <span className='icon-button'>{ props.leftIcon }</span>
        { props.children }
        <span className='icon-right'>{ props.rightIcon }</span>
      </a>

    );
    
  }

  return (
    <div className='dropdown'>
      <CSSTransition
      in={activeMenu === 'main'}
      unmountOnExit
      timeout={500}
      classNames="menu-primary"
      >
        <div className='menu'>
          <DropdownItem
            leftIcon={ < ProfileIcon /> }>
            My profile
          </DropdownItem>
          <DropdownItem
            leftIcon={ < CogIcon /> }
            rightIcon={ < ChevronIcon /> }>
              Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
      in={activeMenu === 'settings'}
      unmountOnExit
      timeout={500}
      classNames="menu-secondary"
      >
        <div className='menu'>
          <DropdownItem>
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

    </div>
  );
}

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{ props.children }</ul>
    </nav>
  );
}

function Navitem(props) {
  const [open, setOpen] =  useState(false);

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen (!open)}>
        {props.icon}
      </a>

      {open && props.children}



    </li>
  );
}

export default App;
