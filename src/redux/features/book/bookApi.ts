import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/api/v1/books/all-books',
    }),
    singleBook: builder.query({
      query: (id) => ({ url: `/api/v1/books/${id}` }),
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/api/v1/books/create-book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ['comments'],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostBookMutation,
  // useGetCommentQuery,
} = bookApi;
