import bootstrap from './bootstrap'
import { remote } from 'electron'

require("./../styles/style.scss");

new Vue({
  router: Router,
  el: '#app',

  created() {
    Event.$on('app-close', () => remote.getCurrentWindow().close())
    Event.$on('app-maximize', () => remote.getCurrentWindow().maximize())
    Event.$on('app-minimize', () => remote.getCurrentWindow().minimize())
    Event.$on('app-back', () => this.$router.go(-1))
    Event.$on('app-forward', () => this.$router.go(1))
  }

})
