// Main file

const redux = require('redux');
const console = require('better-console');

// Get actions
const actions = require('./actions');

// Get reducers
const reducers = require('./reducers');

// Get actionType's map
const actionTypeMap = require('./config');

// Create redux'store
const store = redux.createStore(reducers);

///////////////////////////////////////////

// Step 1
console.info('Step 1');
console.log(store.getState()); // Print initial state object

// Step 2
console.info('Step 2');
store.dispatch(actions.createDoc('好好学习!')); // Dispatch
console.log(store.getState());

// Step 3
console.info('Step 3');
store.dispatch(actions.createDoc('天天向上!')); // Dispatch
console.log(store.getState());

// Step 4
console.info('Step 4');
store.dispatch(actions.updateDoc(0, '好好打炮?')); // Dispatch
console.log(store.getState());

// Step 5
console.info('Step 5');
store.dispatch(actions.deleteDoc(1)); // Dispatch
console.log(store.getState());

// Step 6
console.info('Step 5');
// Dispatch
store.dispatch({
    type: actionTypeMap.OTHERS,
    message: 'New Text'
});
console.log(store.getState());



