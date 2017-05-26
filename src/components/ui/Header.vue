<template>
  <header class="app_header">
    <div class="actions_button-group" v-if="hasHistory">
      <button class="button" @click="appBack"><i class="fa fa-chevron-left"></i></button>
      <button class="button" @click="appForward"><i class="fa fa-chevron-right"></i></button>
    </div>

    <slot name="left"></slot>

    <button class="button connection-status" disabled>{{ title }}</button>

    <slot name="right"></slot>

    <div class="actions_button-group" v-if="hasSidebarToggles">
      <button class="button"><i class="fa fa-toggle-left"></i></button>
      <button class="button"><i class="fa fa-toggle-right"></i></button>
    </div>

    <div class="actions_button-group" v-if="hasWindowControls">
      <button class="button" @click="appMinimize"><i class="fa fa-window-minimize"></i></button>
      <button class="button" @click="appMaximize"><i class="fa fa-window-maximize"></i></button>
      <button class="button" @click="appClose"><i class="fa fa-times"></i></button>
    </div>
  </header>
</template>

<script>

export default {

  props: {
    title: { required: true },
    hasHistory: { required: true, default: true },
    hasSidebarToggles: { required: true, default: true },
    hasWindowControls: { required: true, default: true }
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
