/**
 * CURD reducer
 */

const initialState = require('../state');
const actionTypeMap = require('../config');

const curdReducer = (state = initialState, action) => {
    const type = action.type;

    switch (type) {

        // 增
        case actionTypeMap.CREATE:
            return Object.assign({}, state, {
                docs: state.docs.concat(action.doc),
                actionHistories: state.actionHistories.concat(type)
            });

        // 删
        case actionTypeMap.DELETE:
            if (action.index >= state.docs.length) {
                return state;
            }

            state.docs.splice(action.index, 1);

            return Object.assign({}, state, {
                docs: state.docs,
                actionHistories: state.actionHistories.concat(type)
            });

        // 改
        case actionTypeMap.UPDATE:
            if (action.index >= state.docs.length) {
                return state;
            }

            state.docs.splice(action.index, 1, action.doc);

            return Object.assign({}, state, {
                docs: state.docs,
                actionHistories: state.actionHistories.concat(type)
            });
        default:
            return state
    }
};

module.exports = curdReducer;


