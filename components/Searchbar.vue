 <template>
    <div class="searchbox ml-auto align-items-center d-flex">
        <form action="/search" method="get" class="form-inline">
            <input 
                type="text" 
                class="form-control" 
                :placeholder="placeholder"
                name="q"
            > 
        </form>
    </div>
 </template>
 
 <script>
 export default {
    name: 'SearchBox',
    props: {
        placeholder: {
            type: String,
            default: 'Search here...'
        }
    },
    methods: {
        search() {
            
        }
    }
 }
 </script>
 
 <style>
 
 </style>