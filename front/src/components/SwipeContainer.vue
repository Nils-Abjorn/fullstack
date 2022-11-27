<template>
  <div class="card">
    <CardSwipe :type="data"></CardSwipe>
    <ElButton
      round
      size="large"
      type="danger"
      :icon="Delete"
      @click="execute()"
    ></ElButton>
  </div>
</template>

<script setup lang="ts">
import CardSwipe from "./CardSwipe.vue";
import { Delete } from "@element-plus/icons-vue";

import { useAxios } from "@vueuse/integrations/useAxios";

const { data, isLoading, isFinished, execute } = useAxios(
  "api/resto/getRandom"
);
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
}
</style>
