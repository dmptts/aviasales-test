import TicketCard from './TicketCard';

function TicketList (): JSX.Element {
  return (
    <ul>
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </ul>
  )
}

export default TicketList;