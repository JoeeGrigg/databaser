<template>
  <ul class="list" :class="{ 'thumbnails': thumbnails }">
    <li v-for="table in tables">{{ table.name }}</li>
  </ul>
</template>

<script>

export default {

  props: {
    thumbnails: { default: false }
  },

  data() {
    return {
      tables: [],
      store: Store
    }
  },

  created() {
    console.log('Hello')
    this.store.DB.listTables().then(res => {
      this.tables = res;
    })
  }

}

</script>
