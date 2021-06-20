<template>
  <div id="main-wrapper">
    <b-table
      :items="listOfArticles"
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
// import GetListOfArticles from '@mixins/GetListOfArticles'

export default {
  name: 'ArticlesPage',
  components: {},
  // mixins: [GetListOfArticles],
  computed: {
    ...mapGetters({
      listOfArticles: 'Articles/listOfArticles'
    })
  },
  created () {
    const payload = { filter: {}, limit: 10, page: 1 }
    this.$store.dispatch('Articles/getListOfArticle', payload)
  }
}
</script>

<style scoped></style>
