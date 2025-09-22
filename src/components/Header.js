import { Elem, Button, Para } from 'elekit';
import Workers from './header/Workers';
import Break from './header/Break';
import Account from './header/Account';

const Header = function () {
  const container = new Elem({ tag: 'header' }, { display: 'flex' });
  const logo = new Para('Logo', { fontSize: '2rem' });
  const search = new Button('search');

  const elements = [logo, search, Workers(), Break(), Account()];
  container.appendEl(elements);
  return container;
}

export default Header;