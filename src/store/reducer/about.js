const initState = {
  info: [
    {
      id: 10,
      name: 'zs'
    },
    {
      id: 209,
      name: 'lisi'
    }
  ]
}
export function About (state = initState, {type, payload}) {
  switch (type) {
    case 'infoList':
      return {
        ...state,
        info: [
          ...state.info,
          payload
        ]
      }
    case 'deleteInfo':
      return {
        ...state,
        info: state.info.filter(el => +el.id !== +payload.id)
      }
    default:
      return state;
  }
}
