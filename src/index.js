import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers';
import data from './data.json';

// console.log(data.cards)
// console.log(<Beers list={data.cards} />)

ReactDOM.render(
  <React.StrictMode>
    <header>{data.logo}</header>
    <Beers list={data.cards} />
  </React.StrictMode>,
  document.getElementById('root')
)
