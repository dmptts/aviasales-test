import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Legend = styled.legend`
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

function Filter (): JSX.Element {
  const [filterState, setFilterState] = useState({
    all: true,
    noChange: false,
    change1: false,
    change2: false,
    change3: false,
  });

  const setter = (id: keyof typeof filterState, payload: boolean) => {
    setFilterState({
      ...filterState,
      [id]: payload
    })
  }

  return (
    <Form>
      <Legend>Количество пересадок</Legend>
      <Checkbox
        id='all-checkbox'
        label='Все'
        state={filterState.all}
        setter={(payload) => setter('all', payload)}
      />
      <Checkbox
        id='no-change-checkbox'
        label='Без пересадок'
        state={filterState.noChange}
        setter={(payload) => setter('noChange', payload)}
      />
      <Checkbox
        id='1-change-checkbox'
        label='1 пересадка'
        state={filterState.change1}
        setter={(payload) => setter('change1', payload)}
      />
      <Checkbox
        id='2-change-checkbox'
        label='2 пересадка'
        state={filterState.change2}
        setter={(payload) => setter('change2', payload)}
      />
      <Checkbox
        id='3-change-checkbox'
        label='3 пересадка'
        state={filterState.change3}
        setter={(payload) => setter('change3', payload)}
      />
    </Form>
  )
}

export default Filter;