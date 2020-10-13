<template>
  <div>
      <TitleHeading class="container" title="Top 10 News" >
          <select slot="extradiv" @change="fetchTop10NewsBySelectOPtion" name="" v-model="category" class="form-control-sm" id="">
            <option value="">Select Category</option>
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
          </select>
        </TitleHeading>
        <div class="row">
          <p class="col-12 text-center" v-if="loading">
            Loading....
          </p>
          <div v-else v-for="(news,index) in news10" :key="index" class="col-12 mb-3">
            <SmallCard 
              :title="news.title"
              :image="news.urlToImage"
              :author="news.author"
              :url="news.url"
              :publishedat="news.publishedAt"
              :source="news.source.name"
            />
          </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'NewsByCategoryLive',
    data() {
        return {
        news10: [],
        category: 'general',
        loading: true,
        }
    },
    methods: {
    async fetchTop10NewsBySelectOPtion() {
      this.loading = true
      const response = await this.$axios.get('top-headlines?category='+this.category+'&country=us&pageSize=10')
      if(response.status === 200) {
        this.news10 = response.data.articles
        this.loading = false
      }
    } 
  },
    mounted() {
    this.fetchTop10NewsBySelectOPtion()
  }
}
</script>

<style>

</style>