import moment from 'moment';
import internet from 'faker';

let a = document.createElement('pre');
let el = document.body.appendChild(a);
el.textContent += moment().format('DD.MM.YYYY hh:mm:ss') + '\n';
el.textContent += '\n';
el.textContent +=internet.internet.email() + '\n';

let h4 = document.createElement('h4');
let el2 = document.body.appendChild(h4);
el2.setAttribute('id', 'author');
el2.setAttribute('title', 'GossJS');
el2.textContent = 'Daria Shvaleva';
