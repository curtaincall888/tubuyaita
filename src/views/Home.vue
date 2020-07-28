<template>
  <div class="home">
    <div class="list">
      <Item v-for="tubuyaki in orderBy(tubuyakies, 'date', -1)"
            :key="tubuyaki.id"
            :id="tubuyaki.id"
            :uid="tubuyaki.uid"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Item from '@/components/Item.vue'
import { db } from '../main'
import Vue2Filters from 'vue2-filters'

export default {
  name: 'home',
  data () {
    return {
      tubuyakies: []
    }
  },
  firestore() {
    return {
      tubuyakies: db.collection('tubuyakies')
    }
  },
  components: {
    Item
  },
  mixins: [Vue2Filters.mixin]
}
</script>