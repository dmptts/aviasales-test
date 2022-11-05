import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {ApiUrls, LoadingStatuses} from '../const';

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
}

export type TicketsState = {
  entities: Ticket[],
  searchId: string | null,
  loading: LoadingStatuses,
  error: null,
}

type TicketResponse = {
  tickets: Ticket[],
  stop: boolean,
}

export const fetchSearchId = createAsyncThunk<string>(
  'tickets/fetchSearchId',
  async () => {
    const response = await fetch(ApiUrls.SearchId())
      .then((response) => response.json());
    return response.searchId;
  }
)

export const fetchTickets = createAsyncThunk<TicketResponse, string>(
  'tickets/fetchTickets',
  async (searchId) => {
    const response = await fetch(ApiUrls.Tickets(searchId))
      .then((response) => response.json());
    console.log(response);
    return response;
  }
)

const initialState: TicketsState = {
  entities: [],
  searchId: null,
  loading: LoadingStatuses.Idle,
  error: null,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.entities = state.entities.concat(action.payload.tickets);
      })
  },
});

export const { actions } = ticketsSlice;
export default ticketsSlice.reducer;