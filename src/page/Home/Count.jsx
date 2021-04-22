import React, {useState, useEffect, createContext, provide} from 'react'
import { connect } from 'react-redux'
function Count(props) {
  console.log('props.About.info', props.About.info)
  const context = createContext(null)
  let [count, setCount] = useState(0)
  let [state, setState] = useState({
    user: []
  })
  const timer = () => {
    setCount(++count)
    setState(
      {
        ...state,
        user: [
          ...state.user,
          {id: count, name: '达时' + count}
        ]
      }
    )
  }
  useEffect(() => {
    // const time = setInterval(_ => {
    //   timer()
    // }, 1000)
    // return () => {
    //   clearInterval(time)
    // }
    setState(
      {
        ...state,
        user: [
          ...props.About.info
        ]
      }
    )
    console.log('变化了吗')
  }, [props.About.info])
  return (
    <div>
      {count}
      {state.user.map(el => <p key={el.id}>{el.name}</p>)}
      <button onClick={timer}>count</button>
    </div>
  )
}
export default connect(state => ({
  About: state.About
}), {})(Count)