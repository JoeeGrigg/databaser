<template>
  <div>
    <UIHeader title="Connections" :hasHistory="false" :hasSidebarToggles="false">
      <template slot="left">
        <router-link to="/connections/new" tag="button" class="button">New Connection</router-link>
      </template>
    </UIHeader>
    <UIBody>
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
