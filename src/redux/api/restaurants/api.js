import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantsApi = createApi({
  reducerPath: "restaurants",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Restaurants", "Restaurant"],

  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
      providesTags: ["Restaurants"],
    }),

    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,

      providesTags: (_, __, restaurantId) => [
        { type: "Restaurant", id: restaurantId },
      ],
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } =
  restaurantsApi;
