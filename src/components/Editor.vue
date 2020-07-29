<template>
  <li class="item">
    <div class="user-box">
      <div class="avatar" :style="'background-image: url('+currentUser.photoURL+')'"></div>
      <p class="user-name">{{ currentUser.displayName }}</p>
    </div>
    <div class="editor">
      <textarea placeholder="new tubuyaki" v-model="newTubuyaki" @keypress.enter="createTubuyaki"></textarea>
      <p class="message">Press Enter to tubuyaki</p>
    </div>
  </li>
</template>

<script>
import { db } from '../main'
export default {
  props: ['currentUser'],
  data() {
    return {
      newTubuyaki: '',
    }
  },
  methods: {
    createTubuyaki() {
      const date = new Date()
      db.collection('tubuyakies').add({
        'content': this.newTubuyaki,
        'date': date,
        'uid': this.$props.currentUser.uid
      })
      .then(
        this.newTubuyaki = ''
      )
    }
  }
}
</script>