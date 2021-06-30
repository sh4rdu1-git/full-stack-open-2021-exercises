import React from 'react';

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.parts[0]} {props.exercises[0]}</p>
      <p>{props.parts[1]} {props.exercises[1]}</p>
      <p>{props.parts[2]} {props.exercises[2]}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      {/* For <Header />, passing courseName as prop */}
      <Header courseName={course} />
      {/* For <Content />, passing two props, parts and exercises, which are arrays */}
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      {/* For <Total />, passing exercises array as prop */}
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App;
