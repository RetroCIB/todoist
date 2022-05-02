<template>
    <div class="about">
        <h2 class="text-2xl mb-2">Label : <strong>{{ labelById(id_label).name }}</strong></h2>
        <button-add-task class="mb-6"/>
        <template v-if="itemsByLabelId(id_label).length">
            <template v-for="(item, idx_item) in  itemsByLabelId(id_label) ">
                <div :key="idx_item" class="mb-2 px-3 py-2 flex justify-between"
                     :class="[ 'bg-' + ( ['green', 'red', 'yellow', 'blue' ][item.priority]) + '-100']"
                >

                    <div>
                        <p>{{ item.data }} : <span class="font-bold">{{ item.description }}</span></p>

                        <p class="flex justify-start items-center italic text-sm">
                        <span class="rounded-full inline-block  border w-3 h-3 mr-2" :style="{
                            background : '#' + labelById(item.id_label).color
                        }"></span>
                            <span>{{ labelById(item.id_label).name }}</span>
                        </p>
                        <!-- <p class="italic text-xs">Priority level {{ item.priority }}</p>-->
                    </div>
                    <div>
                        <p>{{ projectById(item.id_project).name }}</p>
                        <button class="button" @click="removeItem(item)">remove</button>
                    </div>

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
    mixins: [ComputedMixins],
    props: {
        id_label: null,
    },
    methods: {
        removeItem(item) {
            this.$store.commit('removeItem', item);
        }
    }
}
</script>
