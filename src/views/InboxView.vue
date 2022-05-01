<template>
    <div class="about">
        <h2 class="text-2xl mb-2">Inbox</h2>
        <button-add-task class="mb-6"/>

        <template v-if="items.length">
            <template v-for="(item, idx_item) in items">
                <div :key="idx_item" class="mb-2 px-3 py-2"
                    :class="[ 'bg-' + ( ['green', 'red', 'yellow', 'blue' ][item.priority]) + '-100']"
                >
                    <p>{{ item.data}} : <span class="font-bold">{{ item.description }}</span></p>
                    <p>{{ item.label }}</p>
                    <p>{{ item.priority }}</p>
                    <button class="button" @click="removeItem(item)">remove</button>
                </div>
            </template>
        </template>
        <template v-else>
            no items!
        </template>



    </div>
</template>

<script>

import ComputedMixins from "@/mixins/ComputedMixins";

export default {
    mixins: [ ComputedMixins],
    methods: {
        removeItem(item) {
            this.$store.commit('removeItem', item);
        }
    }
}
</script>
