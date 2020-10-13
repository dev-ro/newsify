<template>
 <div class="row">
    <TitleHeading :title="'Country: '+headingtitle" />
    <div v-for="(news,index) in news.articles" :key="index" class="col-12 mb-3">
    <CardList
        :title="news.title"
        :description="news.description"
        :author="news.author"
        :image="news.urlToImage"
        :source="news.source.name"
        :publishedat="news.publishedAt"
        :content="news.content"
        :url="news.url"
    />
    </div>
    <div v-if="news.articles.length == 0"  class="col-12">
    <NoResultFound />
</div>
</div>
</template>

<script>
export default {
    name: 'ShowNewsListingByCountry',
    data() {
        return {
            headingtitle: '',
            country: ''
        }
    },
    created() {
        this.headingtitle = this.$route.params.country.toUpperCase()
    },
    async asyncData({params, $axios}) {
        const response = await $axios.get('https://newsapi.org/v2/top-headlines?country='+params.country)
        return {
            news: response.data,
            total: response.data.totalResults
        }
    },
}
</script>

<style>

</style>