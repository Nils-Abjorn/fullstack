<template>
  <div class="card">
    <CardSwipe :type="data"></CardSwipe>
    <ElButton @click="execute()"></ElButton>
    <div>Loading: {{ isLoading.toString() }}</div>
    <div>Finished: {{ isFinished.toString() }}</div>
  </div>
</template>

<script setup lang="ts">
import CardSwipe from "./CardSwipe.vue";

import { useAxios } from "@vueuse/integrations/useAxios";

const { data, isLoading, isFinished, execute } = useAxios("api/example");
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
