<script>
import {mapGetters} from "vuex";
import MethodsMixins from "@/mixins/MethodsMixins";

export default {
    mixins: [MethodsMixins],
    computed: {
        ...mapGetters([
            'items',
            'labels',
            'projects',
            'labelById',
            'projectById',
            'itemsByProjectId',
        ]),
        inboxTasks() {
            let tasks = this.items.filter(task => {
                return true;
            })
            //
            tasks = tasks.sort((a, b) => {
                return a.priority < b.priority ? -1 : 1;
            })
            tasks = tasks.sort((a, b) => {
                return a.data < b.data ? -1 : 1;
            })
            return tasks;
        },
        todayTasks() {
            let now = new Date(Date.now())
            let today = new Date(
                    now.getFullYear() + '-' +
                    ( '00' + ( now.getMonth() + 1).toString()).slice(-2) + '-' +
                    ( '00' + now.getDate().toString()).slice(-2)
            );

            let tasks = this.items.filter(task => {
                let task_date = new Date(task.data);
                return today.getTime() === task_date.getTime();
            })
            //
            tasks = tasks.sort((a, b) => {
                return a.priority < b.priority ? -1 : 1;
            })
            tasks = tasks.sort((a, b) => {
                return a.data < b.data ? -1 : 1;
            })
            return tasks;
        },
        upcomingTasks() {
            const vm = this;

            let now = new Date(Date.now())
            let today = new Date( vm.get_YYYYMMDD_byDate(now) );

            let tomorrow = new Date();
            tomorrow.setDate(today.getDate() +  1);
            tomorrow = new Date( vm.get_YYYYMMDD_byDate(tomorrow));

            let tasks = this.items.filter(task => {
                let task_date = new Date(task.data);
                task_date = new Date( vm.get_YYYYMMDD_byDate(task_date));
                return tomorrow.getTime() <= task_date.getTime();
            })
            //
            tasks = tasks.sort((a, b) => {
                return a.priority < b.priority ? -1 : 1;
            })
            tasks = tasks.sort((a, b) => {
                return a.data < b.data ? -1 : 1;
            })
            return tasks;
        },
    },
}
</script>