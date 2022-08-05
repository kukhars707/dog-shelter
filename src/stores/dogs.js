import { defineStore } from "pinia";
import { DOGS } from "./constants";

export const useDogsStore = defineStore("dogs", {
  id: "dogs",
  state: () => ({
    dogs: DOGS,
  }),
  getters: {
    getDogById: (state) => {
      return (dogId) => state.dogs.find((dog) => dog.id === dogId);
    },
  },
  actions: {
    filter(breed) {
      this.dogs = breed
        ? this.dogs.filter(
            (dog) => !dog.breed.toLowerCase().indexOf(breed.toLowerCase())
          )
        : DOGS;
    },
  },
});
