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
        <Products />
      </div>
      <div>
        <Articles />
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

export default {
  name: "App",
  components: {
    Products,
    Articles,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style>
</style>
