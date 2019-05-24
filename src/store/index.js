import {createStore} from 'redux'
import {reducers,initTestState} from './reducers'


const rootState={
	test:initTestState
}


export default function () {
	return createStore(
		reducers,
		rootState
	)

}