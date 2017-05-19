<template>
  <div>
    <UIHeader title="Connections"></UIHeader>
    <h1>Connections</h1>
    <router-link to="/connections/new">New Connection</router-link>
    <ConnectionList></ConnectionList>
  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import ConnectionList from './../../components/connections/List.vue'

export default {

  components: { UIHeader, ConnectionList },

  data () {
    return {
    }
  }

}
</script>

<style>

</style>
