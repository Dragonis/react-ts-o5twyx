import * as React from 'react';
import './style.css';

// it's works with local dev
import {
  Title,
  LetterRows,
  PeopleRows,
  EconomyModule,
  QuotesModule,
  WisdomModule,
} from './components';

import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div
      className="
    App 
    text-center "
    >
      <div id="columns" className="flex flex-col">
        <Title name="Gospodarka" />

        <div
          id="column1"
          className="flex flex-row place-items-center space-x-4"
        >
          <PeopleRows />
        </div>

        <div id="column2" className="flex flex-row space-x-1">
          <LetterRows />
        </div>

        <Title name="Cytaty" />

        <div id="column4" className="flex flex-col space-y-3 ">
          <QuotesModule />
        </div>

        <div id="column5">
          <Title name="Mądrość" />
          <WisdomModule />
        </div>
      </div>
    </div>
  );
}

export default App;
