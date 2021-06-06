<template>
  <div class="container">
    <h2>Products</h2>
    <div class="d-flex flex-wrap">
      <div v-for="(item, index) in listOfProduct" :key="index" class="pr-4 pb-3">
        <div class="card" style="width: 320px">
          <img
            class="card-img-top"
            :src="item.img"
            alt="Card image"
            style="width: 100%"
          />
          <div class="card-body">
            <h3>{{ item.name }}</h3>
            <h4>{{ item.price }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get as getProducts } from "../product.js";
export default {
  name: "Products",
  data() {
    return {
      listOfProduct: [],
    };
  },
  created() {
    getProducts({}, 10, 1).then((res) => {
      this.listOfProduct = res?.data;
    });
  },
};
</script>
