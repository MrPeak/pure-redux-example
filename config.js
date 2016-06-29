/**
 * @type {Object} actionType的映射集合
 */

const actionTypeMap = {
    CREATE: Symbol('create'),
    DELETE: Symbol('delete'),
    UPDATE: Symbol('update'),
    RETRIEVE: Symbol('retrieve'),
    OTHERS: Symbol('others')
};

//noinspection JSUnresolvedVariable
module.exports = actionTypeMap;