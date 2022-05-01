<template>
    <section id="section-menu" class="flex flex-col justify-start items-start pr-20">

        <router-link to="/inbox">inbox</router-link>
        <router-link to="/today">today</router-link>
        <router-link to="/upcoming">upcoming</router-link>

        <hr class="w-full border border-green-500 my-5"/>

        <!-- labels -->
        <h3 class="text-xl font-bold">labels</h3>
        <button @click="$eventBus.$emit('module-add-label:show')">+add label</button>
        <ul v-if="labels.length">
            <template v-for="(label, idx_label) in labels">
                <li   class="flex justify-start items-center">
                    <span class="rounded-full inline-block  border w-3 h-3 mr-2" :style="{
                        background : '#' + label.color
                    }"></span>
                    <span>{{ label.name }}</span>
                </li>
            </template>

        </ul>


        <hr class="w-full border border-green-500 my-5"/>

        <h3 class="text-xl font-bold">projects</h3>
        <router-link to="/">x</router-link>

        <hr class="w-full border border-green-500 my-5"/>

        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
    </section>
</template>

<script>
import ComputedMixins from "@/mixins/ComputedMixins";

export default {
    name: "SectionMenu",
    mixins: [ComputedMixins],

}
</script>

<style scoped>

</style>