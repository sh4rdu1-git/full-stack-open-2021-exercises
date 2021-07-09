import React from 'react';

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Part = (props) => {
  // console.log("Part: ", props);
  return (
    <p>{props.info.name} {props.info.exercises}</p>
  )
}

const Content = (props) => {
  // console.log("Content: ", props);
  return (
    <>
      <Part info={props.parts[0]} />
      <Part info={props.parts[1]} />
      <Part info={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  // console.log("Total: ", props);
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return (
    <div>
      {/* For <Header />, passing courseName as prop */}
      <Header courseName={course.name} />
      {/* For <Content />, passing parts as array of objects */}
      <Content parts={course.parts} />
      {/* For <Total />, passing parts as array of objects */}
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
