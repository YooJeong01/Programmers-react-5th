

import {createElement} from './lib/react.js';
import {createRoot} from './lib/react-dom.js'
import { Greeting } from './data.js';


const keys = Object.keys(Greeting);
let randomKey = keys[Math.floor(Math.random()*keys.length)]

const h1 = createElement('h1',{name:`나라별 인사말 - ${randomKey}`}, Greeting[randomKey]);
const app = document.getElementById('app');
const root = createRoot(app);
root.render(h1);