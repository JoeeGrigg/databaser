<template>
  <header class="app_header">
    <div class="actions_button-group">
        <button class="button" @click="appBack"><i class="fa fa-chevron-left"></i></button>
        <button class="button" @click="appForward"><i class="fa fa-chevron-right"></i></button>
      </div>

      <div class="actions_breadcrumbs">
        <button class="button">Server</button>
        <button class="button">Database</button>
        <button class="button">Table</button>
      </div>

      <button class="button connection-status" disabled>{{ title }}</button>

      <button class="button">Refresh</button>

      <div class="actions_button-group">
        <button class="button"><i class="fa fa-toggle-left"></i></button>
        <button class="button"><i class="fa fa-toggle-right"></i></button>
      </div>

      <div class="actions_button-group">
        <button class="button" @click="appMinimize"><i class="fa fa-window-minimize"></i></button>
        <button class="button" @click="appMaximize"><i class="fa fa-window-maximize"></i></button>
        <button class="button" @click="appClose"><i class="fa fa-times"></i></button>
      </div>
  </header>
</template>

<script>

export default {

  props: {
    title: { required: true }
  },

  methods: {

    appClose() {
      Event.$emit('app-close')
    },
    appMaximize() {
      Event.$emit('app-maximize')
    },
    appMinimize() {
      Event.$emit('app-minimize')
    },
    appBack() {
      Event.$emit('app-back')
    },
    appForward() {
      Event.$emit('app-forward')
    }

  }

}

</script>
