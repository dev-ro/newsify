<template>
  <div class="row">
    <TitleHeading class="container" title="General News" />
    <div v-for="(news,index) in generalNews.articles" :key="index" class="col-12 mb-3">
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({$axios}) {
    const response = await $axios.get('top-headlines?sources=google-news&pageSize=10')
    return {
      generalNews : response.data
    }
  },
  head() {
    return {
      title: 'NEWSIFY',
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
