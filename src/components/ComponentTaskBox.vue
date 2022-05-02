<template>
    <div class="mb-2 px-3 py-2 flex justify-between"
         :class="[
                 'bg-' + ( ['green', 'red', 'yellow', 'blue' ][item.priority]) + '-100',
                 'text-' + ( ['green', 'red', 'yellow', 'blue' ][item.priority]) + '-900'

                 ]"
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
            <p class="mb-3">{{ projectById(item.id_project).name }}</p>
            <button class="button block mb-2" @click="removeItem(item)">remove</button>
            <button class="button block" @click="$eventBus.$emit('module-add-task:show',item)">edit</button>
        </div>
    </div>
</template>

<script>
import ComputedMixins from "@/mixins/ComputedMixins";

export default {
    mixins: [ComputedMixins],
    props: {
        item: null,
    }

}
</script>

<style scoped>

</style>