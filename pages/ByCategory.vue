<template>
     <div class="row">
          <TitleHeading :title="this.$route.params.category.toUpperCase()" />
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
          <div v-if="categoriesNews.articles.length == 0"  class="col-12">
            <NoResultFound />
          </div>
        </div>
</template>

<script>
export default {
    name: 'ByCategory',
    async asyncData({$axios, params}) {
        const response = await $axios.get('everything?q='+params.category)
        return {
              categoriesNews : response.data
          }
  },
   head() {
    return {
      title: this.$route.params.category.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'News portal for everyone'
        }
      ],
   }
  },
}
</script>

<style>

</style>