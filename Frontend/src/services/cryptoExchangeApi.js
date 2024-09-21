// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // API headers with your RapidAPI key
// const cryptoNewsApiHeaders = {
//  "x-rapidapi-key": "66270fe653mshbdb155115e6bb11p1413c7jsn24fefab182e4",
//  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//   "X-BingApis-SDK": "true",
// };

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// // Helper to format the request with headers
// const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

// // Define the API service for fetching news
// export const cryptoNewsApi = createApi({
//   reducerPath: "cryptoNewsApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: () =>
//         createRequest(
//           `/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw`
//         ),
//     }),
//   }),
// });

// export const { useGetCryptoNewsQuery } = cryptoNewsApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "x-rapidapi-key": "66270fe653mshbdb155115e6bb11p1413c7jsn24fefab182e4",
  "x-rapidapi-host": "news-api14.p.rapidapi.com",
};

const baseUrl = "https://news-api14.p.rapidapi.com/v2";

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: (queryParams) =>
        createRequest(`/search/articles?query=crypto&language=en${queryParams ? `&${queryParams}` : ''}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
