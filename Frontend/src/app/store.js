import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi'; // Import the news API service
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    // Add the reducers for the APIs
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(cryptoNewsApi.middleware), // Add the middleware for cryptoNewsApi
});

// Enable refetching on focus/background
setupListeners(store.dispatch);

export default store;
