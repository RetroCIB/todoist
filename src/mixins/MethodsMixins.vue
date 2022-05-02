<script>
export  default {
    methods:{
        get_YYYYMMDD_byDate(date){
            let formated_date = new Date(
                    date.getFullYear() + '-' +
                    ( '00' + ( date.getMonth() + 1).toString()).slice(-2) + '-' +
                    ( '00' + date.getDate().toString()).slice(-2) + ' ' +
                    '00:00:00'
            );
            return formated_date;
        }
    }
}
</script>