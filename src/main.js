// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Slider from './components/Slider'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#PRO',
  components: {Slider},
  mounted: function () {
    this.$refs.pro.play()
  }
})
