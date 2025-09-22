import { Elem } from 'elekit';

const Break = function () {
  const container = new Elem({
    tag: 'div',
    content: '<b>2</b> on break',
    selectors: ['break', 'light-border']
  });

  return container;
}

export default Break;