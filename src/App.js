
import React from 'react';
import { ReactComponent as BellIcon} from './icons/bell.svg';
import { ReactComponent as CaretIcon} from './icons/caret.svg';
import { ReactComponent as ChevronIcon} from './icons/chevron.svg';
import { ReactComponent as CogIcon} from './icons/cog.svg';
import { ReactComponent as MessengerIcon} from './icons/messenger.svg';
import { ReactComponent as PlusIcon} from './icons/plus.svg';
import { ReactComponent as ProfileIcon} from './icons/profile.svg';

function App() {
  return (
    <Navbar>
      <Navitem icon={ < PlusIcon />} />
      <Navitem icon={ < BellIcon />} />
      <Navitem icon={ < MessengerIcon />} />
      <Navitem icon={ < CaretIcon />}>

      </Navitem>
    </Navbar>

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
  return (
    <li className='nav-item'>
      <a href='#' className='icon-button'>
        {props.icon}
      </a>
    </li>
  );
}

export default App;
