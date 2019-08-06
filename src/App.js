import React from 'react';


const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Tatsuya", age: 20},
    { name: "No age"}
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
