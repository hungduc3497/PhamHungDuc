<template>
  <div id="main-wrapper">
    <b-table :items="listOfProduct">
      <template #cell(img)="data">
        <img :src="data.item.img" />
      </template>
      <template #cell(categories)="data">
        <div v-html="$getDataFromArrayToList(data.item.categories)" />
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
    await getpro({}, 10, 1).then((res) => {
      this.listOfProduct = res && res.data ? res.data : []
    })
  }
}
</script>

<style scoped></style>
