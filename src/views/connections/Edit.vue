<template>
  <div>
    <UIHeader title="Edit Connection"></UIHeader>
    <router-link to="/connections">Cancel</router-link>
    <ConnectionForm :uuid="$route.params.uuid"></ConnectionForm>
  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import ConnectionForm from './../../components/connections/Form.vue'

export default {

  components: { UIHeader, ConnectionForm },

  data () {
    return {
    }
  }

}
</script>

<style>

</style>
