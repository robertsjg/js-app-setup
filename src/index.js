import './index.css';
import numeral from 'numeral';
if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
} // this allows html live reload but prevents the html file being pulled in production

/* eslint-disable no-console */

const courseValue = numeral(5).format('$0,0.00');
// debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);