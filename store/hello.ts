import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    name: ''
})

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    name: state => state.name
}

export const actions: ActionTree<RootState, RootState> = {
    sendName({ commit }, params) {
        const message = `hello ${params}`
        commit('CHANGE_NAME', message)
    }
}

export const mutations: MutationTree<RootState> = {
    CHANGE_NAME: (state, newName: string) => (state.name = newName)
}
