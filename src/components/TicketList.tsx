import {useEffect} from 'react';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../hooks';
import {fetchSearchId, fetchTickets, Ticket} from '../store/ticketsSlice';
import TicketCard from './TicketCard';
import { nanoid } from '@reduxjs/toolkit';

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

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId));
    }
  }, [dispatch, searchId])

  return (
    <List>
      {tickets.map((ticket: Ticket) => <TicketCard key={nanoid()} ticket={ticket}/>)}
    </List>
  )
}

export default TicketList;