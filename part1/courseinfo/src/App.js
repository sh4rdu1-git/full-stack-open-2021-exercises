import React from 'react';

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.info.name} {props.info.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part info={props.parts[0]} />
      <Part info={props.parts[1]} />
      <Part info={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div>
      {/* For <Header />, passing courseName as prop */}
      <Header courseName={course} />
      {/* For <Content />, passing parts array as prop */}
      <Content parts={[part1, part2, part3]} />
      {/* For <Total />, passing parts array as prop */}
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App;
