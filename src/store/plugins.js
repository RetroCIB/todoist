import VuexPersistence from 'vuex-persist'

export const vuexLocal = new VuexPersistence({
    key: "todoist",
    storage: window.localStorage,
    reducer: (state) => {
        return {
            count: state.count,
            items: state.items,
            labels: state.labels,
            projects: state.projects,
        }
    },
})