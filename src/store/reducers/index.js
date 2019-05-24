import {combineReducers} from 'redux'
import {WRITE_TEST} from "../actions/test";

export const initTestState = {
	text: 'Пустой'
}

function testReducer(state=initTestState, action) {
	if (action.type == WRITE_TEST) {
		return Object.assign({}, state, {text: action.payload})
	}
	return state;
}

export const reducers = combineReducers({
	test: testReducer
});