<template>
  <header>
    <span class="ui-header__title">{{ title }}</span>
    <button @click="close">Close</button>
  </header>
</template>

<script>

export default {

  props: {
    title: { required: true }
  },

  methods: {

    close() {
      Event.$emit('closeApp')
    }

  }

}

</script>
