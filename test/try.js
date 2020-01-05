const data = require('./fixture');
const {parse} = require('../dist/parser');

const tree = parse(data);
require('fs').writeFileSync('blah.json', JSON.stringify(tree), {encoding:'utf8'})
console.log(tree);