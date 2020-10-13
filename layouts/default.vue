<template>
  <div>
    <header>
      <Topbar />
      <MainMenu />
    </header>
    <div class="container">
      <NewsTicker />
    </div>
    <main class="my-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8 col-sm-12">
            <Nuxt />
          </div>
          <div class="col-md-12 col-lg-4 col-sm-12">
            <news-by-category-live />
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>
<script>
import NewsByCategoryLive from '@/widgets/NewsByCategory'
export default {
  name: 'Layout',
  components:{
    NewsByCategoryLive
  }

}
</script>
<style>
</style>
