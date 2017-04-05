export const ADD_CARD = 'ADD_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

export function addCard(_key, title, status, priority, assignTo){
	return {
		type: ADD_CARD,
		_key,
		title,
		status,
		priority,
    assignTo
	};
}

export function updateCard(_key, title, status, priority, assignTo){
  return {
    type: UPDATE_CARD,
    _key,
    title,
    status,
    priority,
    assignTo
  };
}