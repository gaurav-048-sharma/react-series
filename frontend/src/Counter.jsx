import React, {useState} from 'react'

const Counter = (props) => {
    console.log(props)
 let [count , setCount] = useState(0);

 const add = () => {
    console.log(count)
    count = count +1;
    setCount(count)
 }
 const sub = () => {
    count = count -1;
    setCount(count)
 }
 const reset = () => {
    count = 0;
    setCount(count)
 }

  return (
    <div>
      <h1>Counter {count}</h1>
      <h1>Name {props.name}</h1>
      <h1>Age {props.age}</h1>
      <button onClick={add}>Add</button>
      <button onClick={sub}> sub</button>
      <button onClick={reset}> reset</button>
    </div>
  )
}

export default Counter
