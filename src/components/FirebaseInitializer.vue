<template>
  <v-container>
    <v-card class="d-flex pa-2">
      <v-card-text>
        <div v-if="isFirebaseInit" class="green--text">Ready!</div>
        <v-textarea name="firebaseConfig" label="Firebase Config" v-model="firebaseConfig"></v-textarea>
        <v-btn color="orange" class="white--text" v-on:click="setConfig">Initialize Firebase App!</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import firebase from 'firebase'
import firebaseStore from '@/stores/firebaseStore'

const FBPGFK = 'fbpg.fk'
export default {
  name: "FirebaseInitializer",
  methods: {
    setConfig: function() {
      const goodConfig = this.firebaseConfig.replace(
        /(['"])?([a-z0-9A-Z_]+)(['"])?:/g,
        '"$2": '
      );
      localStorage.setItem(FBPGFK, goodConfig)
      firebase.initializeApp(goodConfig)
      alert('Firebase initialization is successfully!')
      firebaseStore.commit("setFirebaseStatus", true)
    }
  },
  data() {
    return {
      firebaseConfig: localStorage.getItem(FBPGFK)
    };
  },
  computed: {
    isFirebaseInit: () => firebaseStore.state.isFirebaseInit
  }
};
</script>
