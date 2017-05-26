<template>
  <div>
    <UIHeader title="Edit Connection"></UIHeader>
    <UIBody>
      <router-link to="/connections">Cancel</router-link>
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
