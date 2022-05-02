<template>
    <div id="module-add-project"
         class="fixed flex justify-center items-center w-full h-full top-0 left-0 hidden">

        <!-- overlay -->
        <div class="absolute block w-full h-full top-0 left-0 bg-gray-800 opacity-70"></div>

        <!-- content -->
        <div id="module-content" class="relative block bg-white text-gray-800 pt-8 pb-5 px-3">
            <button @click="$eventBus.$emit('module-add-project:hide')" class="absolute top-1 right-1">close</button>

            <h2 class="text-2xl mb-10">Add Project</h2>

            <!-- -->
            <div class="mb-2">
                <input type="text" class="w-full border border-gray-300" v-model="name" placeholder="name">
            </div>

            <!--  actions -->
            <div class="mb-2 mt-6">
                <button @click="clear" class="button">clear</button>
            </div>
            <div>
                <button @click="addProject" class="button">add</button>
            </div>
        </div>

    </div>
</template>

<script>


export default {
    name: "ComponentModuleAddProject",
    data() {
        return {
            name: '',
        }
    },
    methods: {
        clear() {
            this.name = '';
        },
        show() {
            this.$el.classList.remove('hidden');
            this.$el.classList.add('fixed');
        },
        hide() {
            this.$el.classList.remove('fixed');
            this.$el.classList.add('hidden');
            this.clear();
        },
        addProject() {
            const vm = this;
            this.$store.commit('addProject', {
                id: Date.now(),
                name: vm.name,
            });
            this.hide();
        }
    },
    mounted() {
        this.$eventBus.$on('module-add-project:show', this.show);
        this.$eventBus.$on('module-add-project:hide', this.hide);
    }
}
</script>

<style scoped lang="scss">
#module-content {
    width: 96%;
    max-width: 320px;
}
</style>