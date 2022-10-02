import styled from 'styled-components';
import TicketCard from './TicketCard';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;

  list-style: none;
`

function TicketList (): JSX.Element {
  return (
    <List>
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </List>
  )
}

export default TicketList;