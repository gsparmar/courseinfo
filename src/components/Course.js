import React from 'react';

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Parts parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ name }) => {
  return <h3>{name}</h3>;
};

const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, currV) => sum + currV.exercises, 0);
  console.log(total);
  return (
    <div>
      <p>
        <strong>total of {total} exerces</strong>
      </p>
    </div>
  );
};

export default Course;
