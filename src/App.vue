<template>
  <h3>{{ store.cou}}</h3>
  <button>Include</button>

  <router-view />
</template>

<script lang="ts" setup>
import  { useExample } from '@/store/useExample'
const store = useExample()

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
