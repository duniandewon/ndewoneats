import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { uiContext } from '../context/ui/UiState';

const DropdownMenu = (props) => {
  const { links, history } = props;
  const [Dropdown, setDropdown] = useState('');

  const { toggleUi, dropdown } = useContext(uiContext);

  useEffect(() => {
    const menu = history.location.pathname;
    const current = menu.split('/')[2];
    setDropdown(current);
    // eslint-disable-next-line
  }, [history.location]);

  return (
    <div className='dropdown hide-on-desktop'>
      <button
        className='dropdown__trigger'
        onClick={() => toggleUi('dropdown')}
      >
        {Dropdown}
      </button>
      <Fragment>
        {dropdown ? (
          <i className='material-icons' onClick={() => toggleUi('dropdown')}>
            arrow_drop_up
          </i>
        ) : (
          <i className='material-icons' onClick={() => toggleUi('dropdown')}>
            arrow_drop_down
          </i>
        )}
      </Fragment>
      <div
        className={`backdrop ${dropdown && 'active'}`}
        onClick={() => toggleUi('dropdown')}
      />
      <div className={`dropdown__content ${dropdown && 'active'}`}>
        {links.map((link) => (
          <div key={link.text} className='sidenav__item'>
            <Link
              to={link.to}
              className='sidenav__link'
              onClick={() => {
                toggleUi('dropdown');
                setDropdown(link.text);
              }}
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
