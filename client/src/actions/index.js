export const ADD_CARD = 'ADD_CARD';

export function addCard(_key, title, status, priority){
	return {
		type: ADD_CARD,
		_key,
		title,
		status,
		priority
	}
}