import React from 'react';
import Person from './entity/Person';

const PeopleRows = (props) => {
  return (
    <>
      <div
        className="
        bg-green-300 
        border-solid border-2 border-indigo-600
        hover:border-dotted"
      >
        <Person name="John" lastName="Smith" age={30} />
      </div>

      <div className="bg-red-500">
        <Person name="Kate" lastName="Red" age={30} />
      </div>

      <div className="bg-sky-300">
        <Person name="Diana" lastName="Blue" age={15 + 17} />
      </div>

      <div className="shrink-0 border-solid border-2 border-indigo-600">
        Image
      </div>
      <div className="border-solid border-2 border-indigo-600">
        <h3> text </h3>
        <span> describe </span>
      </div>
    </>
  );
};

export default PeopleRows;
