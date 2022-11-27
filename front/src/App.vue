<template>
  <div class="center">
    <SwipeContainer />
  </div>
</template>

<script setup lang="ts">
import SwipeContainer from "./components/SwipeContainer.vue";
</script>

<style scoped>
.center {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
</style>
