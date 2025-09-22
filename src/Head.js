import { Header } from 'elekit';

const Head = function () {
  const header = new Header({ size: 1, content: 'Hello world!' });

  return header.DOMElement;
}

export default Head;