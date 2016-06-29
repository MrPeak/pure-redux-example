/**
 * another reducer
 */

const actionTypeMap = require('../config');

const otherReducer = (state = 'others', action) => {
    const type = action.type;

    switch (type) {
        case actionTypeMap.OTHERS:
            return action.message
        default:
            return state
    }
};

module.exports = otherReducer;


