import React from 'react';

// Header component
const Header = ({ courseName }) => {
  return (
    <h2>{courseName}</h2>
  )
}

// Part component for individual parts in course content
const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}


// Content component
const Content = ({ courseParts }) => {
  // using the map fuction to show variable number of items from
  // courseParts array (originally defined as parts array in App component)
  return (
    courseParts.map((part) => <Part key={part.id} part={part} />)
  )
}

// TotalExercises component
const TotalExercises = ({ course }) => {
  // using the reduce function on 'parts' array of the object in 'course' constant.
  // 'sum' variable stores the added value of the individual 'part.exercises' 
  // inside 'parts' array. The final 'sum' output is stored as 'total'.
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <strong>total of {total} exercises</strong>
  )
}

// Course component
const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <TotalExercises course={course} />
    </>
  )
}

const App = () => {
  // Array of objects containing all courses
  const courses = [
    {
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
        {
          id: 4,
          name: 'Redux',
          exercises: 11,
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          id: 1,
          name: 'Routing',
          exercises: 3,
        },
        {
          id: 2,
          name: 'Middlewares',
          exercises: 7,
        },
      ]
    }
  ]

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {/* Map each element of the 'courses' array to <Course /> component */}
      {courses.map((course) =>
        <Course key={course.id} course={course} />
      )}
    </>
  )
}

export default App;
