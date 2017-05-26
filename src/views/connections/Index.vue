<template>
  <div>
    <UIHeader title="Connections"></UIHeader>
    <UIBody>
      <router-link to="/connections/new">New Connection</router-link>
      <ConnectionList></ConnectionList>
    </UIBody>
  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import UIBody from './../../components/ui/Body.vue'
import ConnectionList from './../../components/connections/List.vue'

export default {

  components: { UIHeader, UIBody, ConnectionList },

  data () {
    return {
    }
  }

}
</script>

<style>

</style>
