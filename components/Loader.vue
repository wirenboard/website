<script setup lang="ts">
import Spinner from 'assets/icons/spinner.svg';
</script>

<template>
  <Spinner class="wb-loader" />
</template>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.wb-loader {
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
}


</style>
