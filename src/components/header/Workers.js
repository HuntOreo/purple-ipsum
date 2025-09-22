import { Para, Container } from 'elekit';

const Workers = function () {
  const container = new Container(
    { selectors: ['workers', 'light-border'] },
    { display: 'flex' }
  );
  const accountWrapper = new Container(
    { type: 'wrapper' }, { display: 'flex' })

  for (let i = 0; i < 4; i++) {
    const picture = new Container(
      { selectors: 'coworker' },
      {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: '1px solid black',
        background: 'pink'
      }
    );
    accountWrapper.appendEl(picture);
  }

  const whosWorking = new Para({
    content: '<b>12 of 15</b> on work'
  });


  const elements = [accountWrapper, whosWorking];
  container.appendEl(elements);
  return container;
}

export default Workers;