import { ADD_CARD } from '../actions';

const initialState = {
	cards: []
};

function cards(state = initialState, action) {
	switch(action.type) {
		case ADD_CARD:
			return Object.assign({}, state, {
				cards: [
					...state.cards,
					{
						_key: action._key,
						title: action.title,
						status: action.status,
						priority: action.priority
					}
				]
			});
	default: 
		return state;
	}
}

export default cards;


			// let ObjToMerge = {};
			// ObjToMerge[action.status] = [
			// 		...state.`${action.status}Cards`
			// 	]

	// 		return { 
	// 			Object.assign({}, state,
	// 			ObjToMerge[action.status]
	// 		) 
	// };