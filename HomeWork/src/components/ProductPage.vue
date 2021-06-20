<template>
  <div id="main-wrapper">
    <b-table
      :items="listOfProducts"
    >
    <template #cell(img)="data">
      <img :src="data.item.img">
    </template>
    <template #cell(categories)="data">
        <div v-html="$getDataFromArrayToList(data.item.categories)" />
      </template>
  </b-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import GetListOfProducts from '@mixins/GetListOfArticles'

export default {
  name: 'ProductList',
  components: {},
  // mixins: [GetListOfProducts],
  computed: {
    ...mapGetters({
      listOfProducts: 'Products/listOfProducts'
    })
  },
  created () {
    const payload = { filter: {}, limit: 10, page: 1 }
    this.$store.dispatch('Products/getListOfProducts', payload)
  }
}
</script>

<style scoped></style>
