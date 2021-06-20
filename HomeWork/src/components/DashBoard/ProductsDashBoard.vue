<template>
  <div class="container">
    <h2>Products</h2>
    <div class="d-flex flex-wrap">
      <div v-for="(item, index) in listOfProducts" :key="index" class="pr-4 pb-3">
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

export default {
  name: 'Products',
  data () {
    return {
    }
  },
  props: {
    listOfProducts: {
      type: Array,
      default: null
    }
  },
  created () {}
}
</script>
