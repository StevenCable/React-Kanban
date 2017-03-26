import { ADD_CARD } from '../actions';

const initialState = {
	cards: [],
	currentCards: [],
	completeCards: []

};

function cards(state = initialState, action) {
	switch(action.type) {
		case ADD_CARD:
		let checkit = {
				cards: [
					...state.cards,
					{
						_key: action._key,
						title: action.title,
						status: action.status,
						priority: action.priority
					}
				]
			}
			console.log('checkit: ', checkit);
			return Object.assign({}, state, checkit);
	default: 
		return state;
	}
}

export default cards;