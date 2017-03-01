import { hello, Point } from './hello';
// require('../styles/main.scss');
import css from '../styles/main.scss';
// require('../styles/one.css');
// require('./render.jsx');
import './render.jsx';


hello('hello, webpack!');

let p = new Point('webpack', 'react');

console.log(p.sayWhat());

let set = new Set(['react', 'react router', 'redux']);

// set.forEach(x => console.log(x));

let s1 = Symbol('hello');
console.log(s1);
