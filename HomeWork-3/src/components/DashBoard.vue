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
        <Products :list-of-product="listOfProduct"/>
      </div>
      <div>
        <Articles :list-of-articles="listOfArticles"/>
      </div>
    </div>
  </div>
</template>
<script>
import Products from './DashBoard/products.vue'
import Articles from './DashBoard/articles.vue'
import { get as getProducts } from '../data/product'
import { get as getArticles } from '../data/article'

export default {
  name: 'App',
  components: {
    Products,
    Articles
  },

  data () {
    return {
      listOfProduct: [],
      listOfArticles: []
    }
  },

  created () {
    getProducts({}, 10, 1).then((res) => {
      this.listOfProduct = res.data
    })
    getArticles({}, 10, 1).then((res) => {
      this.listOfArticles = res.data
    })
  }
}
</script>
