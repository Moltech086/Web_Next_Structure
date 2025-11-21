import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const { Mutex } = require('async-mutex');

const mutex = new Mutex();

const IsProdMode = true;
const isTestMode = false;



const APIUrl =
  IsProdMode
    ? process.env.NEXT_PUBLIC_LIVE_SITE_URL
    : isTestMode
      ? process.env.NEXT_PUBLIC_TEST_SITE_URL
      : process.env.NEXT_PUBLIC_LOCAL_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: APIUrl,
  prepareHeaders: (headers) => {

    headers.set("Content-Type", "application/json");
    // let authData = getAuthProps();
    // if (authData) {
    //   const token = authData.token.token; 
    //   headers.set("Authorization", `Bearer ${token}`);
    // }
    return headers;
  }
});


export const defaultBaseQuery = fetchBaseQuery({
  baseUrl: APIUrl,
  prepareHeaders: (headers) => {

    headers.set("Content-Type", "application/json");
    // let authData = getAuthProps();
    // if (authData) {
    //   const token = authData.token.token;
    //   headers.set("Authorization", `Bearer ${token}`);
    // }
    return headers;
  }

}); // Replace '/api' with your API base URL


export const fileUploadQuery = fetchBaseQuery({

  baseUrl: APIUrl,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "multipart/form-data");
    // let authData = getAuthProps();
    // let token = null;
    // if (authData) {
    //   token = authData.token.token;
    //   headers.set("Authorization", `Bearer ${token}`);
    // }

    // if (!token) {
    //   // dispatch(logout());
    //   window.location.href = '/login'
    //   return;
    // }

    return headers;
  }
})


export const customFetchBase = async (args, api, extraOptions) => {
  // Get the authorization token
  // const authData = getAuthProps();
  // let token = null
  // if (authData)
  //   token = authData.token.token;

  // if (!token) {
  //   // Handle the case where there is no token (user is not logged in)
  //   api.dispatch(logout());
  //   window.location.href = '/login';
  //   return;
  // }

  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  // Add the authorization header to the request
  args.headers = {
    ...args.headers,
    // Authorization: `Bearer ${token}`,
  };

  let result = await baseQuery(args, api, extraOptions);

  // if (result.error) {
  //   // Handle the case where the request returned an error, e.g., token expiration
  //   if (result.error.status === 401) {
  //     // Token expired or invalid
  //     api.dispatch(logout());
  //     window.location.href = '/login';
  //   }
  // }

  return result;
};


