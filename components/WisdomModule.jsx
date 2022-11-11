import React from 'react';

const WisdomModule = (props) => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="group text-xl">
          <strong className="group-hover:text-red-500">
            Biznes to człowiek{' '}
          </strong>
          <strong className="group-hover:text-green-500">
            kasa to ilość many{' '}
          </strong>
          <strong className="group-hover:text-blue-500">
            manipulacje to spelle{' '}
          </strong>
          <strong className="group-hover:text-orange-500">
            a celem jest zdobycie zasobów zombiaka
          </strong>
          <br></br>
          Więc zoombie nigdy nie zdradzi ci sekretów (jego spellów), gdyż wtedy
          jego firma na tobie nie zarobi.<br></br>
          Dlatego zoombiak czaruje kłamstwami i manipulacjami żebyś wszedł w
          jego sidła.
        </div>

        <img src=".\src\text.jpg" alt="text"></img>
      </div>
    </>
  );
};

export default WisdomModule;
