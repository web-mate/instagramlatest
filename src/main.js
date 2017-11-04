import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)



new Vue({
  el: '#app',
  render(h) {
    return h(App, {
      props: {
        userid: this.$el.attributes.userid.value,
        accesstoken: this.$el.attributes.accesstoken.value
      }
    })
  }
})
