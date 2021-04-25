const getLogin = Boolean(+sessionStorage.getItem('isLogin'))
console.log('getLogin', getLogin)
const initState = {
  isLogin: getLogin || 0
}
console.log('initState', initState)
export function Login (state = initState, {type, payload}) {
  switch (type) {
    case 'update':
      sessionStorage.setItem('isLogin', +payload.isLogin)
      return Object.assign({}, initState, payload)
    case 'deleteInfo':
      sessionStorage.setItem('isLogin', +payload.isLogin)
      return Object.assign({}, initState, payload)
    default:
      return state;
  }
}
