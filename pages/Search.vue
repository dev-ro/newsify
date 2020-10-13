<template>
     <div class="row">
          <TitleHeading :title="'Your search: '+ this.$route.query.q" />
          <div v-for="(news,index) in categoriesNews.articles" :key="index" class="col-12 mb-3">
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
          <div v-if="noResult"  class="col-12">
            <NoResultFound />
          </div>
        </div>
</template>

<script>
export default {
    name: 'ByCategory',
    data() {
        return {
            categoriesNews: [],
            noResult: false
        }
    },
    methods :{
        async getSearchRes() {
            const  response = await this.$axios.get('everything?q='+this.$route.query.q)
            if(response.data.articles.length > 0) {
                this.noResult = false
                this.categoriesNews = response.data
            } else {
                this.noResult = true
            }
        }
    },
    mounted() {
        this.getSearchRes()
    }
}
</script>

<style>

</style>