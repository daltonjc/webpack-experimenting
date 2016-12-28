console.log('starting app');

console.log('component1');
const component1 = require('./component1/component');
component1();

console.log('component2');
const component2 = require('./component2/component');
component2();

const nonRelativeUtilsModule = require('appUtils');
nonRelativeUtilsModule.someUtilFunction();