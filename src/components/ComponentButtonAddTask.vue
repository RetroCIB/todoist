<template>
    <div class="my-2">
        <button class="button" @click="addTask()">+ add task</button>
    </div>
</template>

<script>
export default {
    name:"ButtonAddTask",
    methods:{
        addTask(){
            this.$eventBus.$emit('module-add-task:show');
        }
    }
}
</script>

<style scoped>

</style>