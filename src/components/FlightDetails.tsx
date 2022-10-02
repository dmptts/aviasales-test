import styled from 'styled-components';

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
  color: var(--gull-grey);
`

const LowerSegment = styled.div`
  font-size: 0.875em;
  font-weight: 600;
`

function FlightDetails (): JSX.Element {
  return (
    <DetailsBody>
      <DetailsSegment>
        <UpperSegment>
          MOW – HKT
        </UpperSegment>
        <LowerSegment>
          10:45 – 08:00
        </LowerSegment>
      </DetailsSegment>
      <DetailsSegment>
        <UpperSegment>
          В пути
        </UpperSegment>
        <LowerSegment>
          21ч 15м
        </LowerSegment>
      </DetailsSegment>
      <DetailsSegment>
        <UpperSegment>
          2 пересадки
        </UpperSegment>
        <LowerSegment>
          HKG, JNB
        </LowerSegment>
      </DetailsSegment>
    </DetailsBody>
  )
}

export default FlightDetails;