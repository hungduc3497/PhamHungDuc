<template>
  <div class="container">
    <h2>Articles</h2>
    <div>
      <div class="d-flex pb-3" v-for="(item, index) in listOfArticles" :key="index">
        <div>
          <img :src="item.img" alt="" />
        </div>
        <div class="pl-3">
            <h4 class="pb-1">{{item.name}}</h4>
            <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get as getArticles } from "../article.js";
export default {
  name: "Articles",
  data() {
    return {
      listOfArticles: [],
    };
  },
  created() {
    getArticles({}, 10, 1).then((res) => {
      this.listOfArticles = res?.data;
    });
  },
};
</script>
