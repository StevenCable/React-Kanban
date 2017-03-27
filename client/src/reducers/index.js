import { ADD_CARD } from '../actions';

const initialState = {
	cards: []
};

function cards(state = initialState, action) {
	switch(action.type) {
		case ADD_CARD:
		let cardState = {
				cards: [
					...state.cards,
					{
						_key: action._key,
						title: action.title,
						status: action.status,
						priority: action.priority,
						assignTo: action.assignTo
					}
				]
			};
			return Object.assign({}, state, cardState);
	default: 
		return state;
	}
}

export default cards;