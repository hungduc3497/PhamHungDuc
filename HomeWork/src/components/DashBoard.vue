<template>
  <div id="main-wrapper">
    <div>
      <div class="text-center">
        <h1>Advance Vue.js Component</h1>
        <h1>Composition With Container</h1>
        <h1>Components</h1>
        <h4>Demo application to show how to separate Vue.js components into</h4>
        <h4>Container components and Presentational Components</h4>
      </div>
      <div>
        <ProductsDashBoard :list-of-products="listOfProducts"/>
      </div>
      <div>
        <ArticlesDashBoard :list-of-articles="listOfArticles"/>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsDashBoard from './DashBoard/ProductsDashBoard.vue'
import ArticlesDashBoard from './DashBoard/ArticlesDashBoard.vue'
// import GetListOfArticles from '@mixins/GetListOfArticles'
// import GetListOfProducts from '@mixins/GetListOfProducts'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    ProductsDashBoard,
    ArticlesDashBoard
  },
  // mixins: [GetListOfArticles, GetListOfProducts],
  computed: {
    ...mapGetters({
      listOfArticles: 'Articles/listOfArticles',
      listOfProducts: 'Products/listOfProducts'
    })
  },
  created () {
    const payloadArticle = { filter: {}, limit: 10, page: 1 }
    this.$store.dispatch('Articles/getListOfArticle', payloadArticle)
    const payloadProducts = { filter: {}, limit: 10, page: 1 }
    this.$store.dispatch('Products/getListOfProducts', payloadProducts)
  }
}
</script>
