import { ADD_CARD, UPDATE_CARD } from '../actions';

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

		case UPDATE_CARD:

		let editCardState = state.cards.map( card => {
			if(card._key !== action._key){
				return card;				
			}
			card._key = action._key;
			card.title = action.title;
			card.status = action.status;
			card.priority = action.priority;
			card.assignedTo = action.assignTo;

			return card;
		});
			
			return Object.assign({},
					state, {
						cards: [
						...editCardState
					]
				});

	default: 
		return state;

	}
}

export default cards;