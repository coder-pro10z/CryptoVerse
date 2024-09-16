import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": "66270fe653mshbdb155115e6bb11p1413c7jsn24fefab182e4",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const {useGetCryptosQuery,}=cryptoApi;

//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl'
//     },
//     headers: {
//       'x-rapidapi-key': '66270fe653mshbdb155115e6bb11p1413c7jsn24fefab182e4',
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//     }
//   };
