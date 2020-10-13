<template>
  
</template>

<script>
export default {
    methods: {
        async getNews() {
            const response = await this.$axios.get('everything?qInTitle='+encodeURIComponent(this.$route.params.slug))
            console.log(response)
        }
    },
    created() {
        this.getNews()
    }
}
</script>

<style>

</style>