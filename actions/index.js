/*
 * Action index file
 */
const actionTypeMap = require('../config');

// Create
const createDoc = (doc) => {
    return {
        type: actionTypeMap.CREATE,
        desc: 'An action to create new doc',
        doc
    };
};

// Delete
const deleteDoc = (index) => {
    return {
        type: actionTypeMap.DELETE,
        desc: 'An action to delete one doc',
        index
    };
};

// Update
const updateDoc = (index, doc) => {
    return {
        type: actionTypeMap.UPDATE,
        desc: 'An action to update doc',
        doc, index
    };
};

//noinspection JSUnresolvedVariable
module.exports = {createDoc, deleteDoc, updateDoc};