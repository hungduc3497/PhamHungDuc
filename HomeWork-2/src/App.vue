<template>
  <div class="container">
    <header>
      <div class="pt-2">
        <span
          ><a href="">Home</a>|<a href="">Products</a>|<a href=""
            >Articles</a
          ></span
        >
        <hr />
      </div>
    </header>
    <main>
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
    </main>
    <footer>
      <!-- We want footer content here -->
    </footer>
  </div>
</template>
<script>
import Products from "./components/products.vue";
import Articles from "./components/articles.vue";
import { get as getProducts } from "./product.js";
import { get as getArticles } from "./article.js";

export default {
  name: "App",
  components: {
    Products,
    Articles,
  },
  data() {
    return {
      listOfProduct: [],
      listOfArticles: [],
    };
  },
  created() {
    getProducts({}, 10, 1).then((res) => {
      this.listOfProduct = res?.data;
    })
    getArticles({}, 10, 1).then((res) => {
      this.listOfArticles = res?.data;
    })
  },
};
</script>

<style>
</style>
