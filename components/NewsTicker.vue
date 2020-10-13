<template>
    <div class="newsTicker">
        <span class="title">Top Headlines</span>
        <div class="headings" style="overflow:hidden;">
            <div v-if="loading" class="ml-2 text-muted" >Loading......</div>
           <marquee-text v-else :duration="50" :paused="tickerPause">
               <span v-for="(headline,index) in topHeadlines" :key="index">
               <a @mouseenter="tickerPause=true" @mouseleave="tickerPause=false" :href="headline.url" class="text-dark" >{{headline.title}}</a>&nbsp;|&nbsp;
               </span>
           </marquee-text>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsTicker',
    data() {
        return {
            topHeadlines: null,
            tickerPause: false,
            loading: false,
        }
    },
    methods: {
        async fetchTopHeadLines() {
            this.loading = true;
            const response = await this.$axios.get('top-headlines?sources=bbc-news&pageSize=10')
            if(response.data.status == 'ok') {
                this.topHeadlines = response.data.articles
                this.loading = false
            }
        }
    },
    created() {
        this.fetchTopHeadLines()
    }
}
</script>