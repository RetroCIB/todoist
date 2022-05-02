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
        //
        labelById: (state) => (id) => {
            let label = state.labels.filter(label => label.id === id);
            return label.length ? label[0] : null;
        },
        //
        projectById: (state) => (id) => {
            let project = state.projects.filter(project => project.id === id);
            return project.length ? project[0] : null;
        },
        //
        itemsByProjectId: (state) => (id) => {
            let items = state.items.filter(item => {
                return item.id_project === id
            });
            return items.length ? items : [];
        },
        itemsByLabelId: (state) => (id) => {
            let items = state.items.filter(item => {
                return item.id_label === id
            });
            return items.length ? items : [];
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
            state.items = [...state.items.filter(item => payload.id !== item.id)];
        },
        updateItem(state, payload) {
            state.items = [...state.items.map(item => {
                return (payload.id === item.id) ? payload : item;
            })];

        },
        //
        addLabel(state, payload) {
            state.labels.push(payload);
        },
        //
        addProject(state, payload) {
            state.projects.push(payload);
        },
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})
