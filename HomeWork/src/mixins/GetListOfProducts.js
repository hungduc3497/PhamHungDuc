export default {
  created () {
    const payload = { filter: {}, limit: 10, page: 1 }
    this.$store.dispatch('Products/getListOfProducts', payload)
  }
}
