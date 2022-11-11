import React from 'react';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName} </h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

export default Person;
