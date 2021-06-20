import { get } from '@/data/article'

const getListOfArticle = (context, payload) => {
  get(payload).then(res => {
    if (res && res.data.length > 0) {
      context.commit('GET_LIST_OF_ARTICLE', res.data)
    }
  })
}

export default {
  getListOfArticle
}
