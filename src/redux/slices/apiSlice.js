import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zharty.onrender.com",
    credentials: "include",
  }),
  tagTypes: ["User", "Url"],
  endpoints: (builder) => ({}),
});
