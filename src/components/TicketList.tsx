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
  const { searchId, sortingType, stopsFilter } = useAppSelector((state) => state.tickets);
  const unprocessedTickets = useAppSelector((state) => state.tickets.entities);
  const [filteredTickets, setFilteredTickets] = useState(unprocessedTickets);
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
    const stops: number[] = [];
    stopsFilter.noChange && stops.push(0);
    stopsFilter.change1 && stops.push(1);
    stopsFilter.change2 && stops.push(2);
    stopsFilter.change3 && stops.push(3);

    stops.length > 0
    ? setFilteredTickets(unprocessedTickets.filter((ticket) => stops.includes(ticket.segments[0].stops.length) && stops.includes(ticket.segments[1].stops.length)))
    : setFilteredTickets(unprocessedTickets);
  }, [unprocessedTickets, stopsFilter]);

  useEffect(() => {
    setTickets(sortTickets([...filteredTickets], sortingType));
  }, [sortingType, filteredTickets]);

  return (
    <>
      <List>
        {tickets && tickets.map((ticket: Ticket, i) => i < shownTicketCount && <TicketCard key={nanoid()} ticket={ticket}/>)}
      </List>
      <Button clickHandler={btnClickHandler}>Показать еще 5 билетов!</Button>
    </>
  )
};

export default TicketList;