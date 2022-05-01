import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import {vuexLocal} from "@/store/plugins";


export default new Vuex.Store({
    state: {
        items: [],
        labels: [],
        projects: [],
        count: 0,
    },
    getters: {
        items(state) {
            return state.items
        },
        labels(state) {
            return state.labels
        },
        projects(state) {
            return state.projects
        },
    },
    mutations: {
        count(state) {
            console.log('merge');
            state.count++;
        },

        items(state, payload) {
            state.items = payload
        },
        labels(state, payload) {
            state.labels = payload
        },
        projects(state, payload) {
            state.projects = payload
        },
        //
        addItem(state, payload) {
            state.items.push(payload);
        },
        removeItem(state, payload) {
            state.items = [ ...state.items.filter(item=>payload.id !== item.id)];
        },
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})
