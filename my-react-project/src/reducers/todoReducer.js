export default function(state=[], action) {
	switch(action.type) {
		case "ADD_TODO_ITEM":
			var newState = [...state];
			newState.push(action.payload);
			return newState;
		default:
			return state;
	}
	return state;
}