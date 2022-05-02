<template>
    <section id="section-menu" class="flex flex-col justify-start items-start pr-20">
        <!-- labels -->
        <h3 class="text-xl font-bold">tasks</h3>
        <button @click="$eventBus.$emit('module-add-task:show')">+add task</button>

        <ul class="w-full overflow-auto mt-4" style="max-height:150px">
            <li class="flex justify-start items-center">
                <router-link to="/inbox">inbox</router-link>
            </li>
            <li class="flex justify-start items-center">
                <router-link to="/today">today</router-link>
            </li>
            <li class="flex justify-start items-center">
                <router-link to="/upcoming">upcoming</router-link>
            </li>
        </ul>

        <!-- -->
        <hr class="w-full border border-green-500 my-5"/>

        <!-- labels -->
        <h3 class="text-xl font-bold">labels</h3>
        <button @click="$eventBus.$emit('module-add-label:show')">+add label</button>
        <ul v-if="labels.length" class="w-full overflow-auto mt-4" style="max-height:150px">
            <template v-for="(label, idx_label) in labels">
                <li class="flex justify-start items-center">
                    <router-link :to="{ name : 'label', params: { id_label: label.id }}">
                        <span class="rounded-full inline-block  border w-3 h-3 mr-2" :style="{
                            background : '#' + label.color
                        }"></span>
                        <span>{{ label.name }}</span>
                    </router-link>
                </li>
            </template>
        </ul>

        <!-- -->
        <hr class="w-full border border-green-500 my-5"/>

        <!-- projects -->
        <h3 class="text-xl font-bold">projects</h3>
        <button @click="$eventBus.$emit('module-add-project:show')">+add project</button>
        <ul v-if="projects.length" class="w-full overflow-auto mt-4" style="max-height:150px">
            <template v-for="(project, idx_project) in projects">
                <li class="flex justify-start items-center">
                    <router-link :to="{ name : 'project', params: { id_project: project.id }}">
                        <span>{{ project.name }}</span>
                    </router-link>
                </li>
            </template>
        </ul>

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