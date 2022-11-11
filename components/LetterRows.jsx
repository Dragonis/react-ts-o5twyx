import React from 'react';

const LetterRows = (props) => {
  return (
    <>
      <div
        id="texts"
        className="flex flex-col
             hover:bg-red-600 hover:text-yellow-300 
             hover:border-solid hover:border-2 hover:border-indigo-600
            "
      >
        <div>aaa</div>
        <div>bbb</div>
        <div>ccc</div>
      </div>

      <div>
        <p>ddd</p>
        <p>eee</p>
        <p>fff</p>
      </div>
    </>
  );
};

export default LetterRows;
