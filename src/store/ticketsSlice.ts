import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
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
  error: null | SerializedError,
}

export const fetchSearchId = createAsyncThunk<string>(
  'tickets/fetchSearchId',
  async () => {
    const response = await fetch(ApiUrls.SearchId())
      .then((response) => response.json());
    return response.searchId;
  }
)

export const fetchTickets = createAsyncThunk<any ,string>(
  'tickets/fetchTickets',
  async (searchId, {dispatch}) => {
    try {
      const response = await fetch(ApiUrls.Tickets(searchId))
        .then((response) => response.json());

      if(!response.stop) {
        dispatch(actions.addTickets(response.tickets));
        dispatch(fetchTickets(searchId));
        return;
      }
  
      dispatch(actions.addTickets(response.tickets));
    } catch (err) {
      dispatch(fetchTickets(searchId));
    }
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
  reducers: {
    addTickets: (state, action) => {
      state.entities = state.entities.concat(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
  },
});

export const { actions } = ticketsSlice;
export default ticketsSlice.reducer;