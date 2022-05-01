<template>
    <section id="section-menu" class="flex flex-col justify-start items-start pr-20">

        <router-link to="/inbox">inbox</router-link>
        <router-link to="/today">today</router-link>
        <router-link to="/upcoming">upcoming</router-link>


        <hr class="w-full border border-green-500 my-5"/>

        <h3 class="text-xl font-bold">filters</h3>
        <router-link to="/">x</router-link>


        <h3 class="text-xl font-bold">labels</h3>
        <router-link to="/">x</router-link>

        <hr class="w-full border border-green-500 my-5"/>

        <h3 class="text-xl font-bold">projects</h3>
        <router-link to="/">x</router-link>

        <hr class="w-full border border-green-500 my-5"/>

        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
    </section>
</template>

<script>
export default {
    name: "SectionMenu"
}
</script>

<style scoped>

</style>