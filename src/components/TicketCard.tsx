import FlightDetails from './FlightDetails';
import styled from 'styled-components';
import { Ticket } from '../store/ticketsSlice';
import { ApiUrls } from '../const';

const StyledTicket = styled.li`
  width: 502px;
  min-height: 184px;
  padding: 20px;

  background-color: var(--default-white);
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(var(--default-white), 0.1);
  cursor: pointer;
`

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const TicketPrice = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: var(--dodger-blue);
`

const TicketBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

type TicketCardProps = {
  ticket: Ticket
}

function TicketCard ({ ticket }: TicketCardProps): JSX.Element {
  const { price, carrier, segments } = ticket;

  return (
    <StyledTicket>
      <TicketHeader>
        <TicketPrice>{price.toLocaleString('ru')} Р</TicketPrice>
        <img src={ApiUrls.CarrierLogo(carrier)} width='110' height='40' alt={`Логотип ${carrier}`}  />
      </TicketHeader>
      <TicketBody>
        <FlightDetails details={segments[0]} />
        <FlightDetails details={segments[1]} />
      </TicketBody>
    </StyledTicket>
  )
}

export default TicketCard;