import './style.css';
import { Container } from 'elekit';
import Header from './components/Header';

const body = document.querySelector('body');
const app = new Container({ selectors: 'app' });
const elements = [Header()]
app.appendEl(elements);

body.append(app.DOMElement);