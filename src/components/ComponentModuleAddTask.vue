<template>
    <div id="module-add-task"
         class="fixed flex justify-center items-center w-full h-full top-0 left-0 hidden">

        <!-- overlay -->
        <div class="absolute block w-full h-full top-0 left-0 bg-gray-800 opacity-70"></div>

        <!-- content -->
        <div id="module-content" class="relative block bg-white text-gray-800 pt-8 pb-5 px-3">
            <button @click="$eventBus.$emit('module-add-task:hide')" class="absolute top-1 right-1">close</button>

            <h2 class="text-2xl mb-10">Add Task</h2>

            <!-- -->
            <div class="mb-2">
                <textarea placeholder="desciption" class="w-full h-16 border border-gray-300 resize-none m-0"
                          v-model="description"></textarea>
            </div>
            <!-- -->
            <div class="mb-2">
                <input type="date" class="w-full border border-gray-300" v-model="data">
            </div>
            <!-- -->
            <div class="mb-2">
                <select class="w-full border border-gray-300" v-model="label">
                    <option value="0" disabled>no label</option>

                    <template v-for="(value_label, idx_label) in labels">
                        <option :value="value_label.id" :key="idx_label" :style="{backgroundColor: '#' + value_label.color }">Label {{ value_label.name }}</option>
                    </template>

                </select>
            </div>

            <!-- -->
            <div class="mb-2">
                <select class="w-full border border-gray-300" v-model="priority">
                    <option value="0" disabled>no priority</option>
                    <option value="1">priority 1</option>
                    <option value="2">priority 2</option>
                    <option value="3">priority 3</option>
                </select>
            </div>

            <!--  actions -->
            <div class="mb-2 mt-6">
                <button @click="clear" class="button">clear</button>
            </div>
            <div>
                <button @click="addItem" class="button">add</button>
            </div>
        </div>

    </div>
</template>

<script>
import ComputedMixins from "@/mixins/ComputedMixins";

export default {
    name: "ComponentModuleAddTask",

    mixins:[ComputedMixins],
    data() {
        return {
            description: '',
            data: '',
            label: 0,
            priority:0,
        }
    },

    methods: {
        clear() {
            this.description = '';
            this.data = '';
            this.label = 0;
            this.priority = 0;
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
        addItem() {
            const vm = this;
            this.$store.commit('addItem', {
                id: Date.now(),
                description : vm.description,
                data: vm.data,
                label: vm.label,
                priority: vm.priority,
            });
            this.hide();
        }
    },
    mounted() {
        this.$eventBus.$on('module-add-task:show', this.show);
        this.$eventBus.$on('module-add-task:hide', this.hide);
    }
}
</script>

<style scoped lang="scss">
#module-content {
    width: 96%;
    max-width: 320px;
}
</style>