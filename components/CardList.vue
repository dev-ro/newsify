<template>
  <div class="card p-2">
      <div class="d-flex flex-column align-items-center flex-md-row flex-sm-column">
          <img 
          :src="image" :alt="title" class="img-fluid mr-3"
          width="130px"
          height="130px"
          >
          <div class="ct-box">
              <h6><a :href="url">{{title}}</a></h6>
              <p class="text-muted" v-html="description"></p>
              <div class="ft-box d-flex">
                  <p class="mr-2">Source: <a :href="'/source/'+source">{{source}}</a></p>
                  <p>Author: <a :href="'/author/'+author">{{author}}</a></p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CardList',
    props: [
        'title' , 
        'description', 
        'content', 
        'image',
        'publishedat',
        'author',
        'source',
        'url'
    ],
}
</script>

<style lang="scss">
</style>