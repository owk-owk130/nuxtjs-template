import {
  getAccessorType,
  getterTree,
  mutationTree,
  actionTree,
} from "typed-vuex";

type IndexState = {
  count: number;
};

export const state = (): IndexState => ({
  count: 0,
});

export const getters = getterTree(state, {
  count: (state) => state.count,
});

export const mutations = mutationTree(state, {
  setCount: (state, newNumber: number) => (state.count = newNumber),
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    countPlus({ state, commit }) {
      commit("setCount", state.count + 1);
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
