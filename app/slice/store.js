import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import commonAPI from "../services/commonAPI";
import contactUsAPI from "../services/contactUsAPI";

export const store = configureStore({

  reducer: {
    [commonAPI.reducerPath]: commonAPI.reducer,
    [contactUsAPI.reducerPath]: contactUsAPI.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    commonAPI.middleware,
    contactUsAPI.middleware,
  ),
})
setupListeners(store.dispatch);
