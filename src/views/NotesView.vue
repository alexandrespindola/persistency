<template>
    <h1>Notes:</h1>
    <input type="text" v-model="note">
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const note = ref('')

watch(note, (newVal) => {
    localStorage.setItem('note', newVal)
})


</script>

<style lang="scss" scope></style>