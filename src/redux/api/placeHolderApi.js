import { baseApi } from "./baseApi"


const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemonByName: build.query({
        query: (name) => `/users`,
      }),
  }),
})

export const { useGetPokemonByNameQuery } = extendedApi