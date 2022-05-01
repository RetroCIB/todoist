<script>
import {mapGetters} from "vuex";

export default{
    computed: {
        ...mapGetters([
            'items',
            'labels',
            'projects',
                'labelById',
        ])
    },
}
</script>