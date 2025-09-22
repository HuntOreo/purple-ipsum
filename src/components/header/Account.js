import { Container, Header, Para } from 'elekit';

const Account = function () {
  const container = new Container({ selectors: 'account' }, {
    display: 'flex'
  });
  const descWrapper = new Container({ type: 'wrapper' });
  const header = new Header({ size: 3, content: 'Hunter Oreair' });
  const role = new Para('Admin');
  const picture = new Container({ selectors: 'pic' }, {
    width: '50px',
    height: '50px',
    background: 'lightblue',
    borderRadius: '50%'
  });

  const descElements = [header, role];
  descWrapper.appendEl(descElements);
  const elements = [descWrapper, picture];
  container.appendEl(elements);

  return container;
}

export default Account;