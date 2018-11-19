export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    return Object.assign{ {}, state, {state.friend}}
  }
}
