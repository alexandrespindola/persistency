<template>
<h1>Home</h1>
<h3>{{ store.count }}</h3>
<button @click="store.increment()">Increment</button>
<button @click="store.decrement()">Decrement</button>
</template>


<script lang="ts" setup>
import  { useExample } from '@/store/useExample'
const store = useExample()
store.init()

</script>
