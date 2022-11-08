import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchSearchId, fetchTickets, Ticket } from '../store/ticketsSlice';
import TicketCard from './TicketCard';
import { nanoid } from '@reduxjs/toolkit';
import Button from './Button';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;

  list-style: none;
`

function TicketList (): JSX.Element {
  const dispatch = useAppDispatch();
  const searchId = useAppSelector((state) => state.tickets.searchId);
  const tickets = useAppSelector((state) => state.tickets.entities);
  const [shownTicketCount, setShownTicketCount] = useState<number>(5);

  const btnClickHandler = () => {
    setShownTicketCount((prevState) => prevState + 5)
  }

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId));
    }
  }, [dispatch, searchId])

  return (
    <>
      <List>
        {tickets && tickets.map((ticket: Ticket, i) => i < shownTicketCount && <TicketCard key={nanoid()} ticket={ticket}/>)}
      </List>
      <Button clickHandler={btnClickHandler}>Показать еще 5 билетов!</Button>
    </>
  )
}

export default TicketList;