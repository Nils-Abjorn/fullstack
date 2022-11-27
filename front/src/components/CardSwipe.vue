<template>
  <ElCard class="box" :body-style="{ padding: '0px' }"
    ><img src="../assets/resto.jpg" />
    <div style="padding: 14px">
      <h1>{{ type }}</h1>
    </div></ElCard
  >
</template>

<script setup lang="ts">
defineProps<{
  type?: string;
}>();
</script>

<style scoped>
.box {
  width: 100%;
  height: 600px;
  max-width: 400px;
  border-radius: 32px;
}
</style>
