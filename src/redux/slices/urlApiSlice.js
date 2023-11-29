import { apiSlice } from "./apiSlice";

const USERS_URL = "http://localhost:8003/api/urls";

export const urlsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/fullurl`,
        method: "POST",
        body: data,
      }),
    }),
    redirect: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/:shorturl`,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useCreateMutation, useRedirectMutation } = urlsApiSlice;
