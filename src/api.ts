import {ApiUrls} from './const';

export const getSearchId = () => {
  return fetch(`${ApiUrls.SearchId}`)
    .then((response) => response.json())
    .then((response) => response.data);
}

export const getTickets = (searchId: string) => {
  return fetch(`${ApiUrls.Tickets}?searchId=${searchId}`)
    .then((response) => response.json())
    .then((response) => response.data);
}