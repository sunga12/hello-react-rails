import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  greetings: '',
  isLoading: false,
  error: '',
};

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreetings', async () => {
    try {
      const response = await axios('/api/v1/greetings/random_greeting')
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greetings = action.payload;
      state.isLoading = false;
      // state.greetings = newdata;
    },
    [fetchGreeting.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export default greetingsSlice.reducer;
