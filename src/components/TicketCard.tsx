import FlightDetails from './FlightDetails';
import s7Logo from '../img/s7-logo.png';
import s7Logo2x from '../img/s7-logo@2x.png'
import styled from 'styled-components';

const Ticket = styled.li`
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

function TicketCard (): JSX.Element {
  return (
    <Ticket>
      <TicketHeader>
        <TicketPrice>13 400 Р</TicketPrice>
        <img src={s7Logo} srcSet={s7Logo2x} width='110' height='36' alt='Логотип авиакомпании' />
      </TicketHeader>
      <TicketBody>
        <FlightDetails />
        <FlightDetails />
      </TicketBody>
    </Ticket>
  )
}

export default TicketCard;