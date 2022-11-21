import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { ApiUrls, LoadingStatuses, SortingTypes, StopsFilterType, Ticket } from '../const';

export type TicketsState = {
  entities: Ticket[], 
  searchId: string | null,
  sortingType: SortingTypes,
  stopsFilter: StopsFilterType,
  loadingStatus: LoadingStatuses,
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
      dispatch(actions.changeLoadingStatus(LoadingStatuses.Complete));
      dispatch(actions.removeSearchId());
    } catch (err) {
      dispatch(fetchTickets(searchId));
    }
  }
)

const initialState: TicketsState = {
  entities: [],
  searchId: null,
  sortingType: SortingTypes.Cheaper,
  stopsFilter: {
    all: true,
    noChange: false,
    change1: false,
    change2: false,
    change3: false,
  },
  loadingStatus: LoadingStatuses.Idle,
  error: null,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTickets: (state, action) => {
      state.entities = state.entities.concat(action.payload);
    },
    removeSearchId: (state) => {
      state.searchId = null;
    },
    changeSorting: (state, action) => {
      state.sortingType = action.payload;
    },
    changeLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    },
    changeStopsFilter: (state, action) => {
      Object.values(action.payload).every((value) => value === false)
      ? state.stopsFilter = {
        all: true,
        noChange: false,
        change1: false,
        change2: false,
        change3: false,
      }
      : state.stopsFilter = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.loadingStatus = LoadingStatuses.Running;
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
  },
});

export const { actions } = ticketsSlice;
export default ticketsSlice.reducer;