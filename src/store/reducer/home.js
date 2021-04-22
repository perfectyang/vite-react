const initState = {
  user: 'perfectyang'
}
export function Home (state = initState, {type, payload}) {
  console.log('payload', payload)
  // switch (type) {
  //   case 'deleteInfo':
  //     return state.filter(el => el.id !== payload.id) 
  // }
  return state
}
