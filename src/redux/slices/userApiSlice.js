import { apiSlice } from "./apiSlice";

const USERS_URL = "http://localhost:8003/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    activate: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/activate`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    forgotpassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/forgotpassword`,
        method: "POST",
        body: data,
      }),
    }),
    resetpassword: builder.mutation({
      query: (data, token) => ({
        url: `${USERS_URL}/resetpassword/:${token}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivateMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgotpasswordMutation,
  useResetpasswordMutation,
} = usersApiSlice;
