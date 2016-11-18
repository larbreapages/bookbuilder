import { combineReducers } from 'redux';
import book from './book';
import steps from './steps';

const reducers = combineReducers({
    book,
    steps,
});

export default reducers;
