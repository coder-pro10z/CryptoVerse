// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "x-rapidapi-key": "66270fe653mshbdb155115e6bb11p1413c7jsn24fefab182e4",
//   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => createRequest("/coins"),
//     //endpoint Crypto Details
//     getCryptoDetails:(builder).query({
//       query: ()=> createRequest(`/coin/${id}`),
//     })
//     }),
//   }),
// });

// export const {useGetCryptosQuery, useGetCryptoDetailsQuery }=cryptoApi;


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "x-rapidapi-key": "66270fe653mshbdb155115e6bb11p1413c7jsn24fefab182e4",
//   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     // Fetch multiple cryptocurrencies
//     getCryptos: builder.query({
//       query: () => createRequest("/coins"),
    
// }),

//     }),
//   // Add this to cryptoApi.ts (or your API service file)
//   getExchanges: builder.query({
//     query: () => createRequest('/exchanges'),
//     // Fetch specific cryptocurrency details by ID
//     getCryptoDetails: builder.query({
//       query: ({uuid,timePeriod}) => createRequest(`/coin/${uuid}?${timePeriod}`),  // Pass the coin ID dynamically
      
//     }),
//   }),
// });

// // Correctly export hooks
// export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, } = cryptoApi;
// /////////////////////
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
    // Fetch multiple cryptocurrencies
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),

    // Fetch exchange data
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),

    // Fetch specific cryptocurrency details by ID and time period
    getCryptoDetails: builder.query({
      query: ({ uuid, timePeriod }) =>
        createRequest(`/coin/${uuid}?timePeriod=${timePeriod}`), // Pass the coin ID dynamically along with timePeriod
    }),
  }),
});

// Correctly export hooks
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
} = cryptoApi;



/////
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "x-rapidapi-key": "66270fe653mshbdb155115e6bb11p1413c7jsn24fefab182e4",
//   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     // Fetch multiple cryptocurrencies
//     getCryptos: builder.query({
//       query: () => createRequest("/coins"),
//     }),

//     // Fetch specific cryptocurrency details by ID
//     getCryptoDetails: builder.query({
//       query: ({ uuid, timePeriod }) => ({
//         url: `/coin/${uuid}`,
//         // params: { referenceCurrencyUuid: uuid, timePeriod },
//       }),
//     }),
//   }),
// });

// Correctly export hooks
// export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;


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
