import { SortingTypes, Ticket } from '../const';

const sortTicketsByPrice = (tickets: Ticket[]) => {
  return tickets.sort((a, b) => a.price - b.price);
}

const sortTicketsBySpeed = (tickets: Ticket[]) => {
  return tickets.sort((a, b) => {
    const firstTicketDurationSum = a.segments[0].duration + a.segments[1].duration;
    const secondTicketDurationSum = b.segments[0].duration + b.segments[1].duration;

    return firstTicketDurationSum - secondTicketDurationSum;
  });
}

const sortTicketsByOptimality = (tickets: Ticket[]) => {
  return tickets.sort((a, b) => {
    const firstCoef = (a.segments[0].duration + a.segments[1].duration) / a.price * 100;
    const secondCoef = (b.segments[0].duration + b.segments[1].duration) / b.price * 100;

    return secondCoef - firstCoef;
  })
}

export const sortTickets = (tickets: Ticket[], sortingType: SortingTypes): Ticket[] => {
  switch (sortingType) {
    case SortingTypes.Cheaper:
      return sortTicketsByPrice(tickets);
    case SortingTypes.Faster:
      return sortTicketsBySpeed(tickets);
    case SortingTypes.Optimal:
      return sortTicketsByOptimality(tickets);
    default:
      return tickets;
  }
}