<template>
  <div>
    <UIHeader title="Connected" :hasHistory="false">
      <template slot="right">
        <button class="button" @click="toggleThubnails"><i class="fa" :class="{ 'fa-folder': !thumbnails, 'fa-list': thumbnails }"></i></button>
      </template>
    </UIHeader>
    <UIBody>
      <TableList v-if="thumbnails" :thumbnails="true"></tableList>
      <TableList v-else></tableList>
    </UIBody>
  </div>
</template>

<script>
import UIHeader from './../../components/ui/Header.vue'
import UIBody from './../../components/ui/Body.vue'
import TableList from './../../components/server/TableList.vue'

export default {

  components: { UIHeader, UIBody, TableList },

  data () {
    return {
      thumbnails: false,
      store: Store
    }
  },

  methods: {
    toggleThubnails() {
      this.thumbnails = !this.thumbnails
    }
  }

}

</script>
