
export const updateInfoList = (userInfo) => ({type: 'infoList', payload: userInfo})
export const asyncUpdateInfoList = (userInfo) => {
  return dispatch => {
    setTimeout(_ => {
      dispatch({type: 'infoList', payload: userInfo})
    }, 2000)
  }
}
export const delInfo = (id) => ({type: 'deleteInfo', payload: {id}})