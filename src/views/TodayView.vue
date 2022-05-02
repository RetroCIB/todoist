<template>
    <div class="about">
        <h2 class="text-2xl mb-6">Today</h2>

        <template v-if="todayTasks.length">
            <template v-for="(item, idx_item) in todayTasks">
                <ComponentTaskBox :key="idx_item" :item="item"/>
            </template>
        </template>
        <template v-else>
            no tasks!
        </template>


    </div>
</template>

<script>

import ComputedMixins from "@/mixins/ComputedMixins";
import ComponentTaskBox from "@/components/ComponentTaskBox";

export default {
    mixins: [ComputedMixins],
    components: {ComponentTaskBox},
    methods: {
        removeItem(item) {
            this.$store.commit('removeItem', item);
        }
    }
}
</script>
