<template>
    <div id="module-add-label"
         class="fixed flex justify-center items-center w-full h-full top-0 left-0 hidden">

        <!-- overlay -->
        <div class="absolute block w-full h-full top-0 left-0 bg-gray-800 opacity-70"></div>

        <!-- content -->
        <div id="module-content" class="relative block bg-white text-gray-800 pt-8 pb-5 px-3">
            <button @click="$eventBus.$emit('module-add-label:hide')" class="absolute top-1 right-1">close</button>

            <h2 class="text-2xl mb-10">Add Label</h2>

            <!-- -->
            <div class="mb-2">
                <input type="text" class="w-full border border-gray-300" v-model="name" placeholder="name">
            </div>
            <!-- -->
            <div class="mb-2">
                <select class="w-full border border-gray-300" v-model="color">
                    <template v-for="(color, idx_color) in colors">
                        <option :value="color.color" :style="{
                            backgroundColor: '#' + color.color
                        }">{{ color.name}} : {{ color.color }}</option>
                    </template>

                </select>
            </div>


            <!--  actions -->
            <div class="mb-2 mt-6">
                <button @click="clear" class="button">clear</button>
            </div>
            <div>
                <button @click="addLabel" class="button">add</button>
            </div>
        </div>

    </div>
</template>

<script>


export default {
    name: "ComponentModuleAddLabel",
    data() {
        return {
            name: '',
            color: 'FFFFFF',

            colors: [
                {name: 'Black', color: '000000'},
                {name: 'Maroon', color: '000080'},
                {name: 'Green', color: '008000'},
                {name: 'Olive Green', color: '008080'},
                {name: 'Navy Blue', color: '800000'},
                {name: 'Purple', color: '800080'},
                {name: 'Teal', color: '808000'},
                {name: 'Grey', color: '808080'},
                {name: 'Silver', color: 'C0C0C0'},
                {name: 'Red', color: '0000FF'},
                {name: 'Lime Green', color: '00FF00'},
                {name: 'Yellow', color: '00FFFF'},
                {name: 'Blue', color: 'FF0000'},
                {name: 'Fuchsia', color: 'FF00FF'},
                {name: 'Aqua', color: 'FFFF00'},
                {name: 'Light Grey', color: 'C0C0C0'},
                {name: 'Dark Grey', color: '808080'},
                {name: 'White', color: 'FFFFFF'},
                {name: 'Cream', color: 'F0FBFF'},
                {name: 'Medium Grey', color: 'A4A0A0'},
                {name: 'Mint Green', color: 'C0DCC0'},
                {name: 'Sky Blue', color: 'F0CAA6'},
            ]
        }
    },
    methods: {
        clear() {
            this.name = '';
            this.color = 'FFFFFF';
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
        addLabel() {
            const vm = this;
            this.$store.commit('addLabel', {
                id: Date.now(),
                name: vm.name,
                color: vm.color,
            });
            this.hide();
        }
    },
    mounted() {
        this.$eventBus.$on('module-add-label:show', this.show);
        this.$eventBus.$on('module-add-label:hide', this.hide);
    }
}
</script>

<style scoped lang="scss">
#module-content {
    width: 96%;
    max-width: 320px;
}
</style>