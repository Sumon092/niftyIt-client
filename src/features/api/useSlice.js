// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const useSlice = createApi({
//     reducerPath: "users",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:5000/api/v1/user",
//     }),
//     tagTypes: ["Users", "User"],
//     endpoints: (builder) => ({
//         getUsers: builder.query({
//             query: () => "/getUser",
//             keepUnusedDataFor: 600,
//             providesTags: ["Users"],
//         }),
//         getUser: builder.query({
//             query: (id) => `/getUser/${id}`,
//             providesTags: (result, error, arg) => [{ type: "User", id: arg }],
//         }),
//         updateUser: builder.mutation({
//             query: ({ id, data }) => ({
//                 url: `/updateUser/${id}`,
//                 method: "PATCH",
//                 body: data,
//             }),
//             invalidatesTags: (result, error, arg) => [
//                 "Users",
//                 { type: "User", id: arg.id }
//             ],
//         }),

//     }),
// });

// export const {
//     useGetUsersQuery,
//     useGetUserQuery,
//     useUpdateUserMutation
// } = useSlice;
