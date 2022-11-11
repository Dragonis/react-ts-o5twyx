import React from 'react';

import { StockChart, Dolar, News, Video, Future, Womens } from './economytable';

const EconomyModule = (props) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-1">
        {/* <StockChart />
        <Dolar />
        <News />
        <Future />
        <Video />
        <Womens /> */}
        <div>
          <p>
            <b>
              Wykres to kod żródłowy rzezywistości. A wszelkiej maści eksperci z
              certyfikatami to bajkopisarze żeby zgarnąć na kretynach kasę
            </b>
          </p>
          <p>
            <b>Obligacje skarbowe są głową rządu</b>
          </p>
          Obligacja skarbowa to waluta + prognozowane odsetki od kupna tego
          aktywa od rządu<br></br>
          Dziś kupujesz obligacje czyli dajesz teraz kase, w zamian za obietnice
          zysku w przyszlosci
        </div>
        <div>
          <p>
            <b>Inne</b>
          </p>
          <ul>
            <li>
              <a href="https://medium.com/@majdasab/integrating-an-angular-project-with-spring-boot-e3a043b7307b">
                * Integrating an Angular project with Spring Boot
              </a>
            </li>
            <li>
              <a href="https://github.com/sterlp/spring-angular-starter">
                * Kod żródłowy do powyzszego linka
              </a>
            </li>
            <li>
              <a href="https://sterl.org/2019/02/angular-spring-boot/">
                * Multi-module angular & spring boot
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/docs/grid-template-rows">
                * Tailwind css docs
              </a>
            </li>
          </ul>
        </div>
        <div>09</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
    </>
  );
};

export default EconomyModule;
