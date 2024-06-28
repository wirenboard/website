<script setup lang="ts">
defineProps<{ id: string; }>();
</script>

<template>
  <iframe
    class="youtube"
    width="500"
    height="280"
    frameborder="0"
    :src="`https://www.youtube.com/embed/${id}`"
    allowfullscreen
  />
</template>

<style>
.youtube {
  float: right;
  margin-left: 20px;

  @media (max-width: 1024px) {
    float: none;
    margin-left: 0;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
}
</style>
