<template>
  <div class="logo">
    <RouterLink to="/">
      <img
        src="../../../assets/images/logos/losung.png"
        alt="Logo"
        class="logo-image"
        style="width: 100px; height: auto; filter: drop-shadow(0 0 5px var(--v-theme-primary))"
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
