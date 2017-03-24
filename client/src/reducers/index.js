import { ADD_CARD } from '../actions';

const initialState = {
	queueCards: []
	currentCards: []
	completedCards: []
}

function Cards(state = initialState, action) {
	switch(action.type) {
		case ADD_CARD;

			let ObjToMerge = {};
			ObjToMerge[action.status] = [
					...state.`${action.status}`Cards
				]

			return Object.assign({}, state,
				ObjToMerge[action.status]
			) 
	}
}