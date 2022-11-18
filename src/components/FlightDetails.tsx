import styled from 'styled-components';
import { formatCount } from '../utils/format-count';

const DetailsBody = styled.div`
  display: flex;
  gap: 20px;
`

const DetailsSegment = styled.div`
  width: 140px;
`

const UpperSegment = styled.div`
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--gull-grey);
`

const LowerSegment = styled.div`
  font-size: 0.875em;
  font-weight: 600;
`

type FlightDetailsProps = {
  details: {
    origin: string,
    destination: string,
    date: string,
    stops: string[],
    duration: number,
  },
};

function FlightDetails ({ details }: FlightDetailsProps): JSX.Element {
  const { origin, destination, date, duration, stops } = details;
  
  const getFormattedTimes = () => {
    const departureTime = new Date(date);
    const arrivalTime = new Date(departureTime.getTime() + duration * 60 * 1000);

    const formattedDepartureHour = departureTime.getHours() < 10 ? `0${departureTime.getHours()}` : `${departureTime.getHours()}`;
    const formattedDepartureMinute = departureTime.getMinutes() < 10 ? `0${departureTime.getMinutes()}` : `${departureTime.getMinutes()}`;
    const formattedArrivalHour = arrivalTime.getHours() < 10 ? `0${arrivalTime.getHours()}` : `${arrivalTime.getHours()}`;
    const formattedArrivalMinute = arrivalTime.getMinutes() < 10 ? `0${arrivalTime.getMinutes()}` : `${arrivalTime.getMinutes()}`;

    const formattedDepartureTime = `${formattedDepartureHour}:${formattedDepartureMinute}`;
    const formattedArrivalTime = `${formattedArrivalHour}:${formattedArrivalMinute}`;

    return `${formattedDepartureTime} - ${formattedArrivalTime}`
  }

  const getFormattedDuration = () => {
    const days = Math.floor(duration / 60 / 24);
    const hours = Math.floor((duration - days * 24 * 60) / 60);
    const minutes = duration % 60;
    return `${days ? `${days}д `: ''}${hours ? `${hours}ч `: ''}${minutes}м`;
  }

  return (
    <DetailsBody>
      <DetailsSegment>
        <UpperSegment>
          {origin} – {destination}
        </UpperSegment>
        <LowerSegment>
          {getFormattedTimes()}
        </LowerSegment>
      </DetailsSegment>
      <DetailsSegment>
        <UpperSegment>
          В пути
        </UpperSegment>
        <LowerSegment>
          {getFormattedDuration()}
        </LowerSegment>
      </DetailsSegment>
      <DetailsSegment>
        <UpperSegment>
          {`${stops.length !== 0 ? stops.length : ''} ${formatCount(
            stops.length,
            'Без пересадок',
            'Пересадка',
            'Пересадки',
            'Пересадок'
          )}`}
        </UpperSegment>
        <LowerSegment>
          {stops.join(', ')}
        </LowerSegment>
      </DetailsSegment>
    </DetailsBody>
  );
};

export default FlightDetails;