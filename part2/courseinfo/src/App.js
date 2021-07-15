import React from 'react'
import Course from './components/Course'

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
