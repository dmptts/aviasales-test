import FlightDetails from './FlightDetails';

function TicketCard (): JSX.Element {
  return (
    <li>
      <div>
        <p>13 400 Р</p>
        <img src="#" alt="Логотип авиакомпании" />
      </div>
      <FlightDetails />
      <FlightDetails />
    </li>
  )
}

export default TicketCard;