<template>
  <div id="main-wrapper">
    <b-table
      :items="listOfProduct"
    >
    <template #cell(img)="data">
      <img :src="data.item.img">
    </template>
  </b-table>
  </div>
</template>

<script>

import { get as getpro } from '../data/product.js'

export default {
  name: 'ProductList',
  components: {},
  data () {
    return {
      listOfProduct: []
    }
  },
  async created () {
    await getpro({}, 10, 1).then(res => {
      this.listOfProduct = res && res.data ? res.data : []
    })
  }
}
</script>

<style scoped></style>
