import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

import * as api from '../../shared/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      Notify.success(`${result.user.name}, welcome to Phonebook!`);
      return result;
    } catch ({ response }) {
      Notify.failure("Can't register, try again");
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      Notify.success(`${result.user.name}, welcome back to Phonebook!`);
      return result;
    } catch ({ response }) {
      Notify.failure("Can't log in, try again");
      return rejectWithValue(response);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.current(auth.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  '/auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
