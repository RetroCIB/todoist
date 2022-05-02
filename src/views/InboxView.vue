<template>
    <div class="about">
        <h2 class="text-2xl mb-6">Inbox</h2>

        <template v-if="inboxTasks.length">
            <template v-for="(item, idx_item) in inboxTasks">
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
    components: {ComponentTaskBox},
    mixins: [ComputedMixins],
}
</script>
