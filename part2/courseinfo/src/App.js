import React from 'react';

// Header component
const Header = ({ courseName }) => {
  return (
    <h1>{courseName}</h1>
  )
}

// Part component for individual parts in course content
const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({ courseParts }) => {
  // using the map fuction to show variable number of items from
  // courseParts array (originally defined as parts array in App component)
  return (
    courseParts.map((part) => <Part key={part.id} part={part} />)
  )
}

// Course component
const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack Application Development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14,
      },
    ]
  }

  return (
    <Course course={course} />
  )
}

export default App;
