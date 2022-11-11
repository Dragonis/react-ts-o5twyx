import React from 'react';

const Title = (props) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-cyan-600 bg-amber-300">
        {props.name}
      </h1>

      {/* {
      props.name 
      ? (<><h1>Hello {props.name}</h1></>) 
      : (<><h2>There is no name</h2></>)
      } */}
    </>
  );
};

export default Title;
