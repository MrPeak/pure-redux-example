const combineReducers = require('redux').combineReducers;
const others = require('./others');
const curd = require('./curd');

// Combine required reducers
const combinedRdcers = combineReducers({
    curd,
    others
});

module.exports = combinedRdcers;
