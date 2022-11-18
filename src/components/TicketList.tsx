import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchSearchId, fetchTickets } from '../store/ticketsSlice';
import { Ticket } from '../const';
import { sortTickets } from '../utils/sorting';
import TicketCard from './TicketCard';
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
  const { searchId, sortingType } = useAppSelector((state) => state.tickets);
  const unprocessedTickets = useAppSelector((state) => state.tickets.entities);
  const [tickets, setTickets] = useState<Ticket[]>(unprocessedTickets);
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
  }, [dispatch, searchId]);

  useEffect(() => {
    setTickets(sortTickets([...unprocessedTickets], sortingType));
  }, [sortingType, unprocessedTickets])

  useEffect(() => {
    console.log(tickets);
  }, [tickets]);

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