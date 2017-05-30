<template>
  <div>
    <UIHeader title="Connected" :hasHistory="false"></UIHeader>
    <UIBody>
      {{this.store.connection}}
    </UIBody>
  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import UIBody from './../../components/ui/Body.vue'

export default {

  components: { UIHeader, UIBody },

  data () {
    return {
      store: Store
    }
  },

  created() {
    console.log('Connection', this.store.DB)
  }

}

</script>
