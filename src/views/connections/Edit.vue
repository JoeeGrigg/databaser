<template>
  <div>
    <UIHeader title="Edit Connection" :hasHistory="false" :hasSidebarToggles="false">
      <template slot="left">
        <router-link to="/connections" tag="button" class="button">Cancel</router-link>
      </template>
    </UIHeader>
    <UIBody>
      <ConnectionForm :uuid="$route.params.uuid"></ConnectionForm>
    </UIBody>
  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import UIBody from './../../components/ui/Body.vue'
import ConnectionForm from './../../components/connections/Form.vue'

export default {

  components: { UIHeader, UIBody, ConnectionForm },

  data () {
    return {
    }
  }

}
</script>

<style>

</style>
