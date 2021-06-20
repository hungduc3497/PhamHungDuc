import { get } from '@/data/product'

const getListOfProducts = (context, payload) => {
  get(payload).then(res => {
    if (res && res.data.length > 0) {
      context.commit('GET_LIST_OF_PRODUCT', res.data)
    }
  })
}

export default {
  getListOfProducts
}
