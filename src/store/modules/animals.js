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
        species: "Chat",
        age: 4,
        dateVetoAppointment: "12/10/2040",
        typeLastVetoAppointment: "controle",
      }),
      new AnimalModel({
        name: "Nine",
        species: "Chat",
        age: 3,
        dateVetoAppointment: "30/10/2000",
        typeLastVetoAppointment: "vaccin",
      }),
      new AnimalModel({
        name: "Chisa",
        species: "Lapin",
        age: 5,
        dateVetoAppointment: "30/10/2020",
        typeLastVetoAppointment: "vaccin",
      }),
      new AnimalModel({
        name: "Yuki",
        species: "Chien",
        age: 1,
        dateVetoAppointment: "30/10/2000",
        typeLastVetoAppointment: "vaccin",
      }),
      new AnimalModel({ name: "Miaoukai", species: "Chat", age: 4,  dateVetoAppointment: '30/10/2000', typeLastVetoAppointment: 'vaccin' }),
      new AnimalModel({ name: "Gnar", species: "Chat", age: 2,  dateVetoAppointment: '30/09/2020', typeLastVetoAppointment: 'blessure' }),
    ]);
  },
};

// mutations
const mutations = {
  setAnimals(state, animals) {
    state.all = animals;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
