import { apiSlice } from "./apiSlice";

const SHORTY_URL = "/api/urls";

export const urlsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: `${SHORTY_URL}/fullurl`,
        method: "POST",
        body: data,
      }),
    }),
    redirect: builder.query({
      query: (shorturl) => ({
        url: `${SHORTY_URL}/${shorturl}`,
        providesTags: (result, error, shorturl) => [
          { type: "Url", id: shorturl },
        ],
      }),
    }),
  }),
});

export const { useCreateMutation, useRedirectQuery } = urlsApiSlice;
