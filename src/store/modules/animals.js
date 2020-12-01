import AnimalModel from "./AnimalModel";

// initial state
const state = () => ({
  all: [],
});

// getters
const getters = {
  getAllAnimals: (state) => state.all,
};

// actions
const actions = {
  initializeAnimals({ commit }) {
    commit("setAnimals", [
      new AnimalModel({
        name: "Pépéroni",
        species: "chat",
        age: 4,
        dateVetoAppointment: "12/10/2040",
        typeLastVetoAppointment: "controle",
      }),
      new AnimalModel({
        name: "Nine",
        species: "chat",
        age: 3,
        dateVetoAppointment: "30/10/2000",
        typeLastVetoAppointment: "vaccin",
      }),
      new AnimalModel({
        name: "Chisa",
        species: "lapin",
        age: 5,
        dateVetoAppointment: "30/10/2020",
        typeLastVetoAppointment: "vaccin",
      }),
      new AnimalModel({
        name: "Yuki",
        species: "chien",
        age: 1,
        dateVetoAppointment: "30/10/2000",
        typeLastVetoAppointment: "vaccin",
      }),
      new AnimalModel({
        name: "Miaoukai",
        species: "chat",
        age: 4,
        dateVetoAppointment: "30/10/2000",
        typeLastVetoAppointment: "vaccin",
      }),
      new AnimalModel({
        name: "Gnar",
        species: "chat",
        age: 2,
        dateVetoAppointment: "30/09/2020",
        typeLastVetoAppointment: "blessure",
      }),
    ]);
  },
};

// mutations
const mutations = {
  setAnimals(state, animals) {
    state.all = animals;
  },
  upgrateAnimalInStore(state, animalInPayload) {
    state.all.find((animal) => {
      if (animal.id === animalInPayload.id) {
        animal.name = animalInPayload.name;
        animal.age = animalInPayload.age;
        animal.species = animalInPayload.species;
        animal.lastAppointment.date = animalInPayload.lastAppointment.date;
        animal.lastAppointment.typeOfAppointment =
          animalInPayload.lastAppointment.typeOfAppointment;
        return animal;
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
