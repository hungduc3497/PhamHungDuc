/* eslint-disable */ 
export default {
  install (Vue, options) {
    Vue.prototype.$getDataFromArrayToList = item => {
      if (item.length === 0) return ''
      let show = ''
      for (let i = 0; i < item.length; i += 1) {
        show += `<p>${item[i]}</p>`
      }
      return show
    }
  }
}
