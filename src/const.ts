export enum SortingTypes {
  Cheaper = 'cheaper',
  Faster = 'faster',
  Optimal = 'optimal',
}

// export enum ApiUrls {
//   SearchId = 'https://front-test.dev.aviasales.ru/search',
//   Tickets = 'https://front-test.dev.aviasales.ru/tickets',
// }

export enum LoadingStatuses {
  Idle = 'idle',
  Running = 'running',
  Complete = 'complete',
  Error = 'error'
}

export const ApiUrls = {
  SearchId: () => 'https://front-test.dev.aviasales.ru/search',
  Tickets: (searchId: string) => `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`,
}