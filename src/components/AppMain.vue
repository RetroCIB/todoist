<template>
    <main>
        <div class="container mx-auto p-5 flex flex-row">
            <section-menu class="w-1/4"/>
            <section-content class="w-3/4"/>
        </div>
    </main>
</template>

<script>
import SectionMenu from "@/components/SectionMenu";
import SectionContent from "@/components/SectionContent";
export default {
    name: "AppMain",
    components: {SectionContent, SectionMenu}
}
</script>

<style scoped>

</style>