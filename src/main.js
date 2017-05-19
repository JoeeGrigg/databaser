import bootstrap from './bootstrap'
import { remote } from 'electron';

new Vue({
  router: Router,
  el: '#app',

  created() {
    Event.$on('closeApp', () => remote.getCurrentWindow().close())
  }

})
