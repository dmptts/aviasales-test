import {useState} from 'react';

function Filter (): JSX.Element {
  const [filterState, setFilterState] = useState({
    all: true,
    noChange: false,
    change1: false,
    change2: false,
    change3: false,
  });
  
  return (
    <form>
      <legend>Количество пересадок</legend>
      <input id='all-checkbox' type='checkbox'></input>
      <label htmlFor="all-checkbox">Все</label>
      <input id='no-change-checkbox' type='checkbox'></input>
      <label htmlFor="no-change-checkbox">Без пересадок</label>
      <input id='1-change-checkbox' type='checkbox'></input>
      <label htmlFor="1-change-checkbox">1 пересадка</label>
      <input id='2-change-checkbox' type='checkbox'></input>
      <label htmlFor="2-change-checkbox">2 пересадки</label>
      <input id='3-change-checkbox' type='checkbox'></input>
      <label htmlFor="3-change-checkbox">3 пересадки</label>
    </form>
  )
}

export default Filter;