<!-- Header.vue -->
<template>
  <header>
    <router-link to="/">
      <h1>tubuyaita</h1>
    </router-link>
    <div v-if="currentUser" class="btns">
      <router-link :to="'/user/'+currentUser.uid">
        <button :style="'background-image: url('+currentUser.photoURL+')'"></button>
      </router-link>
      <button>
        <fa icon="sign-out-alt" @click="signOut"></fa>
      </button>
    </div>
    <div v-else class="btns">
      <button>
        <fa icon="user" @click="signIn"></fa>
      </button>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase'
import { auth } from '../main'
import { db } from '../main'
export default {
  data() {
    return {
      currentUser: {}
    }
  },
  created () {
    auth.onAuthStateChanged(user => {
      this.currentUser = user
    })
  },
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
      .then((result) => {
        this.$router.push('/user/'+result.user.uid)
        alert('Hello, '+result.user.displayName+'!')
        this.createUser(result.user)
      })
    },
    createUser(user) {
      db.collection('users').doc(user.uid).set({
        'name': user.displayName,
        'photoURL': user.photoURL,
        'email': user.email
      },{ merge: true })
    },
    signOut() {
      if (window.confirm('Are you Sure to Sign Out ?')) {
        auth.signOut()
        .then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/'),
          location.reload()
        })
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
header
  z-index 9999
  position fixed
  top 0
  width 100%
  text-align center
  padding 10px
  background-color rgb(29, 161, 242)
  h1
    width fit-content
    margin 0 auto
    font-size 1.4rem
  .btns
    position absolute
    top 5px
    right 30px
    cursor pointer
    img
      width 100%
</style>