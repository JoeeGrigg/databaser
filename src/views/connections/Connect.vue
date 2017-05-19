<template>
  <div>
    Connecting... {{ store.connectionUUID }}
  </div>
</template>

<script>

export default {

  data () {
    return {
      store: Store
    }
  },

  created() {

    this.store.connectionUUID = this.$route.params.uuid;

  }

}
</script>

<style>

</style>
