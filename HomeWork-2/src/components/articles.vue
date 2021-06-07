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

export default {
  name: "Articles",
  data() {
    return {
    };
  },
  props: {
    listOfArticles: {
      type: Array,
      default: null
    }
  },
  created() {
  },
};
</script>
