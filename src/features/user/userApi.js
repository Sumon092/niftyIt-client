import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        tagTypes: ["Users", "User"],
        getUsers: builder.query({
            query: () => "http://localhost:5000/api/v1/user/getUser",
            keepUnusedDataFor: 600,
            providesTags: ["Users"],
        }),
        getUser: builder.query({
            query: (id) => `http://localhost:5000/api/v1/user/getUser/${id}`,
            providesTags: (result, error, arg) => [{ type: "User", id: arg }],
        }),
        updateUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `http://localhost:5000/api/v1/user/updateUser/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "Users",
                { type: "User", id: arg.id }
            ],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useUpdateUserMutation } = usersApi;
