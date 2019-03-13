import {combineReducers} from 'redux';
import increment from './increment.js';
import reset from './reset.js';

module.exports= combineReducers({
    increment,
    reset
});