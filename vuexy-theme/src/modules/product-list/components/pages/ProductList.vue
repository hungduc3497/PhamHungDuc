<template>
  <div id="main-wrapper">
    <b-table :items="listOfProducts">
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
import { mapGetters } from 'vuex'
import { BTable } from 'bootstrap-vue'

export default {
  name: 'ProductList',
  components: {
    BTable,
  },
  computed: {
    ...mapGetters({
      listOfProducts: 'productList/listOfProducts',
    }),
  },
  created() {
    const payload = { filter: {}, limit: 10, page: 1 }
    this.$store.dispatch('productList/getListOfProducts', payload)
  },
}
</script>

<style scoped></style>
