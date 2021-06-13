<template>
  <div id="main-wrapper">
    <b-table
      :items="listOfArticles"
    >
    <template #cell(img)="data">
      <img :src="data.item.img">
    </template>
  </b-table>
  </div>
</template>

<script>

import { get as getArticles } from '../data/article.js'

export default {
  name: 'Articles',
  components: {},
  data () {
    return {
      listOfArticles: []
    }
  },
  async created () {
    await getArticles({}, 10, 1).then(res => {
      this.listOfArticles = res && res.data ? res.data : []
    })
  }
}
</script>

<style scoped></style>
