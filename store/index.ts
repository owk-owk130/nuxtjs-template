import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from "typed-vuex";

type IndexState = {
  things: string[];
  name: string;
};

export const state = (): IndexState => ({
  things: [],
  name: "Me",
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  name: (state) => state.name,
});

export const mutations = mutationTree(state, {
  CHANGE_NAME: (state, newName: string) => (state.name = newName),
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    fetchThings({ commit }) {
      const things = this.$axios.$get("/things");
      console.log(things);
      commit("CHANGE_NAME", "New name");
    },
  },
);

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
