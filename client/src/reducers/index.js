import { ADD_CARD, UPDATE_CARD } from '../actions';

const initialState = {
	cards: []
};

function cards(state = initialState, action) {
	console.log('which action:', action.type);
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
		case UPDATE_CARD:
		console.log('I PUT CARD!: ', action.type)
		let editCardState = {
				cards: [
					...state.cards,
					{
						_key: action._key,
						status: action.status,
						priority: action.priority,
					}
				]
			};
			return Object.assign({}, state, editCardState);
	default: 
		return state;

	}
}

export default cards;