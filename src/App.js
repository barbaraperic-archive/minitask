import React, {useState, useEffect}from 'react'
import { connect } from 'react-redux'
import './App.css';
import { fetchUser } from './actions'
import { addItem } from './actions'


function App({user, items, dispatch}) {

const [name, setName] = useState("")
const [score, setScore] = useState("")

useEffect(() => {
  dispatch(fetchUser())
}, [])

function submitMessage() {
  const data = {name, score}
  dispatch(addItem(data))
}

function handleNameChange(event) {
  setName(event.target.value)
}

function handleScoreChange(event) {
  setScore(event.target.value)
}

const number = items.map((item, i) => Number(item.score)).reduce((acc, current) => acc + current, 0)
console.log(number)


  return (
    <div className="App">
      {user && user.profilePicture && <img src={user.profilePicture} />}
      {user && user.name && <p>{user.name}</p>}
      <input value={name} onChange={handleNameChange}/>
      <br />
      <input value={score} onChange={handleScoreChange}/>
      <br />
      <button onClick={submitMessage}>Add</button>
      {items.map((item, i) => <p key={i}>{item.name}</p>)}
      <h1>Total score:</h1>{number}

    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    items: state.items
  }
}

export default connect(
  mapStateToProps,
)(App)
