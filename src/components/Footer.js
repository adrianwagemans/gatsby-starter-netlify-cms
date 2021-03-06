import * as React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo_big.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer has-background-black has-text-white-ter'>
        <div className='content has-text-centered'>
          <img
            src={logo}
            alt='Kaldi'
            style={{ width: '20em', height: '7em' }}
          />
        </div>
        <div className='content has-text-centered has-background-black has-text-white-ter'>
          <div className='container has-background-black has-text-white-ter'>
            <div style={{ maxWidth: '100vw' }} className='columns'>
              <div className='column is-4'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <Link to='/' className='navbar-item'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/products'>
                        Lerne uns kennen
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4'>
                <section>
                  <ul className='menu-list'>
                    <li>
                      <Link className='navbar-item' to='/blog'>
                        Neuste Geschichten
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/contact'>
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-4 social'>
                <a title='facebook' href='https://facebook.com'>
                  <img
                    src={facebook}
                    alt='Facebook'
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
