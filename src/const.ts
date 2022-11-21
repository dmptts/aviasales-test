export enum SortingTypes {
  Cheaper = 'cheaper',
  Faster = 'faster',
  Optimal = 'optimal',
}

export enum LoadingStatuses {
  Idle = 'idle',
  Running = 'running',
  Complete = 'complete',
  Error = 'error'
}

export type Ticket = {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
  ],
};

export type StopsFilterType = {
  all: boolean,
  noChange: boolean,
  change1: boolean,
  change2: boolean,
  change3: boolean,
}

export const ApiUrls = {
  SearchId: () => 'https://front-test.dev.aviasales.ru/search',
  Tickets: (searchId: string) => `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`,
  CarrierLogo: (iata: string) => `//pics.avs.io/99/36/${iata}.png`
}