const redux = require('redux')
const createStore = redux.createStore

const initialState = { number: 0 }

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return ({ ...state, number: state.number + 1})
  } else if (action.type === 'ADD_VALUE') {
    return ({ ...state, number: state.number + action.value })
  }
  return state
}

const store = createStore(reducer)

console.log(store.getState()) // 현재 state 가져오기

store.subscribe(() => {
  console.log('[Subscription]', store.getState())
}) // 업데이트될 때마다 자동으로 출력해주는 함수

store.dispatch({ type: 'ADD' })
store.dispatch({ type: 'ADD_VALUE', value: 5 })